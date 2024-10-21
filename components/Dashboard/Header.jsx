"use client"
import { ChartColumnIncreasing } from 'lucide-react'
import Image from 'next/image'
import SearchInput from './SearchInput'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import generateInitials from '@/lib/generateInitials';
import Loading from '@/app/loading';

export default function Header() {

  const { data: session, status } = useSession();
  const [loggingOut, setLoggingOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const handleSignOut = async () => {
    setLoggingOut(true);
    await signOut();
  };

  const username = session?.user?.name.split(" ")[0];
  const initials = generateInitials(session?.user?.name);

  if (status === 'loading' || loggingOut) {
    return <Loading />;
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <div className="bg-purple-200 flex items-center justify-between p-8 h-20 ">
      <div className="flex gap-4">
      <button>
            {session.user?.image ? (
              <Image src={session.user?.image} alt='User Image' width={96} height={96} className='rounded-full w-8 h-8 border border-slate-800'/>
            ) : (
              <div className='flex items-center justify-center rounded-full w-8 h-8 border border-slate-800 bg-white'>{initials}</div>
            )}
          </button>
        <div className="flex flex-col hidden md:block">
          <h1 className="text-2xl">{username}</h1>
          <p className="text-sm text-slate-500">Welcome to Pennywise</p>
        </div>
      </div>
      <div className="hidden md:block">
        <SearchInput/>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <ChartColumnIncreasing className="hidden md:block"/>
        <button className="bg-purple-800 text-white p-4 py-2 rounded-full" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  )
}
