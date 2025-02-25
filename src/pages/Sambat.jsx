import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Send } from 'lucide-react'
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { toPng } from 'html-to-image';
import heic2any from "heic2any";

export default function Sambat() {
  const { sambatUuid } = useParams();
  const [sambat, setSambat] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    axios.get(`/api/getDetail.php?id=${sambatUuid}`)
      .then((res) => {
        setSambat(res.data);
      })
      .catch((err) => console.error(err));
  }, [sambatUuid]);

  useEffect(() => {
    console.log("Fetching data for ID:", sambatUuid);
    axios.get(`/api/getDetail.php?id=${sambatUuid}`)
      .then((res) => {
        console.log("Data fetched:", res.data);
        setSambat(res.data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [sambatUuid]);


  const htmlToImageConvert = () => {
    const element = elementRef.current;
    const scale = 5; // Scale factor
  
    toPng(element, { cacheBust: false, quality: 1, pixelRatio: scale }) // quality ranges from 0 to 1
      .then((dataUrl) => {
        const img = new window.Image(); // Specify `window.Image` to avoid scope conflicts
        img.src = dataUrl;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = element.offsetWidth * scale;
          canvas.height = element.offsetHeight * scale;
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true; // Enable image smoothing for HD
          ctx.imageSmoothingQuality = 'high';
          // Draw the image onto the canvas at the desired scale
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
          // Convert the canvas to a PNG and trigger the download
          canvas.toBlob((blob) => {
            const link = document.createElement("a");
            link.download = "export.png";
            link.href = URL.createObjectURL(blob);
            link.click();
          }, "image/png");
        };
      })
      .catch((err) => {
        console.error("Error generating image:", err);
      });
  };
  
  if (!sambat) return <p>Loading...</p>;
  return (
    <div className='bg-purple-500 min-h-screen'>
      <div className='container'>
        <a href='/'><Button className='translate-y-12' variant='secondary'> <ArrowLeft className='w-4 h-4 mr-2' /> Back dulu gak sih</Button></a>
        <div className='pt-24'>
          <div ref={elementRef}>
              <Card className="w-full">
                  <CardHeader>
                      <CardTitle>Hallo <span className='text-rose-500'>{sambat.recipient}</span></CardTitle>
                      <p className='text-sm text-gray-500'>Dibuat pada: {sambat.created_at}</p>
                  </CardHeader>
                  <CardContent>
                      <div className='flex flex-col gap-4 py-4'>
                          <div className='flex flex-col gap-1'>
                              <p className='text-3xl'>{sambat.message}</p>
                          </div>
                      </div>
                  </CardContent>
              </Card>
          </div>
        </div>
        <Button className='font-semibold' onClick={htmlToImageConvert}> <Download className='w-4 h-4 mr-2' /> Download</Button>
      </div>
    </div>
  );
}
