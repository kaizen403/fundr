"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for Conversion Rate and Bounce Rate percentages
const chartData = [
  { metric: "Conversion Rate", percentage: 30, fill: "#77ABB7" }, // Updated color 1
  { metric: "Bounce Rate", percentage: 70, fill: "#2C74B3" }, // Updated color 2
];

const chartConfig = {
  conversionRate: {
    label: "Conversion Rate",
    color: "#77ABB7", // Updated color 1
  },
  bounceRate: {
    label: "Bounce Rate",
    color: "#2C74B3", // Updated color 2
  },
} satisfies ChartConfig;

export function PerformanceMetrics() {
  return (
    <Card className="flex bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526] flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white font-semibold tracking-wide">
          Conversion and Bounce Rate
        </CardTitle>
        <CardDescription className="text-white"></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] w-[350px] pb-0 [&_.recharts-pie-label-text]:fill-white"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="percentage"
              label={({ name }) => name} // Show metric names in pie chart
              nameKey="metric"
              innerRadius={70}
              outerRadius={100}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-white">
          Rates are in percentage <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-white">
          Displaying current performance metrics.
        </div>
      </CardFooter>
    </Card>
  );
}
