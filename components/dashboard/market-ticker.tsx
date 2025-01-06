"use client";

export function MarketTicker() {
  const tickers = [
    { symbol: "FTX/USD", price: "172.00", change: "-0.26%" },
    { symbol: "S&P500", price: "+12.04", change: "+0.24%" },
    { symbol: "Nasdaq 100", price: "+11", change: "+0.1%" },
    { symbol: "DAX", price: "-21", change: "-0.11%" },
    { symbol: "HSI", price: "+4", change: "+0.05%" }
  ];

  return (
    <div className="flex space-x-6 overflow-x-auto py-2 text-sm">
      {tickers.map((ticker) => (
        <div key={ticker.symbol} className="flex items-center space-x-2">
          <span className="text-gray-400">{ticker.symbol}</span>
          <span>{ticker.price}</span>
          <span className={ticker.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
            {ticker.change}
          </span>
        </div>
      ))}
    </div>
  );
}