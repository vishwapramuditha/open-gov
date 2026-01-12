'use client';

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
import { ArrowRight, TrendingUp, Users, Building2, Clock } from "lucide-react";

import PollWidget from "@/components/PollWidget";
import LiveTicker from "@/components/LiveTicker";
import LiveDebtClock from "@/components/LiveDebtClock";
import { CountUp } from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
      <LiveTicker />
      <Navbar />

      {/* Enhanced Hero Section */}
      <header className="relative bg-gradient-to-b from-[#050510] to-black border-b border-gray-800 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero.png"
            alt="OpenGov Hero - Lotus Tower"
            fill
            className="object-cover object-center grayscale transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white animate-fade-in">
                Open<span className="text-lion-gold">Gov</span> Intelligence
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
                Real-time transparency portal for national economic data, development projects, and civic expenditure.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-lion-gold/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-lion-gold" />
                    <span className="text-xs text-gray-500 uppercase">Projects</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    <CountUp end={8} duration={1500} />
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-lion-gold/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-lion-gold" />
                    <span className="text-xs text-gray-500 uppercase">MPs Tracked</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    <CountUp end={225} duration={2000} />
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-lion-gold/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-lion-gold" />
                    <span className="text-xs text-gray-500 uppercase">Data Points</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    <CountUp end={1240} duration={2500} suffix="+" />
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-lion-gold/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-lion-gold" />
                    <span className="text-xs text-gray-500 uppercase">Live Updates</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">
                    <CountUp end={24} duration={1800} suffix="/7" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/tax-calculator">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Calculate Tax Impact <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/representatives">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View MPs
                </Button>
              </Link>
            </div>
          </div>

          {/* Last Updated Indicator */}
          <div className="mt-8 flex items-center gap-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live data • Last updated: {new Date().toLocaleTimeString()}</span>
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
