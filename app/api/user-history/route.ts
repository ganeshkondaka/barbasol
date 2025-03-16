import { redisClient } from "@/app/layout"
import prisma from "@/dbprisma"
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const user = await currentUser()
    const user_email = user?.emailAddresses[0].emailAddress
    try {
        console.log("temp ----------------");

        const cached_history = await redisClient.get('history')
        // console.log('cached_history', cached_history)

        if (cached_history) {
            console.log("Returning existed cached data");
            return NextResponse.json({ success: true, history: JSON.parse(cached_history) });
        }

        const user_history = await prisma.history.findMany({
            where: {
                useremail: user_email
            }
        })
        console.log('returning from database , setting cache here')
        
        await redisClient.setEx('history', 3600, JSON.stringify(user_history))
        // console.log('user history :',user_history)
        return NextResponse.json({
            history: user_history
        })
    } catch (error) {
        console.log('error is :', error)
    }

}