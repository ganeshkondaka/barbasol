import prisma from "@/dbprisma";
import { currentUser } from "@clerk/nextjs/server"

export const checkUser = async () => {
    const user = await currentUser();
    // console.log('the user from clerk is :', user)
    const user_email=user?.emailAddresses[0].emailAddress

    const loggedin_user = await prisma.user.findUnique({
        where:{
            email:user_email
        }
    })
    // console.log('loggedin_user',loggedin_user)
    if(loggedin_user){
        return loggedin_user
    }

    const new_user= await prisma.user.create({
        data:{
            email:user_email || ''
        }
    })

    console.log('the newly registr user is ',new_user)
    
    return new_user
}

// export const Credit_count =async()=>{

//     const user = await currentUser();
//     // console.log('the user from clerk is :', user)
//     const user_email=user?.emailAddresses[0].emailAddress

//     const newuser=await prisma.user.findUnique({
//         where:{
//             email:user_email
//         }
//     })
//     const count = await newuser?.count

//     return count
// }