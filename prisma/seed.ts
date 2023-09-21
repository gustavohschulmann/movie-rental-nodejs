import { hash } from "bcrypt";
import prismaClient from "../src/prisma";

async function main() {
    const passwordHash = await hash("admin", 8);

    const user = {
        name: "Admin",
        email: "admin@gmail.com",
        password: passwordHash,
        isAdmin: true,
    };

    await prismaClient.user.create({
        data: {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            password: user.password,
        },
    });
}

main();
