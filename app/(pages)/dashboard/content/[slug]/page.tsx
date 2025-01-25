'use client'
import { TEMPLATE, Templates } from '@/app/(data)/Template'
import Input_Form from '@/app/components/Input_Form'
import TextEditor from '@/app/components/TextEditor'
import { chatSession } from '@/utils/AiModal'
import Link from 'next/link'
import React, { use, useState } from 'react'

interface PROPS {
  params: Promise<{ slug: string }> // params is now a Promise
}

export default function Page(props: PROPS) {
  const params = use(props.params); // Unwrapping params with React.use()
  const { slug } = params; // Now we can safely access slug

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === slug);
  const [loading, setLoading] = useState(false)
  const [aiResponse, setaiResponse] = useState('')

  const Aicontent = async (data: any) => {
    setLoading(true)
    const selecetdPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(data) + ',' + selecetdPrompt
    const result = await chatSession.sendMessage(finalPrompt)
    setaiResponse(result.response.text())
    setLoading(false)
  }
  return (
    <div className='m-2 md:p-10'>
      <Link href="/dashboard" className='hover:bg-purple-800 border border-purple-600 text-white p-3 text-sm font-bold rounded-lg inline items-center ' > ◀ Back</Link>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-4 p-4 md:p-10'>

        <div className='space-y-4 w-full'>
          {selectedTemplate && (
            <Input_Form
              selectedTemplate={selectedTemplate}
              useInputdata={(data: any) => Aicontent(data)}
              loading={loading}
            />
          )}
        </div>

        <div className="w-full md:col-span-2">
          <TextEditor aiResponse={aiResponse}></TextEditor>
        </div>

      </div>
    </div>
  );
}
