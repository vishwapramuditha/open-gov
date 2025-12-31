'use client';

import { useState, useEffect } from 'react';
import { Clock, TrendingUp } from 'lucide-react';

export default function LiveDebtClock() {
    // Mock starting debt: 102 Billion USD -> converted to approx LKR for dramatic effect
    // Let's use LKR for high numbers. 33 Trillion LKR.
    const STARTING_DEBT = 33000500100000;
    const [debt, setDebt] = useState(STARTING_DEBT);

    useEffect(() => {
        // Increment by ~150,000 LKR every second (mock interest)
        const interval = setInterval(() => {
            setDebt((prev) => prev + 150000 + Math.floor(Math.random() * 50000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-500/30 rounded-xl p-6 shadow-2xl relative overflow-hidden group hover:border-red-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={100} className="text-red-500" />
            </div>

            <div className="flex items-center gap-2 mb-2">
                <div className="bg-red-500/20 text-red-500 p-1.5 rounded-lg animate-pulse">
                    <Clock size={20} />
                </div>
                <h3 className="text-red-100 font-bold uppercase tracking-widest text-sm">
                    Total National Debt (Live)
                </h3>
            </div>

            <div className="font-mono text-4xl md:text-5xl font-bold text-white tracking-tighter my-4 tabular-nums">
                LKR {debt.toLocaleString()}
            </div>

            <div className="flex justify-between items-end">
                <p className="text-xs text-red-200/60 max-w-[60%]">
                    Estimated interest accumulation based on current bond yields.
                </p>
                <div className="text-right">
                    <span className="block text-[10px] text-gray-500 uppercase">Per Capita Debt</span>
                    <span className="text-lg font-mono text-gray-300">LKR 1.5M</span>
                </div>
            </div>
        </div>
    );
}
