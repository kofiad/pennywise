import DataTable from '@/components/Dashboard/DataTable'
import FormHeader from '@/components/FormInputs/FormHeader'
import { getData } from '@/lib/getData'

export default async function Income() {
  const incomeData = getData("api/income")
  const [income] = await Promise.all([incomeData])

  // Ensure income is an array
  const validIncome = Array.isArray(income) ? income : []

  const data = validIncome.map((item) => {
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
        <FormHeader title="Income" href="/dashboard/home"/>
        {/* Table */}
        <div className="rounded-lg p-8 sm:p-4">
           <DataTable data={data} columns={columns} resource="income"/>
        </div>
    </div>
  )
}
