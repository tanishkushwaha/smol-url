"use server";

import ShortUniqueId from "short-unique-id";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function genShortUrl(url: string) {
  try {
    const fullUrl = new URL(url);
    const uid = new ShortUniqueId({ length: 6 });
    uid.setDictionary("alpha_lower");
    const shortUrl = uid.rnd();

    await sql`INSERT INTO urls VALUES (${shortUrl}, ${fullUrl.href})`;

    return shortUrl;
  } catch (err) {
    console.log(err);
  }
}

export async function getFullUrl(url: string) {
  try {
    const res = await sql`SELECT * FROM urls WHERE short_url=${url}`;

    if (!res.rows[0]) return;

    return res.rows[0].full_url;
  } catch (err) {
    console.log(err);
  }
}

export async function serverRedirect(url: string) {
  redirect(url);
}
