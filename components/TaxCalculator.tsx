'use client';

import { useState, useEffect } from 'react';
import { BUDGET_ALLOCATIONS } from '@/lib/data';
import { calculateTax, formatCurrency } from '@/lib/taxUtils';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Calculator, Utensils, BookOpen, Ambulance, TrendingUp, AlertCircle } from 'lucide-react';

export default function TaxCalculator() {
    const [salary, setSalary] = useState<number | ''>('');
    const [estimatedTax, setEstimatedTax] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setSalary(val);
        setEstimatedTax(calculateTax(val));
    };

    const totalBudget = BUDGET_ALLOCATIONS.reduce((acc, item) => acc + item.value, 0);

    const taxBreakdown = BUDGET_ALLOCATIONS.map((item) => ({
        ...item,
        userContribution: estimatedTax ? (item.value / totalBudget) * estimatedTax : 0,
    }));

    // Impact Logic
    const impactItems = [
        { label: 'School Lunches', cost: 200, icon: Utensils, color: 'text-orange-400' },
        { label: 'School Textbooks', cost: 450, icon: BookOpen, color: 'text-blue-400' },
        { label: 'Medicine Doses', cost: 150, icon: Ambulance, color: 'text-green-400' },
    ];

    const effectiveRate = salary ? ((estimatedTax / Number(salary)) * 100).toFixed(1) : '0.0';

    return (
        <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-lion-gold/20 rounded-lg text-lion-gold">
                    <Calculator size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Tax Impact Calculator</h2>
                    <p className="text-gray-400 text-sm">
                        Based on 2024/2025 APIT Tables (0% - 36% Progressive Slabs).
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Inputs & Result */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Monthly Income (LKR)
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-500 font-mono">LKR</span>
                            <input
                                type="number"
                                value={salary}
                                onChange={handleSalaryChange}
                                placeholder="e.g. 150,000"
                                className="w-full bg-black/40 border border-gray-700 text-white text-lg rounded-xl pl-14 pr-4 py-3 focus:border-lion-gold focus:ring-1 focus:ring-lion-gold outline-none transition-all"
                            />
                        </div>
                        {salary && Number(salary) < 100000 && (
                            <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Tax Free Limit applies (Below 100k)
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 relative overflow-hidden col-span-2 md:col-span-1">
                            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Monthly Tax</p>
                            <p className="text-2xl font-mono font-bold text-lion-gold truncate">
                                {formatCurrency(estimatedTax)}
                            </p>
                            <div className="absolute top-4 right-4 opacity-20"><Calculator size={40} className="text-lion-gold" /></div>
                        </div>

                        <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 relative overflow-hidden col-span-2 md:col-span-1">
                            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Effective Rate</p>
                            <p className="text-2xl font-mono font-bold text-white">
                                {effectiveRate}<span className="text-sm text-gray-500">%</span>
                            </p>
                            <div className="absolute top-4 right-4 opacity-20"><TrendingUp size={40} className="text-blue-500" /></div>
                        </div>
                    </div>

                    {/* Impact Analysis */}
                    {estimatedTax > 0 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 border-t border-gray-800 pt-6">
                            <h4 className="text-sm font-bold text-white mb-4">Your Monthly Contribution Funds:</h4>
                            <div className="grid grid-cols-3 gap-3">
                                {impactItems.map((item) => (
                                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center group hover:bg-white/10 transition-colors">
                                        <item.icon size={20} className={`mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform`} />
                                        <div className="text-xl font-bold text-white">{(estimatedTax / item.cost).toFixed(0)}</div>
                                        <div className="text-[10px] text-gray-400 uppercase leading-tight">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Chart */}
                <div className="h-[400px] bg-black/20 rounded-xl p-4 border border-white/5 relative">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider absolute top-4 left-4 z-10">
                        Where your money goes
                    </h3>
                    {isClient && estimatedTax > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={taxBreakdown}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={2}
                                    dataKey="userContribution"
                                    stroke="none"
                                >
                                    {taxBreakdown.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#050510', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                                    itemStyle={{ fontSize: '12px' }}
                                    formatter={(value: any) => formatCurrency(Number(value))}
                                />
                                <Legend
                                    layout="vertical"
                                    verticalAlign="middle"
                                    align="right"
                                    wrapperStyle={{ fontSize: '10px', opacity: 0.8 }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-600 text-sm gap-4">
                            <div className="p-4 bg-white/5 rounded-full animate-pulse"><Calculator size={32} className="opacity-50" /></div>
                            <p>Enter an income above 100,000 LKR</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
