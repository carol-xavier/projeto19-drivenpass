import { encryptString } from "../utils/cryptrUtil.js";

export function createWifiObject(data) {
    const { wifiNickname, wifiName, password } = data;

    const encryptedString = encryptString(password);

    return { wifiNickname, wifiName, password: encryptedString };
};