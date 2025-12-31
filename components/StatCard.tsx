import { ArrowDown, ArrowUp, Minus } from "lucide-react";

type StatProps = {
    label: string;
    value: string;
    trend: string;
    change: string;
};

export default function StatCard({ label, value, trend, change }: StatProps) {
    const isPositive = trend === 'up';
    const isNegative = trend === 'down';

    // Determine color based on context (Debt going down is good green, Inflation going down is good green usually, but let's keep it simple: generic Green for positive outcome, Red for negative)
    // Actually, usually in dashboard: green = good, red = bad.
    // Inflation down -> Green. GDP Up -> Green. Debt Down -> Green.
    // Let's rely on manual styling logic for now or generic colors based on visual trend arrows.

    // For simplicity in this mock: Green Arrow Up, Red Arrow Down.
    // BUT: Debt down is Good. GDP Down is Bad.
    // Let's assume standard financial colors: Up = Green, Down = Red (unless overridden).
    // Let's just use standard visual mapping for now: Up=Green, Down=Red.

    const colorClass = isPositive ? 'text-green-600' : 'text-red-600';
    const bgClass = isPositive ? 'bg-green-50' : 'bg-red-50';
    const Icon = isPositive ? ArrowUp : ArrowDown;

    return (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-xs uppercase font-semibold tracking-wider">{label}</h3>
            <div className="text-2xl font-bold text-deep-blue my-2">{value}</div>
            <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${bgClass} ${colorClass}`}>
                <Icon size={12} />
                {change}
            </div>
        </div>
    );
}
