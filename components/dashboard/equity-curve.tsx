"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "11 Jan", value: 45000 },
  { date: "12 Jan", value: 52000 },
  { date: "13 Jan", value: 49000 },
  { date: "12 Jan", value: 85000 },
  { date: "11 Jan", value: 56000 },
  { date: "10 Jan", value: 76049.55 },
  { date: "12 Jan", value: 45000 },
  { date: "13 Jan", value: 89000 },
  { date: "14 Jan", value: 65000 },
];

export function EquityCurve() {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Equity Curve</h3>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip 
              contentStyle={{ 
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '4px'
              }}
              labelStyle={{ color: '#fff' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}