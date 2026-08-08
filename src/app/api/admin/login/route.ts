import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  getAdminSessionValue,
  isAdminConfigured,
  isValidAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin is not configured on the server." },
      { status: 503 }
    );
  }

  const body = await request.json();
  const password = String(body.password ?? "");

  if (!isValidAdminPassword(password)) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, getAdminSessionValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
