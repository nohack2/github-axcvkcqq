"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TradesTable } from "@/components/trades/trades-table";
import { TradesChart } from "@/components/trades/trades-chart";
import { TradesMetrics } from "@/components/trades/trades-metrics";
import { AddTradeDialog } from "@/components/trades/add-trade-dialog";
import { useState } from "react";

export default function TradesPage() {
  const [isAddTradeOpen, setIsAddTradeOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          <DashboardHeader onAddTrade={() => setIsAddTradeOpen(true)} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TradesChart />
            </div>
            <div>
              <TradesMetrics />
            </div>
          </div>
          <TradesTable />
          <AddTradeDialog 
            open={isAddTradeOpen} 
            onOpenChange={setIsAddTradeOpen}
          />
        </div>
      </main>
    </div>
  );
}