import { Credential } from "@prisma/client";
import credentialRepository from "../repositories/credentialRepository.js";

export type CreateCredentialData = Omit<Credential, "id">;

async function insert(createCredentialData:CreateCredentialData) {
    await credentialRepository.insert(createCredentialData);
}

async function findById(id: number) {
    const credential = await credentialRepository.findById(id);
    if (!credential) throw { type: "not_found" };

    return credential;
};

async function findAll() {
    return await credentialRepository.findAll();
}

async function deleteCredential(id: number) {
    await credentialRepository.deleteCredential(id)
}

export default {
    insert,
    findById,
    findAll,
    deleteCredential
}