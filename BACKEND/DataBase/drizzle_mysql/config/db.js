// config/db.js
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../drizzle/schema.js'; // ✅ Include schema

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { schema }); // ✅ Use neon client + schema
