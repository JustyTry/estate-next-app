import Database from "better-sqlite3";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const db = new Database("./database/db.sqlite");
  const body = await req.body;

  try {
    const stmt = db.prepare(
      "INSERT INTO apartments (title, adress, cost, rooms_amount, square, living_space, floor, description, estate_type, ceiling_height, balcony_or_loggia_amount, bathroom_amount, year_of_construction, chute, number_of_elevators, building_type, entrances, date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    );
    stmt.run(
      body.title,
      body.adress,
      body.cost,
      body.rooms_amount,
      body.square,
      body.living_space,
      body.floor,
      body.description,
      body.estate_type,
      body.ceiling_height,
      body.balcony_or_loggia_amount,
      body.bathroom_amount,
      body.year_of_construction,
      body.chute,
      body.number_of_elevators,
      body.building_type,
      body.entrances,
      Date.now(),
    );

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while inserting data", error });
  } finally {
    db.close();
  }
}
