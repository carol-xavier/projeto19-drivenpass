import { Credential } from "@prisma/client";
import credentialRepository from "../repositories/credentialRepository.js";

export type CreateCredentialData = Omit<Credential, "id">;

async function insert(createCredentialData:CreateCredentialData) {
    await credentialRepository.insert(createCredentialData);
}

export default {
    insert
}