# Base image for all stages

FROM node:20-alpine AS base

# Add sharp dependencies

RUN apk add --no-cache vips-dev build-base

# Install dependencies stage

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder stage

FROM base AS builder
WORKDIR /app

# Copy dependencies from previous stage

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set production environment

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build --verbose || (cat /app/.next/error.log && exit 1)
RUN test -d /app/.next/standalone || (echo "Standalone directory is missing. Ensure 'output: standalone' is configured in next.config.js" && exit 1)

# Production runner stage

FROM base AS runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Create non-root user

RUN addgroup --system --gid 1001 pixele
RUN adduser --system --uid 1001 pixeleuser

# Copy only necessary files

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules/sharp ./node_modules/sharp

# Set permissions

RUN chown -R pixeleuser:pixele /app

# Switch to non-root user

USER pixeleuser

# Expose port

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1))"

# Use server.js from standalone output

CMD ["node", "server.js"]