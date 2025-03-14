import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10; // Jumlah data per request

  useEffect(() => {
    fetchMessages(0, true);
  }, [search]);

  const fetchMessages = async (pageNum, reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.get("https://kritiksaran.energeek.id//api/get.php", {
        params: { limit, offset: pageNum * limit, search }
      });
      setMessages(prev => (reset ? res.data : [...prev, ...res.data]));
      setPage(pageNum);
      setHasMore(res.data.length === limit); // Jika data kurang dari limit, berarti sudah habis
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-stone-50 relative">
      <div className='bg-[#0277FE] md:h-[360px] h-[430px]'>
        <img className="absolute z-50 top-4 left-4 lg:w-[300px] w-[200px] lg:opacity-100 opacity-20" src="/left.svg" />
        <img className="absolute z-50 top-4 right-4 lg:w-[300px] w-[200px] lg:opacity-100 opacity-20" src="/right.svg" />
        <svg class="w-[80vw] hidden lg:block h-auto absolute left-1/2 transform -translate-x-1/2 top-12" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,20 Q100,-10 190,20" stroke="black" stroke-width="1" stroke-dasharray="5,5" fill="transparent"/>
        </svg>
        <div className='grid md:h-[360px] h-[430px] place-items-center container relative'>
          <div className='flex flex-col gap-4 translate-y-[100px]'>
            <h1 className='text-4xl md:text-[3rem] md:leading-[3rem] font-semibold josefin-sans text-center text-white'>Curated list of kritik dan saran</h1>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga cumque, tenetur atque dolores quis dolore omnis itaque recusandae magni alias ipsa dolorem totam veniam optio voluptates hic libero quo consequuntur.</p>
            <div className="sticky top-2">
              <Input
                type="search"
                placeholder="Cari..."
                className="rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container absolute pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
          {messages.map((msg) => (
            <Link to={`/wall/${msg.id}`} key={msg.id} target="_blank">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-sm">To: {msg.recipient}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-[4] md:line-clamp-[3] 2xl:line-clamp-[4]">{msg.message}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Tombol Load More */}
        {hasMore && !loading && (
          <div className="text-center py-6">
            <Button onClick={() => fetchMessages(page + 1)}>Load More</Button>
          </div>
        )}

        {loading && <p className="text-center py-4">Loading...</p>}
      </div>
      <div className="fixed bottom-10 right-10">
        <a href="/#/add" target="_blank">
          <Button size="icon" className="shadow-xl">
            <Plus className="w-16 h-16" />
          </Button>
        </a>
      </div>
    </div>
  );
}
