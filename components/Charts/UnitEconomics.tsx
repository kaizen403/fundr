"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Label } from "recharts";
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

const unitEconomicsData = [
  { metric: "EBITDA", value: 15, fill: "#3366CC" }, // Blue
  { metric: "Cost of Goods Sold", value: 40, fill: "#1D3E53" }, // Yellow
  { metric: "Operations", value: 15, fill: "#2C74B3" }, // Green
  { metric: "Marketing", value: 20, fill: "#476D7C" }, // Orange
  { metric: "Logistics", value: 10, fill: "#77ABB7" }, // Dark blue
];

// Updated chartConfig for the chart's labels and colors
const chartConfig = {
  ebitda: { label: "EBITDA", color: "#3366CC" }, // Blue
  cogs: { label: "Cost of Goods Sold", color: "#FFCC00" }, // Yellow
  operations: { label: "Operations", color: "#2C74B3" }, // Green
  marketing: { label: "Marketing", color: "#FF9900" }, // Orange
  logistics: { label: "Logistics", color: "#003399" }, // Dark blue
} satisfies ChartConfig;

export function UnitEconomics() {
  const totalValue = React.useMemo(() => {
    return unitEconomicsData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white font-semibold tracking-wide">
          Unit Economics
        </CardTitle>
        <CardDescription className="text-white">
          Unit Economics Metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-white"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={unitEconomicsData}
              dataKey="value"
              nameKey="metric"
              innerRadius={50}
              outerRadius={100}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-2xl"
                      >
                        EBITDA
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-white">
          Trending up this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-white"></div>
      </CardFooter>
    </Card>
  );
}
