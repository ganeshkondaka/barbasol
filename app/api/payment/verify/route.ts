import Razorpay from 'razorpay'
import crypto from 'crypto'
import { NextResponse } from 'next/server';
import prisma from '@/dbprisma';
import { currentUser } from '@clerk/nextjs/server';

export async function POST(req: Request) {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
    // const body= await req.json()
    // console.log("req.json()", body);

    const user = await currentUser()
    const user_email = user?.emailAddresses[0].emailAddress

    try {
        // Create Sign
        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        // Create ExpectedSign
        const expectedSign = crypto
            .createHmac("sha256", process.env.NEXT_RAZORPAY_SECRET || '')
            .update(sign.toString())
            .digest("hex");

        // console.log(razorpay_signature === expectedSign);

        // Create isAuthentic
        const isAuthentic = expectedSign === razorpay_signature;

        // Condition
        if (isAuthentic) {
            const payment = await prisma.payment_history.create({
                data: {
                    razorpay_order_id,
                    razorpay_payment_id,
                    razorpay_signature,
                    useremail: user_email || ''
                }
            })
            // console.log('payement is :',payment);
            return NextResponse.json({
                message: "Payement Successfully",
                
            });
        }
    } catch (error) {
        NextResponse.json({ message: "Internal Server Error!" });
        console.log(error);
    }

}