"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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

// GrowthCharts Component to render charts for each quarter
interface GrowthData {
  month: string;
  profit: number;
  revenue: number;
}

interface GrowthChartsProps {
  quarterlyGrowthData: { quarter: number; data: GrowthData[] }[];
}

const chartConfig = {
  profit: {
    label: "Profit",
    color: "#205295", // Replace with red color
  },
  revenue: {
    label: "Revenue",
    color: "#2C74B3", // Replace with green color
  },
} satisfies ChartConfig;

const GrowthCharts = ({ quarterlyGrowthData }: GrowthChartsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quarterlyGrowthData.map((quarterData) => (
        <Card
          className="bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526]"
          key={quarterData.quarter}
        >
          <CardHeader>
            <CardTitle className="text-white">
              Q-{quarterData.quarter}
            </CardTitle>
            <CardDescription>
              {quarterData.data[0].month} - {quarterData.data[2].month}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={quarterData.data}
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
                  tickFormatter={(value) => value.slice(0, 3)} // Only show the first 3 letters of the month
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />

                {/* Profit Line */}
                <Line
                  dataKey="profit"
                  type="monotone"
                  stroke="#77ABB7" // Color for profit line (Red)
                  strokeWidth={3} // Increase the stroke width
                  dot={true} // Add dots to make points more visible
                />

                {/* Revenue Line */}
                <Line
                  dataKey="revenue"
                  type="monotone"
                  stroke="#2C74B3" // Color for revenue line (Green)
                  strokeWidth={3} // Increase the stroke width
                  dot={true} // Add dots to make points more visible
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up this quarter <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  Showing profit and revenue for Q{quarterData.quarter}
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default GrowthCharts;
