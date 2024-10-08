import { ChartColumnIncreasing } from 'lucide-react'
import Image from 'next/image'
import SearchInput from './SearchInput'


export default function Header() {
  return (
    <div className="bg-purple-200 flex items-center justify-between p-8 h-20 ">
      <div className="flex gap-4">
        <Image src="/user.png" alt="user_image"  width={200} height={200} className='rounded-full w-12 h-12 border-4 border-purple-800'/>
        <div className="flex flex-col hidden md:block">
          <h1 className="text-2xl">Username</h1>
          <p className="text-sm text-slate-500">Welcome to Pennywise</p>
        </div>
      </div>
      <div className="hidden md:block">
        <SearchInput/>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <ChartColumnIncreasing className="hidden md:block"/>
        <button className="bg-purple-800 text-white p-4 py-2 rounded-full">
          Logout
        </button>
      </div>
    </div>
  )
}
