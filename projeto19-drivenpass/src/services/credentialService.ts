import { Credential } from "@prisma/client";
import credentialRepository from "../repositories/credentialRepository.js";

export type CreateCredentialData = Omit<Credential, "id">;

async function insert(createCredentialData:CreateCredentialData) {
    await credentialRepository.insert(createCredentialData);
}

async function findById(id: number, userId: number) {
    const credential = await credentialRepository.findById(id, userId);
    if (!credential) throw { type: "not_found" };

    return credential;
};

async function findAll(userId:number) {
    return await credentialRepository.findAll(userId);
}

async function deleteCredential(id: number, userId: number) {
    await credentialRepository.deleteCredential(id, userId)
}

export default {
    insert,
    findById,
    findAll,
    deleteCredential
}