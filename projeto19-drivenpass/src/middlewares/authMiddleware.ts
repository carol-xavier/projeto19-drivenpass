import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createUser(data) {
    const passwordHash = bcrypt.hashSync(data.password, 10);
    const user = {email: data.email, password: passwordHash};

    return user;
};

export function createToken(email, id) {
    const secretKey = process.env.JWT_SECRET;
    const session = { email, id };
    const setting = { expiresIn: 60 * 60 * 2 };
    const token = jwt.sign(session, secretKey, setting);

    return token;
};

