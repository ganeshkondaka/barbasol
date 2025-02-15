'use client'
import { TEMPLATE, Templates } from '@/app/(data)/Template'
import Input_Form from '@/app/components/Input_Form'
import TextEditor from '@/app/components/TextEditor'
import { chatSession } from '@/utils/AiModal'
import axios from 'axios'
import Link from 'next/link'
import React, { use, useState } from 'react'

interface PROPS {
  params: Promise<{ slug: string }> // params is now a Promise
}

interface FormData {
  [key: string]: string;
}

// interface InputFormProps {
//   selectedTemplate: TEMPLATE;
//   useInputdata: (data: FormData) => Promise<void>;
//   loading: boolean;
// }

export default function Page(props: PROPS) {
  const params = use(props.params); // Unwrapping params with React.use()
  const { slug } = params; // Now we can safely access slug

  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === slug);
  const [loading, setLoading] = useState(false)
  const [aiResponse, setaiResponse] = useState('')

  const Aicontent = async (data: FormData) => {
    setLoading(true)
    const selecetdPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(data) + ',' + selecetdPrompt + ',' + 'just give me data only , dont give anything others like wishing or informing, just give me sata baout this prompt asked you precisely'
    const result = await chatSession.sendMessage(finalPrompt)
    const responseText = await result.response.text(); // Awaiting response properly
    console.log(' the resulted responded data is :',responseText)
    setLoading(false)
    setaiResponse(responseText)
    // console.log('the data is :', Object.values(data).join(' '))
    
    await save_history(data, slug, responseText)
    
  }

  const save_history = async (data: FormData, slug: string, aiResponse: string) => {
    try {
      // const aires=await aiResponse 
      const added_history = await axios.post('/api/create-history', { data, slug,  aires:aiResponse })
      console.log(added_history)
    } catch (error) {
      console.log('error fron history frotned:', error)
    }

  }

  return (
    <div className='m-2 md:p-10'>
      <Link href="/dashboard" className='hover:bg-purple-800 border border-purple-600 text-white p-3 text-sm font-bold rounded-lg inline items-center ' > ◀ Back</Link>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-4 p-4 md:p-10'>

        <div className='space-y-4 w-full'>
          {selectedTemplate && (
            <Input_Form
              selectedTemplate={selectedTemplate}
              useInputdata={(data: FormData) => Aicontent(data)}
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
