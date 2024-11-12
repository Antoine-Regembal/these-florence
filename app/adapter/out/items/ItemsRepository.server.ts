import { PrismaClient } from "@prisma/client";
import { ItemEntity } from "~/domain/items/Item.entity.server";
import { ItemsPort } from "~/domain/items/Items.port.server";
import { ItemMapper } from "~/mappers/item.mapper.server";

export class ItemsRepository implements ItemsPort {
  constructor(private prisma: PrismaClient, private itemMapper: ItemMapper) {}

  async get(id: string): Promise<ItemEntity> {
    const rawItem = await this.prisma.item.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return this.itemMapper.toDomain(rawItem);
  }

  async getAll(): Promise<ItemEntity[]> {
    const rawItems = await this.prisma.item.findMany({
      include: {
        Reservation: {
          include: {
            user: true,
          },
        },
      },
    });

    // TODO: update mapper to return description and user too
    return rawItems.map(this.itemMapper.toDomain);
  }
}
