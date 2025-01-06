"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardMetrics } from "@/components/dashboard/metrics";
import { MarketTicker } from "@/components/dashboard/market-ticker";
import { EquityCurve } from "@/components/dashboard/equity-curve";
import { RiskProfile } from "@/components/dashboard/risk-profile";
import { TradeTags } from "@/components/dashboard/trade-tags";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          <DashboardHeader />
          <DashboardMetrics />
          <MarketTicker />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EquityCurve />
            </div>
            <div>
              <RiskProfile />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TradeTags title="Tags used in Trade Data" type="trade" />
            <TradeTags title="Tags used on Profit/Loss Data" type="pl" />
            <TradeTags title="Best Performing Symbols by P&L" type="performance" />
          </div>
        </div>
      </main>
    </div>
  );
}