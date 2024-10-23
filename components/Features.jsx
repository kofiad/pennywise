import { AlertCircle, ArrowRight, Calendar, File, PiggyBank, TrendingUp, Wallet } from 'lucide-react';
import ThemeLink from './ThemeLink';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

const featuresOptions = [
  {
    title: "Expense Tracking",
    description: "Easily track your daily expenses and categorize them for better financial management.",
    icon: Wallet,
  },
  {
    title: "Income Management",
    description: "Keep a record of all your income sources and monitor your earnings over time.",
    icon: TrendingUp,
  },
  {
    title: "Budget Planning",
    description: "Create and manage budgets to ensure you stay on track with your financial goals.",
    icon: Calendar,
  },
  {
    title: "Savings Goals",
    description: "Set savings goals and track your progress to achieve your financial milestones.",
    icon: PiggyBank,
  },
  {
    title: "Automated Notifications",
    description: "Receive notifications for upcoming bills, due dates, and financial milestones.",
    icon: AlertCircle,
  },
  {
    title: "Reports and Analytics",
    description: "Generate detailed reports and gain insights into your financial health with analytics.",
    icon: File,
  },
];

export default function Features({session}) {
  return (
    <div className="bg-purple-950 p-4 md:p-8 lg:p-16 text-slate-50">
      <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">Features of PennyWise</h2>

      {/* Responsive grid layout with hover animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuresOptions.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-purple-200 rounded-lg gap-4 p-4 transition-transform transform hover:scale-105 hover:border-purple-500 hover:shadow-xl"
          >
            {/* Icon with animation */}
            <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform transform hover:scale-110 hover:rotate-6" />
            <div className="text-center">
              <h3 className="text-sm md:text-md lg:text-lg font-semibold transition-transform transform hover:translate-y-1">{title}</h3>
              <p className="text-xs md:text-sm lg:text-md text-center">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animated button */}
      <div>
        {session?
            <ThemeLink
            className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300 transition-transform transform hover:scale-105 focus:scale-105"
            title="View Dashboard"
            href="/dashboard/home"
            Icon={ArrowRight}
          />
        :<ThemeLink
          className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300 transition-transform transform hover:scale-105 focus:scale-105"
          title="Get Started Today"
          href="/register"
          Icon={ArrowRight}
        />
        }
      </div>

    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getServerSession(authOptions)
  return{
    props:{
      session,
    }
  }
}
