import { NextResponse } from "next/server";
import prisma from "@/dbprisma";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
    try {
        const user = await currentUser();

        if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
            return NextResponse.json({ error: "No user or email found from Clerk." }, { status: 401 });
        }

        const user_email = user.emailAddresses[0].emailAddress;

        let loggedin_user = await prisma.user.findUnique({
            where: { email: user_email }
        });

        if (!loggedin_user) {
            loggedin_user = await prisma.user.create({
                data: { email: user_email }
            });
            // console.log("Newly registered user:", loggedin_user);
        }

        return NextResponse.json(loggedin_user);
    } catch (error) {
        console.error("Error checking user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
