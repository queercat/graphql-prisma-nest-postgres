import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma } from "@prisma/client";
import * as argon2 from "argon2";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(userWhereUniqueInput: Prisma.userWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findMany(userWhereInput: Prisma.userWhereInput) {
    return this.prisma.user.findMany({
      where: userWhereInput,
    });
  }

  async create(data: Prisma.userCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  hashPassword(password: string) {
    return argon2.hash(password);
  }
}
