import { drizzle } from 'drizzle-orm/better-sqlite3';
import { createClient } from '@libsql/client';
import Database from 'better-sqlite3';


const client = createClient({ url: process.env.DATABASE_URL_TURSO!, authToken: process.env.DATABASE_TOKEN! });


const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);




// export const db = drizzle (client);

