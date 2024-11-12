import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { authenticateUser } from "~/ioc.server";
import { sessionStorage } from "~/services/session.server";

export const authenticator = new Authenticator<{
  id: string;
  name: string;
  surname: string;
  email: string;
}>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email")?.toString() ?? "";
    const password = form.get("password")?.toString() ?? "";

    const {
      id,
      name,
      surname,
      email: userEmail,
    } = await authenticateUser.execute(email, password);

    return {
      id,
      name,
      surname,
      email: userEmail,
    };
  }),
  "user-pass"
);
