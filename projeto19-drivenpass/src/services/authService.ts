import { User } from "@prisma/client";
import authRepository from "../repositories/authRepository.js";

export type CreateUserData = Omit<User, "id">;

async function insert(createUserData: CreateUserData) {
    await authRepository.insert(createUserData);
};

async function findUnique(createUserData:CreateUserData) {
   const user = await authRepository.findUnique(createUserData);
   if (!user) throw { type: "not_found" };

   return user;
};

export default {
    insert,
    findUnique
};
