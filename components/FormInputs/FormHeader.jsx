import { X } from 'lucide-react'


export default function FormHeader({title, href}) {
  return (
    <div className="m-5 rounded-lg flex items-center justify-between bg-white py-3 px-8">
          <h2 className='text-xl font-semibold'>{title}</h2>
          <a href={href}>
            <X className="h-6 w-6" />
          </a>
    </div>
  )
}
