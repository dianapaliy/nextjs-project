import { NextResponse } from "next/server";
import moviesPosters from "../../movies/data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(moviesPosters);
}