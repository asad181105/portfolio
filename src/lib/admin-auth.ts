import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";

export function isAdminConfigured() {
  return Boolean(
    process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET
  );
}

export function isValidAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return password === expected;
}

export function getAdminSessionValue() {
  return process.env.ADMIN_SESSION_SECRET ?? "";
}

export async function isAdminAuthenticated() {
  if (!isAdminConfigured()) return false;

  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE)?.value;
  return session === getAdminSessionValue();
}
