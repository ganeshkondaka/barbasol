import React from 'react'
import { RiGeminiFill, RiCodeBoxFill, RiLightbulbFill, RiMoreFill } from 'react-icons/ri'
import { BsHash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'

export default function Features() {
  return (
    <section className="pt-20 bg-zinc-950 text-white" id='features'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* AI Generated Content */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <RiGeminiFill className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Generated Content</h3>
            <p className="text-zinc-400 text-sm">
              Leverage cutting-edge AI to create engaging content effortlessly.
            </p>
          </div>
          {/* Instagram Hashtag Generator */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <BsHash className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram Hashtag Generator</h3>
            <p className="text-zinc-400 text-sm">
              Craft the perfect hashtags to boost your Instagram engagement.
            </p>
          </div>
          {/* Code Debugger */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <RiCodeBoxFill className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Code Debugger</h3>
            <p className="text-zinc-400 text-sm">
              Identify and fix code issues with our intelligent debugger.
            </p>
          </div>
          {/* English Grammar Checker */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <AiOutlineEdit className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">English Grammar Checker</h3>
            <p className="text-zinc-400 text-sm">
              Ensure your writing is flawless with advanced grammar checking.
            </p>
          </div>
          {/* Tweet Generator */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <FaTwitter className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tweet Generator</h3>
            <p className="text-zinc-400 text-sm">
              Generate engaging tweets quickly to keep your social media buzzing.
            </p>
          </div>
          {/* Content Idea Generator */}
          {/* <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <RiLightbulbFill className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Idea Generator</h3>
            <p className="text-zinc-400 text-sm">
              Never run out of creative ideas with our smart content suggestions.
            </p>
          </div> */}
          {/* Many More */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900 rounded-lg hover:shadow-2xl transition duration-300">
            <RiMoreFill className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">And Many More</h3>
            <p className="text-zinc-400 text-sm">
              Explore up to 19 powerful tools designed for all your content needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
















// import React from 'react'
// import { TbBrandNextjs } from 'react-icons/tb'
// import { BiLogoTypescript } from 'react-icons/bi'
// import { RiTailwindCssFill, RiGeminiFill } from 'react-icons/ri'
// import { BsStripe } from 'react-icons/bs'

// export default function Features() {
//   return (
//     <section className="py-20 bg-zinc-950 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
//           Features
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Next.js Integration */}
//           <div className="flex items-start">
//             <div className="text-4xl mr-4">
//               <TbBrandNextjs />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Next.js Integration</h3>
//               <p className="text-zinc-400">
//                 Experience lightning-fast performance and SEO-friendly pages with Next.js.
//               </p>
//             </div>
//           </div>

//           {/* TypeScript Support */}
//           <div className="flex items-start">
//             <div className="text-4xl mr-4">
//               <BiLogoTypescript />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">TypeScript Support</h3>
//               <p className="text-zinc-400">
//                 Benefit from a robust, strongly typed codebase that minimizes errors.
//               </p>
//             </div>
//           </div>

//           {/* Tailwind CSS Styling */}
//           <div className="flex items-start">
//             <div className="text-4xl mr-4">
//               <RiTailwindCssFill />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Tailwind CSS Styling</h3>
//               <p className="text-zinc-400">
//                 Craft stunning, responsive designs quickly with Tailwind CSS’s utility-first approach.
//               </p>
//             </div>
//           </div>

//           {/* AI-Powered Insights */}
//           <div className="flex items-start">
//             <div className="text-4xl mr-4">
//               <RiGeminiFill />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
//               <p className="text-zinc-400">
//                 Leverage cutting-edge AI to generate content, analyze trends, and drive smarter decisions.
//               </p>
//             </div>
//           </div>

//           {/* Secure Payments */}
//           <div className="flex items-start">
//             <div className="text-4xl mr-4">
//               <BsStripe className="text-2xl" />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
//               <p className="text-zinc-400">
//                 Process payments seamlessly and securely with our Stripe integration.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }












// import Image from 'next/image'
// import React from 'react'

// export default function Features() {
//     return (
//         <div className='flex flex-col md:flex-row justify-evenly items-center my-16 p-10'>
//             <div>
//                 <h2 className='text-4xl font-bold py-2'>AI powered tools</h2>
//                 <p className='text-xl py-2'>Our 18-in-1 AI suite provides powerful tools to simplify content creation:</p>
//                 <ol className='px-4 py-2 text-sm text-zinc-500 space-y-2'>
//                     <p>Hashtag Generator – Instantly generate trending and relevant hashtags for better reach.</p>
//                     <p>Title Suggestions – AI-powered creative titles to boost engagement and visibility.</p>
//                     <p>Code Debugging – Identify and fix errors in your code effortlessly.</p>
//                     <p>Content Ideas – Get unique content suggestions tailored to your needs.</p>
//                     <p>SEO Optimization – Improve search rankings with AI-driven keyword insights.</p>
//                 </ol>
//             </div>
//             <div className='border-8 rounded-xl border-purple-900 p-4'>
//                 <Image src={'/dashboard.png'} width={270} height={270} alt={'dashboard image'} className='w-[500px] '></Image>
//             </div>
//         </div>
//     )
// }
