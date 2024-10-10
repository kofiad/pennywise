import DataTable from '@/components/Dashboard/DataTable'
import FormHeader from '@/components/FormInputs/FormHeader'
import { getData } from '@/lib/getData'

export default async function Expense() {
  const expenseData = getData("api/expense")
  const [expense] = await Promise.all([expenseData])

  // Ensure expense is an array
  const validExpense = Array.isArray(expense) ? expense : []

  const data = validExpense.map((item) => {
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
        <FormHeader title="Expense" href="/dashboard/home"/>
        {/* Table */}
        <div className="rounded-lg p-8">
           <DataTable data={data} columns={columns} resource="expense"/>
        </div>
    </div>
  )
}
