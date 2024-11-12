import { PrismaClient } from "@prisma/client";
import { UserEntity } from "~/domain/users/User.entity.server";
import { UserPort } from "~/domain/users/User.port.server";
import { UserMapper } from "~/mappers/user.mapper.server";

export class UserRepository implements UserPort {
  constructor(private prisma: PrismaClient, private userMapper: UserMapper) {}

  async get(id: string): Promise<UserEntity> {
    const rawUser = await this.prisma.user.findFirstOrThrow({ where: { id } });

    return this.userMapper.toDomain(rawUser);
  }

  async getByEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserEntity> {
    const rawUser = await this.prisma.user.findUniqueOrThrow({
      where: {
        email,
        password,
      },
    });

    return this.userMapper.toDomain(rawUser);
  }

  async getAll(): Promise<UserEntity[]> {
    const rawUsers = await this.prisma.user.findMany();

    return rawUsers.map(this.userMapper.toDomain);
  }

  async create(userEntity: UserEntity): Promise<void> {
    const { id, name, role, email, surname, password } = userEntity.getProps();

    await this.prisma.user.create({
      data: {
        password,
        surname,
        email,
        role,
        name,
        id,
      },
    });
  }
}
