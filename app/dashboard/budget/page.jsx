import DataTable from '@/components/Dashboard/DataTable'
import FormHeader from '@/components/FormInputs/FormHeader'
import { getData } from '@/lib/getData'

export default async function Budget() {
  const budgetData = getData("api/budget")
  const [budget] = await Promise.all([budgetData])

  // Ensure budget is an array
  const validBudget = Array.isArray(budget) ? budget : []

  const data = validBudget.map((item) => {
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
        <FormHeader title="Budget" href="/dashboard/home"/>
        {/* Table */}
        <div className="rounded-lg p-8">
           <DataTable data={data} columns={columns} resource="budget"/>
        </div>
    </div>
  )
}
