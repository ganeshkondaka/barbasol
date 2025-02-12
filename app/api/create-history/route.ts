import prisma from "@/dbprisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { data, slug, aires } = await req.json()

    const user = await currentUser()
    const user_email = user?.emailAddresses[0].emailAddress
    // console.log('data,slug,aires is ::: ', data.keywords, slug, aires)
    // console.log('user from clerk is ::: ', user_email)
    try {
        const user_history = await prisma.history.create({
            data: {
                template: slug,
                user_input: data.keywords,
                ai_response: aires,
                useremail: user_email || '',
            }
        })
        // console.log('user-hiatory saved in db is : ',user_history)
        return NextResponse.json({
            history: user_history
        })  
    } catch (error) {
        return NextResponse.json({
            err: error
        })
    }

}