import { UserDto } from "~/adapter/out/users/dto/User.dto";
import { UserEntity } from "~/domain/users/User.entity.server";
import { AbstractMapper } from "~/shared/abstracts/Mapper.abstract.server";

export class UserMapper implements AbstractMapper<UserDto, UserEntity, any> {
  toRequest(domainObject: UserEntity): UserDto {
    const { name, password, id, role, email, surname } =
      domainObject.getProps();

    return {
      id,
      password,
      name,
      surname,
      email,
      role,
    };
  }

  toDomain(requestObject: UserDto): UserEntity {
    const { name, role, email, surname, password, id } = requestObject;

    return new UserEntity({
      id,
      password,
      surname,
      email,
      role,
      name,
    });
  }

  toResponse(domainObject: UserEntity) {
    throw new Error("Method not implemented.");
  }
}
