import Joi from "joi";
import { CreateCredentialData } from "../services/credentialService";

export const credentialSchema = Joi.object<CreateCredentialData>({
    crdName: Joi.string().required(),
    url: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required()
  });
  