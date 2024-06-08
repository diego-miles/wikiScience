import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL_TURSO!, authToken: process.env.DATABASE_TOKEN! });

export const db = drizzle (client);

