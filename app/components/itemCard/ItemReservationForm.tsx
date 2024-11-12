import { Form } from "@remix-run/react";

export const ItemReservationForm = ({ itemId }: { itemId: string }) => {
  return (
    <Form method="GET" action={`/reservation/${itemId}`}>
      <button type="submit">réserver l&apos;article</button>
    </Form>
  );
};
