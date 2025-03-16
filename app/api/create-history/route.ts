import { redisClient } from "@/app/layout";
import prisma from "@/dbprisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { data, slug, aires } = await req.json()
    const dataa = Object.values(data).join(',')
    const user = await currentUser()
    const user_email = user?.emailAddresses[0].emailAddress
    // console.log('data,dataa,slug,aires is ::: ', data,dataa, slug, aires)
    // console.log('user from clerk is ::: ', user_email)
    try {
        const user_history = await prisma.history.create({
            data: {
                template: slug,
                user_input: dataa,
                ai_response: aires,
                useremail: user_email || '',
            }
        })

        //clearing cache
        await redisClient.del('history')
        
        // added cache for 1 hr
        // console.log('added cache')
        // redisClient.setEx('history', 3600, JSON.stringify(user_history))

        // console.log('user-hiatory saved in db is : ', user_history)
        return NextResponse.json({
            history: user_history
        })
    } catch (error) {
        console.log('error is :', error)
        return NextResponse.json({
            err: error
        })
    }

}