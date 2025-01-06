"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { occupations, timezones } from "@/lib/constants";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { SignUpData } from "@/lib/api/auth";

export default function SignUp() {
  const { signUp, loading, error } = useAuth();
  const [formData, setFormData] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    occupation: "",
    timezone: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(formData);
  };

  const handleChange = (field: keyof SignUpData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <Card className="w-full max-w-2xl mx-4 bg-[#1a1a1a] border-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-white">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="bg-[#2a2a2a] border-gray-800 text-white"
              />
              <Input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="bg-[#2a2a2a] border-gray-800 text-white"
              />
              <Input
                type="date"
                placeholder="Date of birth"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                className="bg-[#2a2a2a] border-gray-800 text-white"
              />
              <Select onValueChange={(value) => handleChange("gender", value)}>
                <SelectTrigger className="bg-[#2a2a2a] border-gray-800 text-white">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => handleChange("occupation", value)}>
                <SelectTrigger className="bg-[#2a2a2a] border-gray-800 text-white">
                  <SelectValue placeholder="Occupation" />
                </SelectTrigger>
                <SelectContent>
                  {occupations.map((occupation) => (
                    <SelectItem key={occupation} value={occupation.toLowerCase()}>
                      {occupation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => handleChange("timezone", value)}>
                <SelectTrigger className="bg-[#2a2a2a] border-gray-800 text-white">
                  <SelectValue placeholder="Timezone" />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((timezone) => (
                    <SelectItem key={timezone} value={timezone}>
                      {timezone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="bg-[#2a2a2a] border-gray-800 text-white"
              />
            </div>
            <div className="text-sm text-center text-gray-400">
              By creating account, you agree to{" "}
              <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                Privacy Policy
              </Link>
              .
            </div>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={loading}
              type="submit"
            >
              {loading ? "Creating account..." : "Continue"}
            </Button>
          </form>
          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/signin" className="text-purple-400 hover:text-purple-300">
              Log in here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}