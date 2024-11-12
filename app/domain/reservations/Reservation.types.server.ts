import { ItemEntity } from "../items/Item.entity.server";
import { UserEntity } from "../users/User.entity.server";

export type CreateReservationProps = {
  id: string;
  createdBy: UserEntity;
  createdAt: Date;
  item: ItemEntity;
  description: string;
};

export type ReservationProps = {
  id: string;
  createdBy: UserEntity;
  createdAt: Date;
  item: ItemEntity;
  description: string;
};
