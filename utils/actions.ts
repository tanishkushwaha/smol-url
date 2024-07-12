"use server";

import ShortUniqueId from "short-unique-id";
import pool from "@/utils/db";
import { redirect } from "next/navigation";

export async function genShortUrl(url: string) {
  try {
    const fullUrl = new URL(url);
    const uid = new ShortUniqueId({ length: 4 });
    uid.setDictionary("alpha_lower");
    const shortUrl = uid.rnd();

    await pool!.query("INSERT INTO urls VALUES ($1,$2)", [
      shortUrl,
      fullUrl.href,
    ]);

    return shortUrl;
  } catch (err) {
    console.log(err);
  }
}

export async function getFullUrl(url: string) {
  try {
    const res = await pool!.query("SELECT * FROM urls WHERE short_url=$1", [
      url,
    ]);

    if (!res.rows[0]) return;

    return res.rows[0].full_url;
  } catch (err) {
    console.log(err);
  }
}

export async function serverRedirect(url: string) {
  redirect(url);
}
