"use client";

import { BarChart2, LineChart, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  text: string;
}

function SidebarLink({ href, icon: Icon, text }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
        isActive ? "bg-purple-600/20 text-purple-400" : "text-gray-400 hover:text-white hover:bg-gray-800"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <div className="w-60 bg-[#1a1a1a] border-r border-gray-800 p-4 flex flex-col">
      <div className="mb-8">
        <Image src="/logo.png" alt="AlphaTrade" width={150} height={40} />
      </div>
      <nav className="space-y-2 flex-1">
        <SidebarLink href="/dashboard" icon={BarChart2} text="Dashboard" />
        <SidebarLink href="/trades" icon={LineChart} text="Trades" />
        <SidebarLink href="/charting" icon={LineChart} text="Charting" />
        <SidebarLink href="/calendar" icon={Calendar} text="Calendar" />
        <SidebarLink href="/blog" icon={MessageSquare} text="Blog" />
      </nav>
      <div className="border-t border-gray-800 pt-4 mt-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-700" />
          <div>
            <div className="text-sm font-medium">Noor Ayob</div>
            <div className="text-xs text-gray-400">name@alphatrade.io</div>
          </div>
        </div>
      </div>
    </div>
  );
}