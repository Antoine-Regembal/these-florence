import {
  defer,
  LinksFunction,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Await, Form, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { Items } from "~/components/items/Items";
import { Timeleft } from "~/components/timeleft/Timeleft";
import { getItems } from "~/ioc.server";
import { authenticator } from "~/services/auth.server";

import styles from "../styles/index.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "Des cadeaux pour la thèse de Flo !" },
    {
      name: "description",
      content:
        "Tout ce qui ferait plaisir à Florence pour fêter sa thèse de médecine.",
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isAuthenticated = await authenticator.isAuthenticated(request);
  const items = getItems.execute();

  return defer({ isAuthenticated, items });
};

export default function Index() {
  const { isAuthenticated, items } = useLoaderData<typeof loader>();

  return (
    <div className="rootLayout">
      {isAuthenticated ? (
        <Form action="logout" method="POST">
          <button type="submit">Déconnexion</button>
        </Form>
      ) : (
        <Form action="login">
          <button type="submit">Connexion</button>
        </Form>
      )}
      <section>
        <h2>
          Félicitez Florence avec des cadeaux qui lui feront vraiment plaisir !
        </h2>
        <p>
          Je liste ici des cadeaux qui lui feront plaisir à coup sûr. Je met
          aussi à disposition un lien Paypal si vous préferrez faire un cadeau
          sous forme de virement bancaire, ainsi Florence pourra utiliser cette
          cagnotte pour s&apos;offrir d&apos;autres cadeaux de son choix. La
          totalité de la cagnotte lui sera remise après sa soutenance de thèse
          au nom de toutes les personnes ayant participé à la cagnotte.
        </p>
      </section>
      <section>
        <h2>Réservez un cadeau en passant par ce site !</h2>
        <p>
          Connectez-vous pour réserver un cadeau. Un message s&apos;affichera à
          côté du cadeau choisi pour indiquer à tout le monde que le cadeau en
          question est déjà réservé par vous.
        </p>
        <p>
          Les achats ne se font pas via ce site. Je mets à disposition des liens
          vers des sites marchands.
        </p>
      </section>
      <section>
        <h2>Temps restant avant la soutenance de thèse</h2>
        <Timeleft />
      </section>
      <Suspense fallback={<p>loading items</p>}>
        <Await resolve={items}>{(items) => <Items items={items} />}</Await>
      </Suspense>
    </div>
  );
}
