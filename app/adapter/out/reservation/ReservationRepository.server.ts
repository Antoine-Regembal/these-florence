import { PrismaClient } from "@prisma/client";
import { ReservationEntity } from "~/domain/reservations/Reservation.entity.server";
import { ReservationPort } from "~/domain/reservations/Reservation.port.server";
import { ReservationMapper } from "~/mappers/reservation.mapper.server";

export class ReservationRepository implements ReservationPort {
  constructor(
    private prisma: PrismaClient,
    private reservationMapper: ReservationMapper
  ) {}

  async get(id: string): Promise<ReservationEntity> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<ReservationEntity[]> {
    throw new Error("Method not implemented.");
  }

  async create(reservationEntity: ReservationEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
