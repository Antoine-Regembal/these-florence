import { randomUUID } from "node:crypto";
import { ItemProps, createItemProps } from "./Item.types.server";

export class ItemEntity {
  private readonly id: string;

  private readonly name: string;

  private readonly url;

  constructor({ id, name, url }: createItemProps) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.url = url;
  }

  public getProps(): ItemProps {
    return {
      id: this.id,
      name: this.name,
      url: this.url,
    };
  }
}
