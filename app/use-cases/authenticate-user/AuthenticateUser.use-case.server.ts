import { UserDto } from "~/adapter/out/users/dto/User.dto";
import { UserPort } from "~/domain/users/User.port.server";
import { UserMapper } from "~/mappers/user.mapper.server";
import { AbstractUseCase } from "~/shared/abstracts/UseCase.abstract.server";

export class AuthenticateUserUseCase extends AbstractUseCase<UserDto> {
  constructor(
    private userRepository: UserPort,
    private userMapper: UserMapper
  ) {
    super();
  }

  async execute(email: string, password: string): Promise<UserDto> {
    const user = await this.userRepository.getByEmailAndPassword(
      email,
      password
    );

    return this.userMapper.toRequest(user);
  }
}
