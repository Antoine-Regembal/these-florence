import { Item } from "~/use-cases/get-items/Item.types";
import { ItemCard } from "../itemCard/ItemCard";
import "./items.css";

export const Items = ({ items }: { items: Item[] }) => {
  return (
    <div>
      <ul className="items-list">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
