import Searchbar from '@/app/components/Searchbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='flex justify-between w-full'>
        <Searchbar></Searchbar>
      </div>
      <p>dashboard</p>
    </div>
  )
}
