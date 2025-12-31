'use client';

import { LOAN_DATA, MAJOR_PROJECTS } from '@/lib/data';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function DebtTracker() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Loans Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h2 className="text-xl font-bold text-deep-blue flex items-center gap-2 mb-4">
                    <TrendingUp className="text-red-500" />
                    Major Loans Taken
                </h2>
                <div className="space-y-4">
                    {LOAN_DATA.map((loan, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                            <span className="font-medium text-gray-700">{loan.source}</span>
                            <span className="font-bold text-red-700">{loan.amount}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h2 className="text-xl font-bold text-deep-blue flex items-center gap-2 mb-4">
                    <ArrowUpRight className="text-green-600" />
                    Project Spending
                </h2>
                <div className="space-y-6">
                    {MAJOR_PROJECTS.map((project) => (
                        <div key={project.id}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-semibold text-gray-800">{project.name}</span>
                                <span className="text-gray-500">{project.status}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>{project.budget}</span>
                                <span>{project.progress}% Financial Progress</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
