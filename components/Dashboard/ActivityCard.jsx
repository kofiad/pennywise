import React from 'react'
import Link from 'next/link'

export default function ActivityCard({item}) {
  return (
    <Link href={item.href} className='shadow rounded-lg border border-purple-200 hover:border-purple-400 bg-white p-2 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300'>
      <h4 className={`font-semibold text-3xl ${item.colour}`}>{item.number}</h4>
      <small className='text-slate-500'>{item.unit}</small>
      <div className='flex text-slate-500 items-center'>
        <span className='uppercase text-xs'>{item.title}</span>
      </div>
    </Link>
  )
}
