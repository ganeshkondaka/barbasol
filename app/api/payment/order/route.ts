import Razorpay from 'razorpay'
import crypto from 'crypto'
import { NextResponse } from 'next/server';

const razorpayInstance = new Razorpay({
    key_id: process.env.NEXT_RAZORPAY_KEY_ID || '',
    key_secret: process.env.NEXT_RAZORPAY_SECRET,
});

export async function POST(req: Request) {
    const { amount } = await req.json();
    // console.log('amount is :', amount);
    try {
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        const order = await razorpayInstance.orders.create(options);
        // console.log('order is :', order);

        return NextResponse.json({ data: order }, { status: 200 });

    } catch (error) {
        console.log('error is from  order page :', error);
        return NextResponse.json({ message: "Internal Server Error!" });
    }
} 