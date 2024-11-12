import { ItemDto } from "../../items/dto/Item.dto";
import { UserDto } from "../../users/dto/User.dto";

export type ReservationDto = {
  id: string;
  createdBy: UserDto;
  createdAt: string;
  item: ItemDto;
  description: string;
};
