"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";

interface AddTradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddTradeDialog({ open, onOpenChange }: AddTradeDialogProps) {
  const [step, setStep] = useState<"select-broker" | "broker-details">("select-broker");
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);

  const brokers = [
    { id: "binance", name: "Binance" },
    { id: "bybit", name: "ByBit" },
  ];

  const handleBrokerSelect = (broker: string) => {
    setSelectedBroker(broker);
    setStep("broker-details");
  };

  const handleBack = () => {
    setStep("select-broker");
    setSelectedBroker(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a1a] border-gray-800 text-white sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            {step === "broker-details" && (
              <button onClick={handleBack} className="text-purple-400 hover:text-purple-300 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </button>
            )}
            <DialogTitle className="text-2xl font-bold">
              {step === "select-broker" ? "Connect new broker" : `Linking ${selectedBroker}`}
            </DialogTitle>
            <button 
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        {step === "select-broker" ? (
          <div className="space-y-4 pt-4">
            <p className="text-gray-400">Please select the Broker you want to add.</p>
            {brokers.map((broker) => (
              <Button
                key={broker.id}
                variant="outline"
                className="w-full justify-start text-left bg-[#2a2a2a] border-gray-800 hover:bg-gray-800"
                onClick={() => handleBrokerSelect(broker.name)}
              >
                {broker.name}
              </Button>
            ))}
          </div>
        ) : (
          <div className="space-y-4 pt-4">
            <p className="text-gray-400">Please select the date if you don't want to import all data.</p>
            <Input
              placeholder="Account Name"
              className="bg-[#2a2a2a] border-gray-800 text-white"
            />
            <Input
              type="date"
              placeholder="Start Date"
              className="bg-[#2a2a2a] border-gray-800 text-white"
            />
            <Input
              placeholder="Binance API Key"
              className="bg-[#2a2a2a] border-gray-800 text-white"
            />
            <Input
              type="password"
              placeholder="Binance API Secret"
              className="bg-[#2a2a2a] border-gray-800 text-white"
            />
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-purple-600 text-white hover:bg-purple-600/20"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}