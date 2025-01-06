"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface DashboardHeaderProps {
  onAddTrade?: () => void;
}

export function DashboardHeader({ onAddTrade }: DashboardHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold">Starting balance: $14,550.00</h2>
        <span className="text-gray-400">2024.02.01 - 2024.11.13</span>
      </div>
      <div className="flex items-center space-x-4">
        <select className="bg-[#1a1a1a] border border-gray-800 rounded-md px-3 py-2">
          <option>Noor Ayob (All)</option>
        </select>
        <Button 
          className="bg-purple-600 hover:bg-purple-700"
          onClick={onAddTrade}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add trade
        </Button>
      </div>
    </div>
  );
}