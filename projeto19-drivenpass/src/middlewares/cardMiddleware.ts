import { encryptString, decryptString } from "../utils/cryptrUtil.js";

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

export function getCardObject(data) {
    const cards = data.map((obj) => {
        const { cardNickname, 
            cardNumber, 
            printedName, 
            cvv, 
            expirationDate, 
            virtual, 
            type, 
            password  } = obj;
        const encryptedString = decryptString(password);
        const encryptedNumber = decryptString(cvv);
        return { cardNickname, 
            cardNumber, 
            printedName, 
            expirationDate, 
            virtual, 
            type, 
            cvv: encryptedNumber,
            password: encryptedString  };
    });

    return cards;
}