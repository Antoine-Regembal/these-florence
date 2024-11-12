import { createCookieSessionStorage } from "@remix-run/node";

const cookiesSecret = process.env.COOKIES_SECRET;

if (!cookiesSecret) {
  throw Error(`Invalid cookie secret`);
}

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [cookiesSecret],
    secure: process.env.NODE_ENV === "production",
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
