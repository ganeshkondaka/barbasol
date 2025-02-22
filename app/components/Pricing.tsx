import React from 'react'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ShineBorder } from '@/components/ui/shine-border'
import Link from 'next/link'

export default function Pricing() {
  return (
    <section className="py-20 bg-zinc-950 text-white " id='pricing'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Basic Plan */}
          <ShineBorder
            className="w-full rounded-lg border bg-background md:shadow-xl text-center"
            color={'white'}
          >
            <div className="w-full  p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-3xl font-bold mb-4">$0<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                <li>Access to all basic features</li>
                <li>Limited AI content generation</li>
                <li>5 credits</li>
              </ul>
              <Link href={'/dashboard'}> <RainbowButton className='scale-100 hover:scale-105 ' >Learn more</RainbowButton></Link>

            </div>
          </ShineBorder>

          {/* Pro Plan */}
          <ShineBorder
            className="w-full rounded-xl border bg-background md:shadow-xl text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="w-full  p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-4">$1<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                <li>All features in Basic</li>
                <li>More AI content generation</li>
                <li>Priority support</li>
                <li>100 Credits</li>
              </ul>
              <Link href={'/dashboard'}> <RainbowButton className='scale-100 hover:scale-105 ' >Learn more</RainbowButton></Link>

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
              <Link href={'/dashboard'}> <RainbowButton className='scale-100 hover:scale-105 ' >Learn more</RainbowButton></Link>

            </div>
          </ShineBorder>


        </div>
      </div>
    </section>
  )
}
