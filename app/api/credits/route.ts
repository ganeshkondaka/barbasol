import prisma from "@/dbprisma";
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server";

export async function GET() {

    const user = await currentUser();
    // console.log('the user from clerk is :', user)
    const user_email = user?.emailAddresses[0].emailAddress
    try {
        const newuser = await prisma.user.findUnique({
            where: {
                email: user_email
            }
        })
        const count = await newuser?.count
        return NextResponse.json({
            success: true,
            count
            
        })
    } catch (error) {
        return NextResponse.json({
            err: error
        })
    }

}