'use client'
import { BiSearch } from 'react-icons/bi'

export default function Browse_template({onsearch}:{onsearch:(val:string)=>void}) {

  // const changeval = (e: { target: { value: React.SetStateAction<string> } }) => {
  //   setSearchval(e.target.value)
  //   // console.log('the searchval is',searchval)
  // }

  // useEffect(() => {
  //   console.log( searchval);
  // }, [searchval]);

  return (
    <div className='w-full flex flex-col items-center p-14 bg-zinc-900 space-y-3'>

      <p className='font-bold  text-2xl md:text-3xl text-center'>Browse All Templates</p>
      <p className='text-[11px] md:text-sm text-zinc-400'>what would you like to create today</p>

      <div className='flex items-center rounded-lg m-2 border-2 border-zinc-700 w-full max-w-xl hover:bg-zinc-800'>
        <BiSearch className='inline ml-2'></BiSearch>
        <input
          type="text"
          placeholder="Search"
          // value={searchval}
          suppressHydrationWarning={true}
          onChange={(e) => onsearch(e.target.value)}
          className='inline bg-transparent  rounded-lg m-2 outline-none w-full' />
      </div>
    </div>
  )
}
