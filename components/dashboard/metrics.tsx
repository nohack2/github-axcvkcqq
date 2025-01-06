"use client";

import { Card } from "@/components/ui/card";
import { MetricCard } from "./metric-card";

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Net Profit & Loss"
        value="$74,928.05"
        change="+16%"
        chart="bar"
        color="orange"
      />
      <MetricCard
        title="Average Win"
        value="$4,731.10"
        change="+16%"
        chart="bar"
        color="green"
      />
      <MetricCard
        title="Average Loss"
        value="$1,928.05"
        change="+16%"
        chart="bar"
        color="purple"
      />
      <MetricCard
        title="Profit Factor"
        value="1.4"
        change="+16%"
        chart="circle"
        color="blue"
      />
    </div>
  );
}