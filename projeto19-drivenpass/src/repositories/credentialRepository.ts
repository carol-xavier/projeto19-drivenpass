import exp from "constants";
import prisma from "../config/database.js";
import {CreateCredentialData} from "../services/credentialService.js";

async function insert(createCredentialData:CreateCredentialData) {
    await prisma.credential.create({
        data: createCredentialData
    });
};

export default {
    insert
}