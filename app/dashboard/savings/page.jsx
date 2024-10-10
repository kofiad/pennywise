import DataTable from '@/components/Dashboard/DataTable'
import FormHeader from '@/components/FormInputs/FormHeader'
import { getData } from '@/lib/getData'

export default async function savings() {
  const savingsData = getData("api/savings")
  const [savings] = await Promise.all([savingsData])

  // Ensure savings is an array
  const validSavings = Array.isArray(savings) ? savings : []

  const data = validSavings.map((item) => {
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
        <FormHeader title="Savings" href="/dashboard/home"/>
        {/* Table */}
        <div className="rounded-lg p-8">
           <DataTable data={data} columns={columns} resource="savings"/>
        </div>
    </div>
  )
}
