import { ReservationEntity } from "./Reservation.entity.server";

export interface ReservationPort {
  get(id: string): Promise<ReservationEntity>;

  getAll(): Promise<ReservationEntity[]>;

  create(reservationEntity: ReservationEntity): Promise<void>;
}
