import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();
  const { title, content } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        create: {
          name: "Goga",
        },
      },
    },
  });
  return NextResponse.json({ result });
}
