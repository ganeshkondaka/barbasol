import { Templates } from '@/app/(data)/Template'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
export default function TemplateGrid({ searchInput }: { searchInput: string }) {

    const [templateList, setTemplateList] = useState(Templates)
    
    useEffect(() => {
        if (searchInput) {
            const filteredTemplates = Templates.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
            setTemplateList(filteredTemplates)
        } else {
            setTemplateList(Templates)
        }


        // console.log(searchInput);
    }, [searchInput])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-4 '>
            {
                templateList.map((item, index) => (
                    <Link href={'dashboard/content/' + item.slug} key={index} className='scale-100 hover:scale-105 hover:bg-zinc-900 transition-transform w-[10rem] h-[10rem] md:w-64 md:h-64 border-4 border-zinc-700 m-2 rounded-xl flex flex-col items-center justify-center gap-2 text-center p-1 md:p-4'>
                        {/* <Link  className={'absolute top-2 right-2'}></Link> */}
                        <Image
                            src={item.icon}
                            alt={item.name}
                            width={50}
                            height={50}
                            className='rounded-lg w-8 h-8 md:w-10 md:h-10'
                            suppressHydrationWarning={true}
                        ></Image>
                        <p className='text-sm md:text-xl font-bold text-slate-300'>{item.name}</p>
                        <p className='text-[9px] md:text-sm text-zinc-400'>{item.desc}</p>
                    </Link>
                ))
            }

        </div>
    )
}
