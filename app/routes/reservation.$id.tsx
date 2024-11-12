import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getItem } from "~/ioc.server";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { id } = params;
  if (!id) {
    throw new Response("no item id provided", { status: 400 });
  }
  const item = await getItem.execute(id);

  return json({
    user,
    item,
  });
};

export default function ItemReservation() {
  const { user, item } = useLoaderData<typeof loader>();
  console.log(user, item);
  return <p>it works </p>;
}
