import { ReservationDto } from "~/adapter/out/reservation/dto/Reservation.dto";
import { ItemEntity } from "~/domain/items/Item.entity.server";
import { ReservationEntity } from "~/domain/reservations/Reservation.entity.server";
import { UserEntity } from "~/domain/users/User.entity.server";
import { AbstractMapper } from "~/shared/abstracts/Mapper.abstract.server";

export class ReservationMapper extends AbstractMapper<
  ReservationDto,
  ReservationEntity,
  any
> {
  toRequest(domainObject: ReservationEntity): ReservationDto {
    const { id, createdBy, createdAt, item, description } =
      domainObject.getProps();

    return {
      id,
      createdBy: createdBy.getProps(),
      createdAt: createdAt.toDateString(),
      item: item.getProps(),
      description,
    };
  }

  toDomain(requestObject: ReservationDto): ReservationEntity {
    const { id, createdBy, createdAt, item, description } = requestObject;
    const userEntity = new UserEntity({
      ...createdBy,
    });
    const itemEntity = new ItemEntity({
      ...item,
    });

    return new ReservationEntity({
      id,
      createdBy: userEntity,
      createdAt: new Date(createdAt),
      item: itemEntity,
      description,
    });
  }

  toResponse(domainObject: ReservationEntity) {
    throw new Error("Method not implemented.");
  }
}
