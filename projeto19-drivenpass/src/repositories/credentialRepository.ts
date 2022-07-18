import prisma from "../config/database.js";
import { CreateCredentialData } from "../services/credentialService.js";

async function insert(createCredentialData: CreateCredentialData) {
    await prisma.credential.create({
        data: createCredentialData
    });
};

async function findById(id: number, userId: number) {
    const credential = await prisma.credential.findUnique({
        where: { id }
    });
    if (!credential) throw { type: "not_found" };

    return credential;
};

async function findAll(userId: number) {
    return await prisma.credential.findMany({
        where: { userId }
    });
};

async function deleteCredential(id: number, userId: number) {
    await prisma.credential.delete({
        where: { id }
    });
};

export default {
    insert,
    findById,
    findAll,
    deleteCredential
};