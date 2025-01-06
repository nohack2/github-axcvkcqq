"use client";

import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export function RiskProfile() {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Risk Profile</h3>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="relative h-32">
          {/* Semi-circle gauge */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-r from-purple-600 to-transparent rounded-t-full" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 0, 0 0)' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">Moderate</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-300">
            Considering your moderate risk profile, your portfolio is performing well. You've successfully balanced growth opportunities with stability, aligning closely with your investment goals.
          </p>
          <p className="text-green-500 text-sm">
            Continue monitoring market trends and making informed decisions to maintain this positive momentum and ensure your portfolio stays on track.
          </p>
        </div>
      </div>
    </Card>
  );
}