"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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

export const description = "A multiple line chart"

const chartData = [
  { month: "January", agents: 186, ambassador: 80, Direct: 50 },
  { month: "February", agents: 305, ambassador: 200, Direct: 120 },
  { month: "March", agents: 237, ambassador: 120, Direct: 90 },
  { month: "April", agents: 73, ambassador: 190, Direct: 60 },
  { month: "May", agents: 209, ambassador: 130, Direct: 110 },
  { month: "June", agents: 214, ambassador: 140, Direct: 100 },
]

const chartConfig = {
  agents: {
    label: "Agents",
    color: "var(--chart-1)",
  },
  ambassadorDirect: {
    label: "Ambassador ",
    color: "var(--chart-2)",
  },
  affiliate: {
    label: "Direct",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartLineMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="agents"
              type="monotone"
              stroke="var(--color-agents)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="ambassador"
              type="monotone"
              stroke="var(--color-ambassadorDirect)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Direct"
              type="monotone"
              stroke="var(--color-affiliate)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
