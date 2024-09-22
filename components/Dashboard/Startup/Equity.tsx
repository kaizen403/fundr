"use client";

import { useRecoilValue } from "recoil";
import { selectedSidebar2OptionState } from "@/contexts/sidebar2Atom";
import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

interface EquityHolder {
  name: string;
  percentage: number;
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

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
        {`${value.toFixed(2)}%`}
      </text>
    </g>
  );
};

const Equity: React.FC = () => {
  const selectedOption = useRecoilValue(selectedSidebar2OptionState);
  const [equityHolders, setEquityHolders] = useState<EquityHolder[]>([
    { name: "", percentage: 0 },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNameChange = (index: number, name: string) => {
    const newEquityHolders = [...equityHolders];
    newEquityHolders[index].name = name;
    setEquityHolders(newEquityHolders);
  };

  const handlePercentageChange = (index: number, percentage: string) => {
    const newEquityHolders = [...equityHolders];
    newEquityHolders[index].percentage = Number(percentage);
    setEquityHolders(newEquityHolders);
  };

  const addEquityHolder = () => {
    setEquityHolders([...equityHolders, { name: "", percentage: 0 }]);
  };

  const removeEquityHolder = (index: number) => {
    const newEquityHolders = equityHolders.filter((_, i) => i !== index);
    setEquityHolders(newEquityHolders);
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted equity distribution:", equityHolders);
    // Here you would typically send this data to your backend
  };

  const totalPercentage = useMemo(() => {
    return equityHolders.reduce((sum, holder) => sum + holder.percentage, 0);
  }, [equityHolders]);

  if (selectedOption !== "Equity") return null;

  return (
    <div className="bg-gradient-to-b from-[#021526] to-[#050b2b] text-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Equity Distribution</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            {equityHolders.map((holder, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={holder.name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  placeholder="Name"
                  className="flex-1 bg-[#0a1a2f] border-[#1c2f4a] text-white"
                />
                <Input
                  type="number"
                  value={holder.percentage}
                  onChange={(e) =>
                    handlePercentageChange(index, e.target.value)
                  }
                  placeholder="Percentage"
                  min="0"
                  max="100"
                  step="0.01"
                  className="w-24 bg-[#0a1a2f] border-[#1c2f4a] text-white"
                />
                {index > 0 && (
                  <Button
                    type="button"
                    onClick={() => removeEquityHolder(index)}
                    variant="destructive"
                    size="icon"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              onClick={addEquityHolder}
              className="w-full bg-blue-900 hover:bg-blue-950"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Equity Holder
            </Button>
            <div className="text-right text-sm text-gray-400">
              Total: {totalPercentage.toFixed(2)}%
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-950"
              disabled={totalPercentage !== 100}
            >
              Submit
            </Button>
            {totalPercentage !== 100 && (
              <p className="text-red-500 text-sm">
                Total percentage must equal 100% to submit.
              </p>
            )}
          </form>
        </div>
        <div className="flex-1">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={equityHolders.filter((holder) => holder.percentage > 0)}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                  onMouseEnter={onPieEnter}
                >
                  {equityHolders.map((_, index) => (
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
    </div>
  );
};

export default Equity;
