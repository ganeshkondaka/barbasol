import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-zinc-950">
      <Image 
        src="/bottle.jpg"  // Make sure this image exists in your public folder
        alt="404"
        width={300}
        height={300}
        priority
      />
      <h2 className="text-2xl font-bold text-yellow-500 animate-pulse">Not Found</h2>
      <p className="text-zinc-200 font-bold text-center">⚡ <strong className='text-yellow-400'>Coming soon-ish</strong> , just polishing things up! 🕐🕜🕝 </p>
      <Link 
        href="/dashboard" 
        className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
      >
        Return to Dashboard
      </Link>
    </div>
  )
}