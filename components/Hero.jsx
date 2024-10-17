import { getServerSession } from 'next-auth'
import ThemeLink from './ThemeLink'
import { ArrowRight } from 'lucide-react'
import { authOptions } from '@/lib/authOptions'
import Image from 'next/image'

export default function Hero() {
  const session = getServerSession(authOptions)
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-300 flex flex-col p-16 mt-16 text-white items-center">
      {/* Content */}
      <div className="flex flex-col items-center space-y-8 z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Your one-stop solution for tracking your finances</h2>
        <p className="text-base md:text-xl drop-shadow-lg">Welcome to PennyWise, where managing your finances becomes a breeze. Our platform offers intuitive tools to track your income, expenses, budgets, and savings all in one place. Whether you're looking to save for a big purchase, manage your daily expenses, or simply gain better control over your financial health, PennyWise is here to guide you every step of the way. Join us and take the first step towards financial freedom today!</p>
        <div className="py-4 flex space-x-4 items-center">
          {session?
            <ThemeLink className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300" title="View Dashboard" href="/dashboard/home" Icon={ArrowRight}/>
            : <ThemeLink className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300" title="Register" href="/register" Icon={ArrowRight}/>
        }
          <ThemeLink className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300" title="Explore Demo Account" href="/register" Icon={ArrowRight}/>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-full h-96 mt-8">
        <Image src="/pennywiseMockup.png" layout="fill" objectFit="contain" alt="Pennywise Image" />
      </div>
    </div>
  )
}
