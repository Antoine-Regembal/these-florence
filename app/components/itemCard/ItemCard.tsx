import { useContext } from "react";
import { AuthenticationContext } from "~/contexts/authentication.context";
import { Item } from "~/use-cases/get-items/Item.types";
import "./ItemCard.css";
import { ItemReservationForm } from "./ItemReservationForm";

export const ItemCard = ({ item }: { item: Item }) => {
  const isLoggedIn = useContext(AuthenticationContext);

  console.log(isLoggedIn);
  return (
    <div className="item-card">
      <div>
        <span className="item-card-item-name">{item.name}</span>
      </div>
      <div>
        <span>
          Status: <span>Non réservé</span>
        </span>
      </div>
      <div className="item-card-actions">
        <a href={item.url} target="_blank" rel="noreferrer">
          <button>Voir l&apos;article</button>
        </a>
        {isLoggedIn && <ItemReservationForm itemId={item.id} />}
      </div>
    </div>
  );
};
