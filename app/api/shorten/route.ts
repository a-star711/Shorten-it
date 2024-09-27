import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();


    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.tiny_url}`,
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();




    if (!response.ok) {
      throw new Error(data.error || "Failed to shorten the URL");
    }

    return NextResponse.json({ shortUrl: data.data.tiny_url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
