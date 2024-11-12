import { randomUUID } from "node:crypto";
import { ItemEntity } from "../items/Item.entity.server";
import { UserEntity } from "../users/User.entity.server";
import {
  CreateReservationProps,
  ReservationProps,
} from "./Reservation.types.server";

export class ReservationEntity {
  private readonly id: string;

  private readonly createdBy: UserEntity;

  private readonly createdAt: Date;

  private readonly item: ItemEntity;

  private readonly description: string;

  constructor({
    id,
    createdBy,
    createdAt,
    item,
    description,
  }: CreateReservationProps) {
    this.id = id ?? randomUUID();
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.item = item;
    this.description = description;
  }

  public getProps(): ReservationProps {
    return {
      id: this.id,
      createdBy: this.createdBy,
      createdAt: this.createdAt,
      item: this.item,
      description: this.description,
    };
  }
}
