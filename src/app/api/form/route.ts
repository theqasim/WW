import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongo";

type Submission = {
  name?: string;
  skill?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data: Submission = await request.json();


  const client = await clientPromise;


  const db = client.db("WebWealth");
  const collection = db.collection("submissions");

  try {

    await collection.insertOne(data);
    return NextResponse.json({ message: "Form submission successful" });
  } catch (error) {
    console.error("Error storing data in MongoDB:", error);
    return NextResponse.error();
  }
}
