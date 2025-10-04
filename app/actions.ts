"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  const sql = neon(process.env.DATABASE_URI || "");
  const data = await sql`...`;
  return data;
}
