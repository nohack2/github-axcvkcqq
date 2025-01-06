"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <Card className="w-full max-w-md mx-4 bg-[#1a1a1a] border-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-white">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-[#2a2a2a] border-gray-800 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              className="bg-[#2a2a2a] border-gray-800 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-gray-600 data-[state=checked]:bg-purple-600" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none text-gray-400"
              >
                Stay logged in
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Forgot password?
            </Link>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Sign In
          </Button>
          <div className="text-center text-sm text-gray-400">
            New user?{" "}
            <Link href="/signup" className="text-purple-400 hover:text-purple-300">
              Create an account here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}