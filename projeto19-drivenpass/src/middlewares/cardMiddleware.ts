import { encryptString } from "../utils/cryptrUtil.js";

export function createCardObject(data) {
    const { 
        cardNickname, 
        cardNumber, 
        printedName, 
        cvv, 
        expirationDate, 
        virtual, 
        type, 
        password 
    } = data;

    const encryptedString = encryptString(password);
    const encryptedNumber = encryptString(cvv);

    return { 
        cardNickname, 
        cardNumber, 
        printedName, 
        expirationDate, 
        virtual, 
        type, 
        cvv: encryptedNumber,
        password: encryptedString 
    };
};