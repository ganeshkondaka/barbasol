import prisma from "@/dbprisma"
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const user = await currentUser()
    const user_email = user?.emailAddresses[0].emailAddress    
    try {
        const user_history = await prisma.history.findMany({
            where:{
                useremail: user_email
            }
        })
        // console.log('user history :',user_history)
        return NextResponse.json({
            history: user_history
        })
    } catch (error) {
        console.log('error is :', error)
    }

}