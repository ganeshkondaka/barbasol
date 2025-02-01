import React from 'react'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ShineBorder } from '@/components/ui/shine-border'

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
              <RainbowButton className="w-full">Get Started</RainbowButton>
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
              <RainbowButton className="w-full">Get Started</RainbowButton>
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
              <RainbowButton className="w-full">Get Started</RainbowButton>
            </div>
          </ShineBorder>

          {/* Enterprise Plan */}
          {/* <ShineBorder
            className="w-full rounded-xl border bg-background md:shadow-xl text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-purple-500 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                <li>All features in Basic</li>
                <li>More AI content generation</li>
                <li>Priority support</li>
                <li>100 Credits</li>
              </ul>
              <RainbowButton className="w-full">Get Started</RainbowButton>
            </div>
          </ShineBorder> */}

          {/* Enterprise Plan */}
          {/* <ShineBorder
            className="w-full rounded-xl border bg-background md:shadow-xl text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
                <li>Enterprise-level security 🫤🙃🤑</li>
                <li>24/7 support 👎</li>
              </ul>
              <RainbowButton className="w-full">Contact Sales</RainbowButton>
            </div>
          </ShineBorder> */}

        </div>
      </div>
    </section>
  )
}
















// import React from 'react'

// export default function Pricing() {
//   return (
//     <div>
//         <section id="pricing" className="py-20 px-6 bg-gray-800">
//         <h2 className="text-3xl font-bold text-center">Pricing</h2>
//         <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
//           <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-bold">Free Plan</h3>
//             <p className="mt-2">Basic AI tools for personal use.</p>
//             <p className="mt-4 text-lg font-bold">$0/month</p>
//           </div>
//           <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center border-2 border-blue-400">
//             <h3 className="text-xl font-bold">Pro Plan</h3>
//             <p className="mt-2">Full access to all AI features.</p>
//             <p className="mt-4 text-lg font-bold">$19/month</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
