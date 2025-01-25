'use client';
import Browse_template from '@/app/components/dashboard_sub/Browse_template'
import TemplateGrid from '@/app/components/dashboard_sub/TemplateGrid'
import Searchbar from '@/app/components/Searchbar'
// import { useUser } from '@clerk/nextjs';
import React, {  useState } from 'react'

export default function page() {
  const [searchval, setSearchval] = useState('')

  // const { user } = useUser();
  // useEffect(() => {
  //   localStorage.setItem('count', '5')
  //   const emailId = user?.primaryEmailAddress?.emailAddress;
  //   localStorage.setItem('email', emailId || '')
  // }, [user])

  return (
    <div>
      <div className='w-full hidden md:block'>
        <Searchbar></Searchbar>
        <hr className='w-full border-zinc-800 ' />
      </div>
      <Browse_template onsearch={(value) => { setSearchval(value) }}></Browse_template>
      <TemplateGrid searchInput={searchval}></TemplateGrid>
    </div>
  )
}
