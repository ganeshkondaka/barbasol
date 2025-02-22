'use client'
import React, { useState } from 'react'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ShineBorder } from '@/components/ui/shine-border'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import Script from 'next/script';
import { redirect } from 'next/navigation';


export default function Page() {

  const [amount, setamount] = useState(99);

  // handlePayment Function
  const handlePayment = async () => {
    try {
      const res = await axios.post('/api/payment/order', {
        amount
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = res.data;
      // console.log('data fom froened is :',data.data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log('handle payment error is :', error);
    }
  }

  // handlePaymentVerify Function
  const handlePaymentVerify = async (data: any) => {
    const options = {
      key: process.env.NEXT_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Ganesh",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response: any) => {
        // console.log("response is", response)
        try {
          const res = await axios.post('/api/payment/verify', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });

          const verifyData = res.data;

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log('handle pament verify error is :', error);
        }
      },
      theme: {
        color: "#5f63b8"
      }
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.on("payment.failed", function (response: any) {
      alert("Payment failed");
      console.error(response.error);
    });
    razorpay.open();
    redirect('/dashboard');
  }

  return (
    <section className="py-20 bg-zinc-950 text-white " id='pricing'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-56">

          {/* Pro Plan */}
          <ShineBorder
            className="w-full rounded-xl border bg-background md:shadow-xl text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="w-full  p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-4">₹99<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                <li>All features in Basic</li>
                <li>More AI content generation</li>
                <li>Priority support</li>
                <li>100 Credits</li>
              </ul>
              <RainbowButton onClick={handlePayment} className='scale-100 hover:scale-105 ' >Pay now</RainbowButton>

            </div>
          </ShineBorder>

          {/* Enterprise Plan */}
          <ShineBorder
            className="w-full rounded-xl border bg-background md:shadow-xl text-center"
            color={'white'}
          >
            <div className="w-full  p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">custom<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
                <li>Enterprise-level security 🫤🤑</li>
                <li>24/7 support 👎</li>
              </ul>
              <RainbowButton onClick={handlePayment} className='scale-100 hover:scale-105 ' >Pay now</RainbowButton>

            </div>
          </ShineBorder>


        </div>
      </div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </section>
  )
}
