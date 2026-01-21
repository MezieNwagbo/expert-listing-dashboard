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
  height?: number | string;
  className?: string;
}

const SalesBarChart: React.FC<SalesBarChartProps> = ({
  data,
  className = "",
}) => {
  // Format Y-axis to show millions
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}m`;
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
              {entry.name}: ${(entry.value / 1000000).toFixed(2)}m
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="20%" // Space between month groups (larger = more space)
          barGap={2} // Space between bars within same month (smaller = closer together)
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
            fill="#4545FE"
            maxBarSize={40}
          />
          <Bar
            dataKey="productB"
            name="Product B"
            fill="#12B76A"
            maxBarSize={40}
          />
          <Bar
            dataKey="productC"
            name="Product C"
            fill="#F04438"
            maxBarSize={40}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;
