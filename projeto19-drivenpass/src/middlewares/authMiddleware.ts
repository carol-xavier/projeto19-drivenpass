import bcrypt from "bcrypt";

export function createUser(data) {
    const passwordHash = bcrypt.hashSync(data.password, 10);
    const user = {email: data.email, password: passwordHash};

    return user;
};