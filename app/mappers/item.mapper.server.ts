import { ItemDto } from "~/adapter/out/items/dto/Item.dto";
import { ItemEntity } from "~/domain/items/Item.entity.server";
import { AbstractMapper } from "~/shared/abstracts/Mapper.abstract.server";
import { Item } from "~/use-cases/get-items/Item.types";

export class ItemMapper extends AbstractMapper<ItemDto, ItemEntity, Item> {
  toRequest(domainObject: ItemEntity): ItemDto {
    throw new Error("Method not implemented.");
  }

  toDomain(requestObject: ItemDto): ItemEntity {
    return new ItemEntity({
      id: requestObject.id,
      url: requestObject.url,
      name: requestObject.name,
    });
  }

  toResponse(domainObject: ItemEntity): Item {
    const { name, id, url } = domainObject.getProps();

    return { name, id, url };
  }
}
