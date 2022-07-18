import prisma from "../config/database.js";
import { CreateUserData } from "../services/authService.js";

async function insert(createUserData: CreateUserData) {
    await prisma.user.create({
        data: createUserData
    });
};

async function findUnique(createUserData:CreateUserData) {
   return await prisma.user.findUnique({
        where: {
            email: createUserData.email,
        },
    });
};

export default {
    insert,
    findUnique
};