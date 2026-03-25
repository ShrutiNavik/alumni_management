import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const body = await req.json();
    // Example: handle RSVP logic here
    return NextResponse.json(
      { message: `RSVP received for event ${id}`, data: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process RSVP" },
      { status: 500 }
    );
  }
}
