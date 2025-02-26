import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Send } from 'lucide-react'
import { useState } from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Add() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!recipient || !message) {
      alert("Harap isi semua kolom!");
      return;
    }
    
    try {
      const data = { recipient, message };
      await axios.post("/api/add.php", data);
      alert("Kritik & Saran terkirim!");
      window.close(); // Menutup tab setelah klik OK di alert
    } catch (error) {
      alert("Gagal mengirim kritik & saran!");
    }
  };
  
  return (
    <div className='bg-lime-500 min-h-screen'>
      <div className='container'>
        <a href='/'><Button className='translate-y-12' variant='secondary'> <ArrowLeft className='w-4 h-4 mr-2' /> Back dulu gak sih</Button></a>
        <div className='py-24'>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Tambah Kritik & Saran <span className='text-rose-500'>* ini anonim lur</span></CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col gap-4 py-4'>
                        <div className='flex flex-col gap-1'>
                            <p>To :</p>
                            <Input placeholder='e.g. admin' value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>Kritik & Saran :</p>
                            <Textarea placeholder='e.g. saya ngantuk boleh tidur waktu jam kerja?' value={message} onChange={(e) => setMessage(e.target.value)}></Textarea>
                        </div>
                        <Button className='font-semibold text-[4rem] py-12' onClick={handleSubmit}> <Send className='w-12 h-12 mr-6' /> Send</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
