"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// ARR and MoM Growth Data
const arrChartData = [
  { month: "Sep-16", ARR: 5.7, MoM: 8.5 },
  { month: "Oct-16", ARR: 6.2, MoM: 8.5 },
  { month: "Nov-16", ARR: 6.7, MoM: 8.4 },
  { month: "Dec-16", ARR: 7.2, MoM: 7.1 },
  { month: "Jan-17", ARR: 7.9, MoM: 11.1 },
  { month: "Feb-17", ARR: 8.8, MoM: 10.5 },
  { month: "Mar-17", ARR: 10.1, MoM: 14.7 },
  { month: "Apr-17", ARR: 11.3, MoM: 12.1 },
  { month: "May-17", ARR: 12.4, MoM: 10.3 },
  { month: "Jun-17", ARR: 13.7, MoM: 10.1 },
  { month: "Jul-17", ARR: 15.1, MoM: 10.0 },
  { month: "Aug-17", ARR: 16.4, MoM: 8.8 },
];

// Chart Configuration
const chartConfig = {
  ARR: {
    label: "ARR",
    color: "#205295", // Blue for ARR line
  },
  MoM: {
    label: "MoM Growth",
    color: "#2C74B3", // Light Blue for MoM growth line
  },
};

export function ARRChart() {
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Card className="bg-gradient-to-b border-blue-900 border-opacity-45 bg-[#021526] rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-white">ARR & MoM Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          width={800}
          height={300}
          data={arrChartData}
          margin={{
            left: 12,
            right: 12,
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} stroke="#444" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 6)}
            stroke="#AAA"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}M`}
            stroke="#AAA"
          />
          <Tooltip />
          <Area
            dataKey="ARR"
            type="monotone"
            fill={chartConfig.ARR.color}
            stroke={chartConfig.ARR.color}
            fillOpacity={0.4}
            stackId="a"
            dot={{ stroke: chartConfig.ARR.color, strokeWidth: 3 }}
          />
          <Area
            dataKey="MoM"
            type="monotone"
            fill={chartConfig.MoM.color}
            stroke={chartConfig.MoM.color}
            fillOpacity={0.2}
            stackId="a"
            dot={{ stroke: chartConfig.MoM.color, strokeWidth: 3 }}
          />
        </AreaChart>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none text-white">
              Trending up by 8.8% <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground text-white">
              Data from Sep 2016 to Aug 2017
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
