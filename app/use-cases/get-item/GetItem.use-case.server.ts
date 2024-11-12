import { ItemsPort } from "~/domain/items/Items.port.server";
import { AbstractUseCase } from "~/shared/abstracts/UseCase.abstract.server";
import { Item } from "../../shared/types/item";
import { ItemMapper } from "~/mappers/item.mapper.server";

export class GetItemUseCase extends AbstractUseCase<Item> {
  constructor(
    private itemsRepository: ItemsPort,
    private itemMapper: ItemMapper
  ) {
    super();
  }

  async execute(id: string): Promise<Item> {
    const item = await this.itemsRepository.get(id);

    return this.itemMapper.toResponse(item);
  }
}
