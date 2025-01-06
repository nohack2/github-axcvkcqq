import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  chart: "bar" | "circle";
  color: string;
}

export function MetricCard({ title, value, change, chart, color }: MetricCardProps) {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800 p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm text-gray-400 flex items-center">
          {title}
          <Info className="h-4 w-4 ml-2 text-gray-500" />
        </h3>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-green-400">{change} vs last month</div>
        </div>
        <div className="w-24 h-12">
          {/* Chart placeholder - implement actual chart component */}
        </div>
      </div>
    </Card>
  );
}