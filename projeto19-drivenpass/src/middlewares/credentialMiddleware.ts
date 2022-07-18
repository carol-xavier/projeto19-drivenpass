import { encryptString, decryptString } from "../utils/cryptrUtil.js";

export function createCrdObject(data) {
    const { crdName, url, userName, password } = data;

    const encryptedString = encryptString(password);

    return { crdName, url, userName, password: encryptedString };
};

export function getCrdObject(data) {
    const credentials = data.map((obj) => {
        const { crdName, url, userName } = obj;
        const passcode = decryptString(obj.password);
        return { crdName, url, userName, password: passcode };
    });

    return credentials;
};