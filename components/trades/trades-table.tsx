"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const trades = [
  {
    id: 1,
    date: "2024-02-10",
    symbol: "BTCUSDT",
    type: "LONG",
    entry: 48000,
    exit: 49200,
    sl: 47500,
    tp: 49500,
    size: "0.5",
    fees: 2.50,
    profit: 1200,
    tags: ["GAP UP", "REVERSAL"],
  },
  // Add more mock data
];

export function TradesTable() {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-800">
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Symbol</TableHead>
            <TableHead className="text-gray-400">Type</TableHead>
            <TableHead className="text-gray-400">Entry</TableHead>
            <TableHead className="text-gray-400">Exit</TableHead>
            <TableHead className="text-gray-400">SL</TableHead>
            <TableHead className="text-gray-400">TP</TableHead>
            <TableHead className="text-gray-400">Size</TableHead>
            <TableHead className="text-gray-400">Fees</TableHead>
            <TableHead className="text-gray-400">P/L</TableHead>
            <TableHead className="text-gray-400">Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id} className="border-gray-800">
              <TableCell>{trade.date}</TableCell>
              <TableCell>{trade.symbol}</TableCell>
              <TableCell>
                <span className={trade.type === "LONG" ? "text-green-500" : "text-red-500"}>
                  {trade.type}
                </span>
              </TableCell>
              <TableCell>${trade.entry}</TableCell>
              <TableCell>${trade.exit}</TableCell>
              <TableCell>${trade.sl}</TableCell>
              <TableCell>${trade.tp}</TableCell>
              <TableCell>{trade.size}</TableCell>
              <TableCell>${trade.fees}</TableCell>
              <TableCell className={trade.profit > 0 ? "text-green-500" : "text-red-500"}>
                ${trade.profit}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {trade.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}