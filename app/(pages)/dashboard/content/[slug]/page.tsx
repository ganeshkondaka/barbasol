'use client'
import { TEMPLATE, Templates } from '@/app/(data)/Template'
import Input_Form from '@/app/components/Input_Form'
import TextEditor from '@/app/components/TextEditor'
import Link from 'next/link'
import React, { use } from 'react'

interface PROPS {
  params: Promise<{ slug: string }> // params is now a Promise
}

export default function Page(props: PROPS) {
  const params = use(props.params); // Unwrapping params with React.use()
  const { slug } = params; // Now we can safely access slug

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === slug);
  const Aicontent = (data: any) => {

  }
  return (
    <div className=' p-10'>
      <Link href="/dashboard" className='hover:bg-purple-800 border border-purple-600 text-white p-3  rounded-lg inline items-center ' > ◀ Back</Link>
      <div className="grid grid-cols-3 gap-6 mt-5 ">

        <div className='space-y-4'>
          {selectedTemplate && (
            <Input_Form
              selectedTemplate={selectedTemplate}
              useInputdata={(data: any) => Aicontent(data)}
            />
          )}
        </div>

        <div className="col-span-2">
          <TextEditor></TextEditor>
        </div>

      </div>
    </div>
  );
}
