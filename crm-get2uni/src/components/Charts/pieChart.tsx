"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with inside + edge labels"

const chartData = [
    { browser: "Rejected", visitors: 275, fill: "var(--chart-3)" },
    { browser: "Approved", visitors: 200, fill: "var(--chart-1)" },
    { browser: "Paid", visitors: 187, fill: "var(--chart-2)" },
  ]

const chartConfig = {
  Rejected: {
    label: "Rejected",
    color: "var(--chart-3)",
  },
  Approved: {
    label: "Approved",
    color: "var(--chart-1)",
  },
  Paid: {
    label: "Paid",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartPieLabelList() {
  return (
    <Card className="flex flex-col  max-h-[600px] w-full">
      <CardHeader className="items-center justify-between pb-0">
        <CardTitle>Total Commission</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 h-[250px]">
        <ChartContainer
          config={chartConfig}
          className="dark:[&_.recharts-text]:fill-white [&_.recharts-text]:fill-black  mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="visitors" />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              outerRadius={100}
              labelLine={true} 
              // edge labels
              label={({ name, value }) =>
                `${chartConfig[name as keyof typeof chartConfig]?.label}: ${value}`
              }
            >
              {/* inside labels */}
              <LabelList
                dataKey="browser"
                position="inside"
                className="fill-black"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
              {/* apply colors */}
            
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
        Total Commission:5<TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-secondary-foreground leading-none">
        Trending down by 0% from the previous period.

        </div>
      </CardFooter>
    </Card>
  )
}
