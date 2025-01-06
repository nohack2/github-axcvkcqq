"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";

export default function Verify() {
  const { verifyCode, loading, error } = useAuth();
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(59);
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerify = async () => {
    if (value.length === 6) {
      await verifyCode(value);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <Card className="w-full max-w-md mx-4 bg-[#1a1a1a] border-gray-800">
        <CardHeader className="space-y-1">
          <Link 
            href="/signup" 
            className="flex items-center text-purple-400 hover:text-purple-300 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Enter verification code
          </CardTitle>
          <p className="text-center text-sm text-gray-400">
            Enter the 6-digit code we just sent to {email || '[email protected]'}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="flex justify-center py-4">
            <InputOTP
              value={value}
              onChange={setValue}
              maxLength={6}
              render={({ slots }) => (
                <InputOTPGroup className="gap-2">
                  {slots.map((slot, index) => (
                    <InputOTPSlot
                      key={index}
                      {...slot}
                      className="bg-[#2a2a2a] border-gray-800 text-white w-12 h-12"
                    />
                  ))}
                </InputOTPGroup>
              )}
            />
          </div>
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={handleVerify}
            disabled={loading || value.length !== 6}
          >
            {loading ? "Verifying..." : "Verify now"}
          </Button>
          <div className="text-center text-sm text-gray-400">
            {timer > 0 
              ? `Wait ${timer} seconds before requesting a new code`
              : "Request a new code"
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
}