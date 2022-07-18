import Cryptr from "cryptr";

const secretKey = process.env.CRYPT_SECRET;
const cryptr = new Cryptr(secretKey);

export function encryptString(password) {
    const encryptedString = cryptr.encrypt(password);
    return encryptedString;
};

export function decryptString(encryptedString) {
    const decryptedString = cryptr.decrypt(encryptedString);
    return decryptedString; 
};