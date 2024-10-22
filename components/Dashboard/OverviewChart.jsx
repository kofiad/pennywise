"use client"
import React, { useState, useEffect, useMemo } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getData } from "@/lib/getData"
import calculateMonthlySums from "@/lib/calculateMonthlyTotal"

export const description = "A financial overview chart"

const chartConfig = {
  income: {
    label: "Income",
    color: "#6B46C1",
  },
  expenses: {
    label: "Expenses",
    color: "#9F7AEA", // Fixed color code
  },
}

export default function OverviewChart() {
  const [chartData, setChartData] = useState([]);
  const [activeChart, setActiveChart] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeData = await getData("api/income");
        const expenseData = await getData("api/expense");

        const incomeMonthlySums = calculateMonthlySums(incomeData);
        const expenseMonthlySums = calculateMonthlySums(expenseData);

        const formattedChartData = Object.keys(incomeMonthlySums).map((month) => ({
          date: month,
          income: incomeMonthlySums[month] || 0,
          expenses: expenseMonthlySums[month] || 0,
        }));

        setChartData(formattedChartData); // Update state with the prepared chart data
      } catch (error) {
        console.error("Error fetching financial data:", error);
      }
    };

    fetchData();
  }, []);

  const total = useMemo(() => ({
    income: chartData.reduce((acc, curr) => acc + curr.income, 0),
    expenses: chartData.reduce((acc, curr) => acc + curr.expenses, 0),
  }), [chartData]);

  const formatDate = (dateString) => {
    const [year, month] = dateString.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'short' });
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-slate-500">Financial Overview Chart</CardTitle>
          <CardDescription>
            Showing breakdown of monthly income and expenses.
          </CardDescription>
        </div>
        <div className="flex">
          {["all", "income", "expenses"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-slate-500 text-xs text-muted-foreground">
                  {chart === "all" ? "All" : chartConfig[chart].label}
                </span>
                <span className="text-purple-500 text-lg font-bold leading-none sm:text-3xl">
                  {chart === "all" ? "" : total[chart].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={formatDate} // Use the formatDate function
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart}
                  labelFormatter={formatDate} // Use the formatDate function
                />
              }
            />
            {activeChart === "all" || activeChart === "income" ? (
              <Bar dataKey="income" fill={chartConfig.income.color} />
            ) : null}
            {activeChart === "all" || activeChart === "expenses" ? (
              <Bar dataKey="expenses" fill={chartConfig.expenses.color} />
            ) : null}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
