'use client'
import React, { useEffect, useState } from 'react'
import { TEMPLATE } from '../(data)/Template'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { VscLoading } from 'react-icons/vsc'

interface InputFormProps {
  selectedTemplate: TEMPLATE;
  useInputdata: any;
  loading:boolean
}

export default function Input_Form({ selectedTemplate, useInputdata ,loading}: InputFormProps) {

  const [formData, setFormData] = useState<any>({})

  const handleChange=(e:any)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }

  // useEffect(() => {
  //   console.log(formData)
  // },[])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData)
    useInputdata(formData)

  }

  return (
    <div className=' flex items-center flex-col h-full p-10 border-4 border-zinc-700 rounded-lg space-y-4 py-10'>

      <Image src={selectedTemplate.icon} width={70} height={70} alt='template logo'></Image>
      <h2 className='text-2xl'>{selectedTemplate.name}</h2>
      <p className='text-md text-zinc-500'>{selectedTemplate.desc}</p>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
        {
          selectedTemplate.form.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 w-full'>
              <label>{item.label}</label>
              {item.field == 'input' ?
                <Input name={item.name} required={item?.required} onChange={handleChange} className='border-2 border-zinc-600 w-full'></Input>
                : item.field == 'textarea' ?
                  <Textarea name={item.name} required={item?.required} onChange={handleChange} className='border-2 border-zinc-600'></Textarea>
                  : null}
            </div>
          ))
        }
        <button 
        type='submit'
        disabled={loading}
        className=' flex flex-row gap-2 items-center text-center justify-center mt-6  bg-white text-black rounded p-1 w-full'>{loading && <VscLoading className='animate-spin '></VscLoading>}submit</button>
      </form>
    </div>
  )
}
