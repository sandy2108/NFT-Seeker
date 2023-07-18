import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Search() {
  
    const [search ,setSearch] = useState("");
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSearch("");
      router.push(`/${search}/`)
    }


  return (
    <form onSubmit={handleSubmit} className="w-50 flex justify-center md:justify-between">
       <input 
           type="text"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           className="w-80 p-2 bg-white text-xl rounded-2xl"
           placeholder="Search"
        />
        <button className="p-2 text-xl rounded-2xl bg-white ml-2 font-bold ">
            🦍
        </button>
    </form>
  )
}
