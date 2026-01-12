'use client';

import { ArrowDown, ArrowUp } from "lucide-react";

type StatProps = {
    label: string;
    value: string;
    trend: string;
    change: string;
};

export default function StatCard({ label, value, trend, change }: StatProps) {
    const isPositive = trend === 'up';
    const isNegative = trend === 'down';

    const colorClass = isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-gray-400';
    const bgClass = isPositive ? 'bg-green-900/20' : isNegative ? 'bg-red-900/20' : 'bg-gray-800/20';
    const borderClass = isPositive ? 'border-green-800/30' : isNegative ? 'border-red-800/30' : 'border-gray-700/30';
    const Icon = isPositive ? ArrowUp : ArrowDown;

    return (
        <div className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1 animate-scale-in">
            <h3 className="text-gray-500 text-xs uppercase font-semibold tracking-wider mb-2">{label}</h3>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-lion-gold transition-colors">{value}</div>
            <div className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${bgClass} ${colorClass} ${borderClass}`}>
                <Icon size={12} className="animate-pulse" />
                {change}
            </div>
        </div>
    );
}
