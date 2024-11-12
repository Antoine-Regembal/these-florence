import { ItemsRepository } from "./adapter/out/items/ItemsRepository.server";
import { prisma } from "./adapter/out/prisma/prisma.server";
import { UserRepository } from "./adapter/out/users/UserRepository.server";
import { ItemsPort } from "./domain/items/Items.port.server";
import { UserPort } from "./domain/users/User.port.server";
import { ItemMapper } from "./mappers/item.mapper.server";
import { UserMapper } from "./mappers/user.mapper.server";
import { AuthenticateUserUseCase } from "./use-cases/authenticate-user/AuthenticateUser.use-case.server";
import { GetItemUseCase } from "./use-cases/get-item/GetItem.use-case.server";
import { GetItemsUseCase } from "./use-cases/get-items/GetItems.use-case.server";

const itemMapper = new ItemMapper();
const userMapper = new UserMapper();

const itemsRepository: ItemsPort = new ItemsRepository(prisma, itemMapper);
const userRepository: UserPort = new UserRepository(prisma, userMapper);

export const getItems = new GetItemsUseCase(itemsRepository, itemMapper);
export const getItem = new GetItemUseCase(itemsRepository, itemMapper);
export const authenticateUser = new AuthenticateUserUseCase(
  userRepository,
  userMapper
);
