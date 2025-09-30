import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
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
  { month: "July", agents: 214, ambassador: 140, Direct: 100 },
  { month: "August", agents: 214, ambassador: 140, Direct: 100 },
  { month: "September", agents: 237, ambassador: 120, Direct: 90 },
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
    <Card className="h-[385px] w-full">
      <CardHeader>
        <CardTitle className="text-foreground font-semibold">Students onboarded channels</CardTitle>
        <CardDescription className="text-secondary-foreground text-sm">January - September 2025</CardDescription>
        <CardDescription >
           <div className="flex  gap-2">
         <li className="mr-4 text-body ">Agents</li>
          <li className="mr-4 text-body ">Ambassadors</li>
           <li className="mr-4 text-body ">Direct</li>
       </div>
        </CardDescription>

      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[250px] w-full" config={chartConfig}>
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
    </Card>
  )
}
