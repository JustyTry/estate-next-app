import Database from "better-sqlite3";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.nextUrl.searchParams.get("id");
  const db = new Database("./database/db.sqlite");
  const stmt = db.prepare(`SELECT * FROM apartments WHERE id=${id}`).get();
  stmt;
  db.close();
  return NextResponse.json({ stmt });
}
