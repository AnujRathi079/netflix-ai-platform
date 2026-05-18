export const publicRoutes: string[] = [
  "/",
  "/auth/login",
  "/auth/register"
];

export const protectedRoutes: string[] = [
  "/dashboard",
  "/settings"
];

export const authRoutes: string[] = [
  "/api/auth"
];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/";
