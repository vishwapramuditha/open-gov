'use client';

import { useState, useEffect } from 'react';
import { BUDGET_ALLOCATIONS } from '@/lib/data';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Calculator, Utensils, BookOpen, Ambulance } from 'lucide-react';

export default function TaxCalculator() {
    const [salary, setSalary] = useState<number | ''>('');
    const [estimatedTax, setEstimatedTax] = useState<number | ''>('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Simplified tax calculation (Mock logic)
    const calculateTax = (monthlySalary: number) => {
        if (monthlySalary <= 100000) return 0;
        return (monthlySalary - 100000) * 0.06;
    };

    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setSalary(val);
        setEstimatedTax(calculateTax(val));
    };

    const totalBudget = BUDGET_ALLOCATIONS.reduce((acc, item) => acc + item.value, 0);

    const taxBreakdown = BUDGET_ALLOCATIONS.map((item) => ({
        ...item,
        userContribution: estimatedTax ? (item.value / totalBudget) * (estimatedTax as number) : 0,
    }));

    // Impact Logic
    const taxAmount = typeof estimatedTax === 'number' ? estimatedTax : 0;
    const impactItems = [
        { label: 'School Lunches', cost: 200, icon: Utensils, color: 'text-orange-400' },
        { label: 'School Textbooks', cost: 450, icon: BookOpen, color: 'text-blue-400' },
        { label: 'Basic Meds (Doses)', cost: 150, icon: Ambulance, color: 'text-green-400' },
    ];

    return (
        <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-lion-gold/20 rounded-lg text-lion-gold">
                    <Calculator size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Tax Impact Calculator</h2>
                    <p className="text-gray-400 text-sm">
                        See exactly how your contribution funds public services.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Inputs & Result */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Monthly Salary (LKR)
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-500 font-mono">LKR</span>
                            <input
                                type="number"
                                value={salary}
                                onChange={handleSalaryChange}
                                placeholder="e.g. 150000"
                                className="w-full bg-black/40 border border-gray-700 text-white text-lg rounded-xl pl-14 pr-4 py-3 focus:border-lion-gold focus:ring-1 focus:ring-lion-gold outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Calculator size={80} className="text-white" />
                        </div>
                        <p className="text-sm text-gray-400 mb-1">Estimated Monthly Tax</p>
                        <p className="text-3xl font-mono font-bold text-lion-gold">
                            {estimatedTax ? `LKR ${estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : 'LKR 0'}
                        </p>
                        {taxAmount > 0 && <p className="text-xs text-gray-600 mt-2">Based on 2024 simplified brackets</p>}
                    </div>

                    {/* Impact Analysis */}
                    {taxAmount > 0 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <h4 className="text-sm font-bold text-white mb-3">Your Contribution Could Fund:</h4>
                            <div className="grid grid-cols-3 gap-3">
                                {impactItems.map((item) => (
                                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                                        <item.icon size={20} className={`mx-auto mb-2 ${item.color}`} />
                                        <div className="text-xl font-bold text-white">{(taxAmount / item.cost).toFixed(0)}</div>
                                        <div className="text-[10px] text-gray-400 uppercase leading-tight">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Chart */}
                <div className="h-[350px] bg-black/20 rounded-xl p-4 border border-white/5">
                    {isClient && taxAmount > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={taxBreakdown}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={3}
                                    dataKey="userContribution"
                                    stroke="none"
                                >
                                    {taxBreakdown.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff' }}
                                    formatter={(value: any) => `LKR ${Number(value).toFixed(2)}`}
                                />
                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-600 text-sm gap-4">
                            <div className="p-4 bg-white/5 rounded-full"><Calculator size={32} className="opacity-50" /></div>
                            <p>Enter a salary &gt; 100,000 LKR to visualize allocation</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
