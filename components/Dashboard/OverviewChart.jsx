import calculateMonthlySums from "@/lib/calculateMonthlyTotal";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { getData } from "@/lib/getData";

export default async function OverviewChart() {
  const chartConfig = {
    income: {
      label: "Income",
      color: "#6B46C1", // Replace with Tailwind's purple-500 in hex
    },
    expense: {
      label: "Expense",
      color: "#9F7AEA", // Replace with Tailwind's purple-400 in hex
    },
  };

  // Await the data fetch
  const incomeData = await getData("api/income");
  const expenseData = await getData("api/expense");

  // Calculate monthly sums
  const incomeMonthlySums = calculateMonthlySums(incomeData);
  const expenseMonthlySums = calculateMonthlySums(expenseData);

  // Prepare data for the chart
  const chartData = Object.keys(incomeMonthlySums).map((month) => ({
    month,
    income: incomeMonthlySums[month] || 0,
    expense: expenseMonthlySums[month] || 0,
  }));

  return (
    <div className="min-h-[300px] w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill={chartConfig.income.color} radius={4} />
          <Bar dataKey="expense" fill={chartConfig.expense.color} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
