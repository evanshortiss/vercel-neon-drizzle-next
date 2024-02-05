Sample project that uses Neon with Drizzle and Next.js, and can be deployed on Vercel.

## Getting Started

1. Sign up for an account on [https://neon.tech](https://neon.tech/docs/get-started-with-neon/signing-up).
2. Create a `.env` file inside this repository and add your Neon Postgres database's connection string.
    ```
    DATABASE_URL=postgresql://username:password@ep-adj-noun-id.us-east-2.aws.neon.tech/neondb?sslmode=require
    ```
3. Prepare your database using Drizzle and the included seed script:
    ```bash
    npm i
    npm run drizzle:generate
    npm run drizzle:push
    npm run seed
    ```
4. Start the application in dev mode:
    ```bash
    npm run dev
    ```
