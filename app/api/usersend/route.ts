import prisma from "@/dbprisma";
import { useUser } from "@clerk/nextjs";

export async function POST(req: Request) {
    const { user } = useUser();
    const emailId = user?.primaryEmailAddress?.emailAddress;
    if (!user) {
        throw new Error("User is not authenticated");
    }
    try {
        const new_user = await prisma.user.create({
            data: {
                email: emailId || ""
            }
        })
        console.log("new user created", new_user)
    } catch (error) {
        console.log("error creating user", error)
    } finally {
        await prisma.$disconnect(); // Properly close the Prisma client
    }
}