import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SalesData {
  month: string;
  productA: number;
  productB: number;
  productC: number;
}

interface SalesBarChartProps {
  data: SalesData[];
  height?: number;
  className?: string;
}

const SalesBarChart: React.FC<SalesBarChartProps> = ({
  data,
  height = 400,
  className = "",
}) => {
  // Format Y-axis to show millions
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    }
    return value.toString();
  };

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ${(entry.value / 1000000).toFixed(2)}M
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: "#6b7280", fontSize: 14 }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{ fill: "#6b7280", fontSize: 14 }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
            domain={[0, 50000000]}
            ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          />
          <Bar
            dataKey="productA"
            name="Product A"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="productB"
            name="Product B"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="productC"
            name="Product C"
            fill="#ef4444"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;
