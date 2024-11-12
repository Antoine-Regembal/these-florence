import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { AuthenticationContext } from "./contexts/authentication.context";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "./services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request);

  return json({
    isLoggedIn: user && Object.entries(user).length > 0,
  });
};

export default function App() {
  const { isLoggedIn } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
        />
        <Links />
      </head>
      <body>
        <AuthenticationContext.Provider value={isLoggedIn}>
          <Outlet />
        </AuthenticationContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
