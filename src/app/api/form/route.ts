import { NextResponse } from "next/server";
import { promises as fs } from "fs";

type Submission = {
  name?: string;
  skill?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data: Submission = await request.json();
  const filePath = `./submissions/${data.name}-${Date.now()}.json`;
  await fs.writeFile(filePath, JSON.stringify(data));
  console.log("data: ", data);

  const { name, skill, email, message } = data;

  return NextResponse.json({ name, skill, email, message });
}
