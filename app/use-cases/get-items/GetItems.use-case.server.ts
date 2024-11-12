import { ItemsPort } from "~/domain/items/Items.port.server";
import { AbstractUseCase } from "~/shared/abstracts/UseCase.abstract.server";
import { Item } from "./Item.types";
import { ItemMapper } from "~/mappers/item.mapper.server";

export class GetItemsUseCase extends AbstractUseCase<Item[]> {
  constructor(
    private itemsRepository: ItemsPort,
    private itemMapper: ItemMapper
  ) {
    super();
  }

  async execute(): Promise<Item[]> {
    const items = await this.itemsRepository.getAll();

    return items.map(this.itemMapper.toResponse);
  }
}
