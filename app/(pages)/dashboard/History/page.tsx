'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function Page() {
  const [history, setHistory] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user_history = async () => {
      try {
        const result = await axios.get('/api/user-history')
        console.log('result is :', result.data)
        setHistory(result.data.history)
      } catch (error) {
        console.log('error is :', error)
      } finally {
        setLoading(false)
      }
    }

    user_history()
  }, [])

  return (
    <div className='min-h-screen bg-zinc-900 text-white p-4 flex flex-col items-center w-full'>
      <h1 className='text-2xl font-semibold mb-4'>User History</h1>
      <div className='w-full space-y-4'>
        <div className='hidden lg:block'>
          <div className='flex text-center md:flex-row items-center md:items-center justify-between  shadow-md space-y-2 md:space-y-0 md:space-x-4'>
            <p>Template</p>
            <p>Input</p>
            <p>Ai response</p>
            <p>Date</p>
            <p></p>
          </div>
        </div>
        {loading ? (
          <div className='flex justify-center items-center'>
            <FaSpinner className='animate-spin text-4xl' />
          </div>
        ) : (
          history.map((item: any, index) => (
            <div key={index} className='text-[xs] flex flex-col md:flex-row items-start md:items-center justify-between border border-zinc-700 rounded-lg p-4 bg-zinc-800 shadow-md space-y-2 md:space-y-0 md:space-x-4'>
              <p className='text-xs  font-medium text-gray-300 flex-1'>{item.template}</p>
              <p className='text-xs  text-gray-400 flex-1'>{item.user_input}</p>
              <p className='text-xs  text-gray-400 flex-1 inline'>{item.ai_response.slice(0, 100)}...</p>
              <p className='text-xs text-gray-500 flex-1 text-center'>{item.date.slice(0, 10)}</p>
              <button
                onClick={() => navigator.clipboard.writeText(item.ai_response)}
                className='px-3 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all duration-200'>
                Copy
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}