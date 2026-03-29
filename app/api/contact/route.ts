import { NextRequest, NextResponse } from "next/server";
import { saveContact, createContactTable } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await createContactTable();
    const result = await saveContact(name, email, message);

    return NextResponse.json({ success: true, id: result.id }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
