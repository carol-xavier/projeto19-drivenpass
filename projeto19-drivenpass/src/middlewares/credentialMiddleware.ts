import Cryptr from "cryptr";

export function createCrdObject(data) {
    const secretKey = process.env.CRYPT_SECRET;
    const cryptr = new Cryptr(secretKey);
    const encryptedString = cryptr.encrypt(data.password);

    const { crdName, url, userName } = data
    return { crdName, url, userName, password: encryptedString };
};