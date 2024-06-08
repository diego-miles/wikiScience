import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./src/db/schema/elements.ts",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN
  }
})

