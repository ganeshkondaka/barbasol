'use client'
import React, { useEffect, useState } from 'react'
import { TEMPLATE } from '../(data)/Template'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { VscLoading } from 'react-icons/vsc'
// import { useUser } from '@clerk/nextjs'
// import { stringify } from 'querystring'
interface FormData {
  [key: string]: string;
}

interface InputFormProps {
  selectedTemplate: TEMPLATE;
  useInputdata: (data: FormData) => Promise<void>;
  loading: boolean
}

export default function Input_Form({ selectedTemplate, useInputdata, loading }: InputFormProps) {

  const [formData, setFormData] = useState({})

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  }

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData)
    if(localStorage.getItem('count')=='0'){
      return alert('you have reached the limit 👍')
    }
    useInputdata(formData)

  }

  const Handlecount = () => {
    if(localStorage.getItem('count')=='0'){
      return alert('you have reached the limit 👍')
    }
    // if (localStorage.getItem('email') != process.env.email) {
      const current_count = parseInt(localStorage.getItem('count') || '0')
      localStorage.setItem('count', (current_count - 1).toString())
      // console.log('the count issup', localStorage.getItem('count'))

    // } 
  }

  // useEffect(() => {
    
  //   console.log('the count iss', localStorage.getItem('count'))
  // }, [])


  return (
    <div className=' flex items-center flex-col h-full p-4 md:p-10 border-4 border-zinc-700 rounded-lg space-y-3 py-5 md:py-10'>

      <Image src={selectedTemplate.icon} width={70} height={70} alt='template logo'></Image>
      <h2 className='text-2xl'>{selectedTemplate.name}</h2>
      <p className='text-sm text-zinc-500'>{selectedTemplate.desc}</p>

      <form onSubmit={HandleSubmit} className='flex flex-col gap-4 w-full'>
        {
          selectedTemplate.form.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 w-full'>
              <label>{item.label}</label>
              {item.field == 'input' ?
                <Input name={item.name} required={item?.required} onChange={HandleChange} className='border-2 border-zinc-600 w-full h-16'></Input>
                : item.field == 'textarea' ?
                  <Textarea name={item.name} required={item?.required} onChange={HandleChange} className='border-2 border-zinc-600'></Textarea>
                  : null}
            </div>
          ))
        }
        <button
          type='submit'
          onClick={Handlecount}
          disabled={loading}
          className=' flex flex-row gap-2 items-center text-center justify-center mt-2 md:mt-6  bg-white text-black rounded p-1 w-full'>{loading && <VscLoading className='animate-spin '></VscLoading>}submit</button>
      </form>
    </div>
  )
}
