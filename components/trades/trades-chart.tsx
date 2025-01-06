"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan 1", value: 50000 },
  { date: "Jan 5", value: 55000 },
  { date: "Jan 10", value: 48000 },
  { date: "Jan 15", value: 62000 },
];

export function TradesChart() {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Drawdown Curve</h3>
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
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#ff6b6b"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}