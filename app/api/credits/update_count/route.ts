import prisma from "@/dbprisma";
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    const user = await currentUser();
    // console.log('the user from clerk is :', user)
    const user_email = user?.emailAddresses[0].emailAddress
    try {
        const body = await req.json(); // Extract request body
        // console.log('body is',body)
        const int_count_val=body.count_val
        // const str_count_val=(int_count_val-1).toString()
        const count_reduced_user = await prisma.user.update({
            where: {
                email: user_email
            },
            data: {
                count: int_count_val-1
            }
        })
        return NextResponse.json({
            count: count_reduced_user.count
        })
    } catch (error) {
        return NextResponse.json({
            error
        })
    }
}