import { User, Vehicle, PrismaClient } from "@prisma/client";
import UserService from "../services/UserService";

class UserRepository {
  private prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  public async findUsers(): Promise<User[]> {
    return await this.prisma.user
      .findMany({})
      .catch((e: any) => {
        throw new Error(e)
      })
      .finally(async () => {
        await this.prisma.disconnect()
      })
  }
}

export default UserRepository
