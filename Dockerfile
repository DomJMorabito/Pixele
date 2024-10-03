# 1. Use official Node.js image as the base image:

FROM node:18-alpine AS builder

# 2. Set working directory inside the container:

WORKDIR /app

# 3. Copy package.json & package-lock.json to install dependencies:

COPY package*.json ./

# 4. Install dependencies:

RUN npm install

# 5. Copy all source code to the container:

COPY . .

# 6. Build Next.js app:

RUN npm run build

# 7. Use a second, smaller base image to run app in production:

FROM node:18-alpine

# 8. Set working directory inside the container:

WORKDIR /app

# 9. Copy the built files from the builder stage:

COPY --from=builder /app /app

# 10. Expose the port Next.js uses (3000 by default):

EXPOSE 3000

# 11. Start the Next.js app:

CMD ["npm", "run", "start"]