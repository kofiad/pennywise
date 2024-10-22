import ActivityCard from '@/components/Dashboard/ActivityCard'
import OverviewChart from '@/components/Dashboard/OverviewChart'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Home() {
  const incomeData = getData("api/income")
  const expenseData = getData("api/expense")
  const budgetData = getData("api/budget")
  const savingsData = getData("api/savings")

  const [incomeEntries, expenseEntries, budgetEntries, savings] = await Promise.all([
    incomeData,
    expenseData,
    budgetData,
    savingsData,
  ])

  // Helper function to calculate total from the 'amount' parameter
  const calculateTotal = (entries) => entries.reduce((acc, entry) => acc + entry.amount, 0);

  const totalIncome = calculateTotal(incomeEntries);
  const totalExpenses = calculateTotal(expenseEntries);
  const totalBudget = calculateTotal(budgetEntries);
  const availableIncome = totalIncome - totalExpenses; // Assuming this logic

  const financeActivity = [
    {
      title: "Total Income",
      number: totalIncome,
      href: "/",
      colour: "text-purple-500"
    },
    {
      title: "Total Expenses",
      number: totalExpenses,
      href: "/",
      colour: "text-purple-500"
    },
    {
      title: "Available Income",
      number: availableIncome,
      href: "/",
      colour: "text-purple-500"
    },
    {
      title: "Budget",
      number: totalBudget,
      href: "/",
      colour: "text-purple-500"
    }
  ]

  return (
    <div className='bg-purple-100 mt-4 min-h-screen rounded-lg'>
      {/*Finance Activity*/}
      <div className='flex flex-col col-span-full lg:col-span-8 p-8 sm:py-12 lg:py-8 space-y-8'>
        <div>
          <h2 className='mb-4 sm:text-md lg:text-xl text-slate-500'>Financial Overview</h2>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/*Card*/}
            {
              financeActivity.map((item, index) => (
                <ActivityCard item={item} key={index} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='px-8'>
        <OverviewChart />
      </div>
    </div>
  )
}
