'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const user_history = async () => {
      try {
        const result = await axios.get('/api/user-history')
        console.log('result is :', result.data)
        setHistory(result.data.history)
      } catch (error) {
        console.log('error is :', error)
      }
    }

    user_history()
  }, [])

  return (
    <div className='min-h-screen bg-zinc-900 text-white p-4 flex flex-col items-center w-full'>
      <h1 className='text-2xl font-semibold mb-4'>User History</h1>
      <div className='w-full  space-y-4'>
        {history.map((item: any, index) => (
          <div key={index} className='flex  flex-col md:flex-row items-start md:items-center justify-between border border-zinc-700 rounded-lg p-4 bg-zinc-800 shadow-md space-y-2 md:space-y-0 md:space-x-4'>
            <p className='text-sm md:text-base font-medium text-gray-300 flex-1'>{item.template}</p>
            <p className='text-sm md:text-base text-gray-400 flex-1'>{item.user_input}</p>
            <p className='text-sm md:text-base text-gray-500 flex-1  inline'>{item.ai_response.slice(0, 100)}...</p>
            <p className='text-sm text-gray-600'>{item.date.slice(0, 10)}</p>
            <button 
              onClick={() => navigator.clipboard.writeText(item.ai_response)} 
              className='px-3 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all duration-200'>
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
