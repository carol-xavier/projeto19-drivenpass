import { User } from "@prisma/client";
import authRepository from "../repositories/authRepository.js";

export type CreateUserData = Omit<User, "id">;

async function insert(createUserData: CreateUserData) {
    await authRepository.insert(createUserData);
};

async function findUnique(createUserData:CreateUserData) {
   return await authRepository.findUnique(createUserData);
};

export default {
    insert,
    findUnique
};
