// route.ts

import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  // Eğer yerel ortamda çalışıyorsanız, IPv6 yerine IPv4 adresi kullanmayı deneyin
  const realIp = ip === "::1" ? "127.0.0.1" : ip;
  return NextResponse.json({ ip: realIp });
}
