import { encryptString, decryptString } from "../utils/cryptrUtil.js";

export function createWifiObject(data) {
    const { wifiNickname, wifiName, password } = data;

    const encryptedString = encryptString(password);

    return { wifiNickname, wifiName, password: encryptedString };
};

export function getWiFiObjects(data) {
    const wifi = data.map((obj) => {
        const { wifiNickname, wifiName, password } = obj;
        const passcode = decryptString(password);
        return {wifiNickname, wifiName, password: passcode };
    });

    return wifi;
}