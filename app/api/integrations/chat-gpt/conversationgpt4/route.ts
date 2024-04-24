import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const response = {
    choices: [
      {
        message: {
          role: "assistant",
          content: "This is a test response from the GPT-4 API.",
        },
      },
    ],
  };

  return NextResponse.json(response);
}
