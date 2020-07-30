import { User, PrismaClient } from "@prisma/client"
import UserRepository from '../repositories/UserRepository'

class UserService {

    public async findManyUsers(): Promise<User[]>{
        try {
            const prisma = new PrismaClient()
            const repository = new UserRepository(prisma)
            const response = await repository.findUsers()
            return response
        } catch(err){
            throw new Error(err)
        }
    }
}

export default new UserService()
