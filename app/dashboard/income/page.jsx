import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'

export default async function Income() {
  const incomeData = getData("api/income")
  const [income] = await Promise.all([incomeData])

  // Ensure income is an array
  const validincome = Array.isArray(income) ? income : []

  const data = validincome.map((item) => {
    return {
      id: item.id,
      amount: item.amount,
      source: item.source,
      category: item.category,
      description: item.description,
      created: item.createdAt,
      updated: item.updatedAt,
    }
  })

  const columns = ["amount", "source", "created", "updated"]

  return (
    <div>
        {/* Header */}
        <FixedHeader title="income" newlink="/dashboard/inventory/income/new"/>
        {/* Table */}
        <div className="rounded-lg p-8">
           <DataTable data={data} columns={columns} resource="income"/>
        </div>
    </div>
  )
}
