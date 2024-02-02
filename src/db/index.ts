import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true

export function getDatabase () {
  // Workaround until Neon Vercel integration adds this query parameter
  const url = new URL(process.env.DATABASE_URL!)
  url.searchParams.set('sslmode', 'require')

  const sql = neon(url.toString());
  const db = drizzle(sql);

  return db
}
