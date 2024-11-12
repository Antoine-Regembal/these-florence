import { UserEntity } from "./User.entity.server";

export interface UserPort {
  get(id: string): Promise<UserEntity>;

  getByEmailAndPassword(email: string, password: string): Promise<UserEntity>;

  getAll(): Promise<UserEntity[]>;

  create(userEntity: UserEntity): Promise<void>;
}
