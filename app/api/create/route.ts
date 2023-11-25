import Database from 'better-sqlite3';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const db = new Database('./database/db.sqlite');

  const stmt = db.prepare('SELECT * FROM apartments').all();
  return NextResponse.json({ stmt });
}
export async function POST(req: Request, res: Response) {
  const db = new Database('./database/db.sqlite');
  const body = await req.json();
  const stmt = db.prepare(
    'INSERT INTO apartments (title, cost, rooms_amount, square, floor, adress, date) VALUES (?,?,?,?,?,?,?)',
  );
  stmt.run(body.title, body.cost, body.rooms_amount, body.square, body.floor, body.adress, 'вчера');
  db.close();
  return NextResponse.json({ response: res.ok });
}
