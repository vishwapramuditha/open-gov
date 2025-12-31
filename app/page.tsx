import AiChat from "@/components/AiChat";
import DebtTracker from "@/components/DebtTracker";
import ProvincialMap from "@/components/ProvincialMap";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import NewsFeed from "@/components/NewsFeed";
import ForexWidget from "@/components/ForexWidget";
import GazetteList from "@/components/GazetteList";
import { ECONOMIC_STATS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PollWidget from "@/components/PollWidget";
import LiveTicker from "@/components/LiveTicker";
import LiveDebtClock from "@/components/LiveDebtClock";

export const metadata = {
  title: "OpenGov Sri Lanka | National Transparency Dashboard",
  description: "Track government spending, loans, and projects in Sri Lanka.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
      <LiveTicker />
      <Navbar />

      {/* Hero Section (Compact) */}
      <header className="relative bg-[#050510] border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero.png"
            alt="OpenGov Hero - Lotus Tower"
            fill
            className="object-cover object-center grayscale"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                Open<span className="text-lion-gold">Gov</span> Intelligence
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-xl">
                Real-time transparency portal for national economic data, development projects, and civic expenditure.
              </p>
            </div>

            <Link
              href="/tax-calculator"
              className="inline-flex items-center justify-center gap-2 bg-lion-gold hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-all text-sm"
            >
              Calculate Tax Contribution <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-6">

        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ECONOMIC_STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Column: Fast Data (25%) */}
          <div className="space-y-6">
            <ForexWidget />
            <GazetteList />
            <PollWidget />

            {/* Mini Ai Chat Callout (since full chat is heavy) */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Quick Query
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Ask about budget allocations or debt breakdown.
              </p>
              <AiChat />
            </div>
          </div>

          {/* Center Column: Visualizations (50%) */}
          <div className="lg:col-span-2 space-y-6">
            <LiveDebtClock />

            {/* Map Section */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-1 overflow-hidden">
              <ProvincialMap />
            </div>

            {/* Detailed Debt Breakdown */}
            <DebtTracker />
          </div>

          {/* Right Column: News & Updates (25%) */}
          <div className="h-full">
            <NewsFeed />
          </div>

        </div>
      </div>
    </main>
  );
}
