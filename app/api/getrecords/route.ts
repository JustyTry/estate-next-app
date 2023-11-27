import Database from "better-sqlite3";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const db = new Database("./database/db.sqlite");

  const stmt = db.prepare("SELECT * FROM apartments").all();
  return NextResponse.json({ stmt });
}
