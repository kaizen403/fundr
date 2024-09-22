"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedSidebar2OptionState } from "@/contexts/sidebar2Atom";
import { ChevronRight, Circle } from "lucide-react";

const data = [
  { name: "Founder", value: 60 },
  { name: "Investors", value: 30 },
  { name: "Employee Pool", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin((-midAngle * Math.PI) / 180);
  const cos = Math.cos((-midAngle * Math.PI) / 180);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >{`${payload.name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${value} (${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Home: React.FC = () => {
  const selectedOption = useRecoilValue(selectedSidebar2OptionState);
  const [activeIndex, setActiveIndex] = useState(0);

  if (selectedOption !== "Home") return null;

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const tasks = [
    {
      title: "Complete basic company profile",
      description: "Fill in essential information about your company.",
    },
    {
      title: "Complete equity shareholders list",
      description: "Add and manage your company's equity shareholders.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] text-white p-8 w-full rounded-lg shadow-lg max-h-5xl max-w-6xl mx-auto border border-[#03346E] border-opacity-50">
      <h1 className="text-3xl font-bold text-white mb-8">Welcome, Rishi</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-4">
            <svg
              className="w-8 h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            Start raising
          </h2>
          <p className="text-gray-500 mb-6">
            Create a round or RUV, invite investors, and close quickly.
          </p>
          <div className="space-y-4">
            <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
              Get started
            </Button>
            <Button
              variant="ghost"
              className="bg-gray-800 hover:bg-gray-700 w-full"
            >
              View FAQs
            </Button>
          </div>
        </div>

        <div className="flex-1 mt-[-13px] p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-200">
              Equity management with ease
            </h3>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Active
            </span>
          </div>

          <div className="h-64">
            <ResponsiveContainer className="" width="100%" height="100%">
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Your tasks (2)
        </h2>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#0a1a2f] p-4 rounded-lg"
            >
              <div className="flex items-center">
                <Circle className="w-5 h-5 mr-3 text-gray-400" />
                <div>
                  <h3 className="text-lg font-medium text-gray-200">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-400">{task.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
