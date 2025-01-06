"use client";

import { Card } from "@/components/ui/card";

export function TradesMetrics() {
  const metrics = [
    { label: "Largest Winner", value: "$7,482.40", trend: "positive" },
    { label: "Largest Loser", value: "$2,411.09", trend: "negative" },
    { label: "Win Rate", value: "67%", trend: "positive" },
  ];

  return (
    <Card className="bg-[#1a1a1a] border-gray-800 p-4">
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex justify-between items-center">
            <span className="text-gray-400">{metric.label}</span>
            <span className={metric.trend === "positive" ? "text-green-500" : "text-red-500"}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}