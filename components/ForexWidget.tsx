import { FOREX_RATES } from "@/lib/data";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

export default function ForexWidget() {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                Daily Exchange Rates
            </h3>
            <div className="space-y-3">
                {FOREX_RATES.map((rate) => (
                    <div key={rate.currency} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-white bg-gray-800 px-2 py-0.5 rounded text-xs">{rate.currency}</span>
                            {rate.trend === 'up' && <TrendingUp size={14} className="text-red-500" />} {/* Rates going up means weaker LKR usually, red */}
                            {rate.trend === 'down' && <TrendingDown size={14} className="text-green-500" />}
                            {rate.trend === 'stable' && <Minus size={14} className="text-gray-500" />}
                        </div>
                        <div className="flex gap-4 text-gray-300 font-mono text-xs">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-500">BUY</span>
                                <span>{rate.buy}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-500">SELL</span>
                                <span>{rate.sell}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 text-[10px] text-right text-gray-600">
                Source: Central Bank of Sri Lanka
            </div>
        </div>
    );
}
