import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongo";

type Submission = {
  name?: string;
  skill?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: Submission;

  // Handle potential errors with request.json()
  try {
    data = await request.json();
  } catch (error) {
    console.error("Error parsing request JSON:", error);
    return NextResponse.error();
  }

  try {
    const client = await clientPromise;
    const db = client.db("WebWealth");
    const collection = db.collection("submissions");

    await collection.insertOne(data);

    // Close the MongoDB connection (optional if using connection pooling)
    await client.close();

    return NextResponse.json({ message: "Form submission successful" });
  } catch (error) {
    console.error("Error storing data in MongoDB:", error);
    return NextResponse.error();
  }
}
