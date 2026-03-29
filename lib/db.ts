import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function createContactTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;
}

export async function saveContact(name: string, email: string, message: string) {
  const result = await sql`
    INSERT INTO contacts (name, email, message)
    VALUES (${name}, ${email}, ${message})
    RETURNING id, created_at
  `;
  return result[0];
}

export { sql };
