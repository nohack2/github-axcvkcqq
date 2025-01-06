interface TradeTagsProps {
  title: string;
  type: "trade" | "pl" | "performance";
}

export function TradeTags({ title, type }: TradeTagsProps) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      {type === "trade" && (
        <div className="space-y-2">
          {["GAP UP", "REVERSAL", "RISING WEDGE", "BREAKOUT", "REVERSAL 2", "EARNING WINNER", "POSITIVE NEWS"].map((tag) => (
            <div key={tag} className="bg-purple-600/20 text-purple-400 px-3 py-1.5 rounded-full text-sm">
              {tag}
            </div>
          ))}
        </div>
      )}
      {type === "pl" && (
        <div className="space-y-2">
          {["HEAD & SHOULDERS", "SFP", "RISING WEDGE"].map((tag) => (
            <div key={tag} className="bg-green-600/20 text-green-400 px-3 py-1.5 rounded-full text-sm">
              {tag}
            </div>
          ))}
        </div>
      )}
      {type === "performance" && (
        <div className="h-48">
          {/* Implement bar chart for performance */}
        </div>
      )}
    </div>
  );
}