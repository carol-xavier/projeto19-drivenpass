import prisma from "../config/database.js";
import {CreateCredentialData} from "../services/credentialService.js";

async function insert(createCredentialData:CreateCredentialData) {
    await prisma.credential.create({
        data: createCredentialData
    });
};

async function findById(id: number) {
    const credential = await prisma.credential.findUnique({
        where: { id }
    });
    if (!credential) throw { type: "not_found" };

    return credential;
};

async function findAll() {
    return await prisma.credential.findMany();
};

async function deleteCredential(id: number) {
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