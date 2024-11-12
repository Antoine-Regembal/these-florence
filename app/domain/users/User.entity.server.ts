import { randomUUID } from "node:crypto";
import { CreateUserProps, UserProps } from "./User.types.server";

export class UserEntity {
  private readonly id: string;

  private readonly password: string;

  private readonly name: string;

  private readonly email: string;

  private readonly surname: string;

  constructor({ id, password, name, email, surname }: CreateUserProps) {
    this.id = id ?? randomUUID();
    this.password = password;
    this.name = name;
    this.email = email;
    this.surname = surname;
  }

  public getProps(): UserProps {
    return {
      id: this.id,
      password: this.password,
      name: this.name,
      email: this.email,
      surname: this.surname,
    };
  }
}
