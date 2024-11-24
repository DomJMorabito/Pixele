# Base image for all stages

FROM node:18-alpine AS base

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

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN npm run build

# Production runner stage

FROM base AS runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Create non-root user

RUN addgroup --system --gid 1001 pixele
RUN adduser --system --uid 1001 pixeleuser

# Copy only necessary files

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set permissions

RUN chown -R pixeleuser:pixele /app

# Switch to non-root user

USER pixeleuser

# Expose port

EXPOSE 3000

# Use server.js from standalone output

CMD ["node", "server.js"]