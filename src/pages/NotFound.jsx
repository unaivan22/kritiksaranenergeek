import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

export default function NotFound() {
  return (
    <div className='bg-violet-500 grid h-screen place-items-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-white text-4xl uppercase text-center'>404 - Apa yang ente cari?</h1>
          <a href='/' className='w-full text-center'>  <Button> <ArrowLeft className='w-4 h-4 mr-2' /> Back to home</Button></a>
      </div>
    </div>
  )
}
