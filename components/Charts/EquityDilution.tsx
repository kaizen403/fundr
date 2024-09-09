"use client";

import { Pie, PieChart, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Data for equity dilution
const equityData = [
  { name: "Aadit Palicha", value: 22.52, fill: "#D32F2F" }, // red
  { name: "Kaivalya Vohra", value: 18.8, fill: "#F44336" }, // dark red
  { name: "Nexus Ventures", value: 20.86, fill: "#2196F3" }, // blue
  { name: "Rocket Internet", value: 5.7, fill: "#FFC107" }, // yellow
  { name: "Y Combinator", value: 5.07, fill: "#FF5722" }, // orange
  { name: "Global Founders Capital", value: 2.33, fill: "#FF9800" }, // lighter orange
  { name: "GladeBooks Private Investors", value: 10.43, fill: "#9C27B0" }, // purple
  { name: "Oliver Jung", value: 3.63, fill: "#03A9F4" }, // light blue
  { name: "Lachy Groom", value: 3.1, fill: "#4CAF50" }, // green
  { name: "Contrary Capital", value: 3.06, fill: "#8BC34A" }, // light green
  { name: "Others", value: 4.5, fill: "#9E9E9E" }, // gray
];

export function EquityDilution() {
  return (
    <Card className="bg-gradient-to-b from-[#021526] to-[#050b2b] border-blue-900 border-opacity-45 rounded-lg shadow-lg p-6">
      <CardHeader className="text-center">
        <CardTitle className="text-white">Equity Dilution</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <PieChart width={350} height={350}>
          <Pie
            data={equityData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            label
          />
          <Tooltip />
        </PieChart>
      </CardContent>
      <div className="text-center text-sm text-white">
        <p>Total Equity Distribution</p>
        <p>Displaying ownership breakdown by percentage.</p>
      </div>
    </Card>
  );
}
