import { ItemEntity } from "./Item.entity.server";

export interface ItemsPort {
  get(id: string): Promise<ItemEntity>;

  getAll(): Promise<ItemEntity[]>;
}
