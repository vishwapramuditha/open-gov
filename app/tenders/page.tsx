'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { TENDERS } from "@/lib/data";
import { FileText, Download, Clock, Search, Filter } from "lucide-react";
import clsx from "clsx";

export default function TendersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState<'ALL' | 'OPEN' | 'CLOSED'>('ALL');

    const filteredTenders = TENDERS.filter(tender => {
        const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tender.id.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeTab === 'OPEN') return matchesSearch && (tender.status === 'Open' || tender.status === 'Evaluation');
        if (activeTab === 'CLOSED') return matchesSearch && tender.status === 'Closed';
        return matchesSearch;
    });

    // Mock functionality to calculate "Days Left" based on deadline string
    const getDaysLeft = (dateString: string) => {
        // Just a mock display helper, assuming generic future dates in real scenarios
        // For v1 data, some might be in past.
        return Math.floor(Math.random() * 14) + 2; // Mock 2-16 days left
    };

    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Transparency Hub</h1>
                    <p className="opacity-60 max-w-2xl text-sm">
                        Open Government Procurement (OGP). Access all public tender notices and awards.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                    {/* Tabs */}
                    <div className="flex bg-gray-900 p-1 rounded-lg border border-gray-800">
                        <button
                            onClick={() => setActiveTab('ALL')}
                            className={clsx("px-4 py-1.5 text-xs font-bold rounded transition-all", activeTab === 'ALL' ? "bg-gray-700 text-white shadow" : "text-gray-500 hover:text-gray-300")}
                        >
                            ALL TENDERS
                        </button>
                        <button
                            onClick={() => setActiveTab('OPEN')}
                            className={clsx("px-4 py-1.5 text-xs font-bold rounded transition-all", activeTab === 'OPEN' ? "bg-green-900/50 text-green-400 shadow" : "text-gray-500 hover:text-gray-300")}
                        >
                            ACTIVE
                        </button>
                        <button
                            onClick={() => setActiveTab('CLOSED')}
                            className={clsx("px-4 py-1.5 text-xs font-bold rounded transition-all", activeTab === 'CLOSED' ? "bg-red-900/50 text-red-400 shadow" : "text-gray-500 hover:text-gray-300")}
                        >
                            CLOSED
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-2.5 text-gray-600" size={14} />
                        <input
                            type="text"
                            placeholder="Search by ID or Keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-900 border border-gray-800 text-gray-200 text-xs rounded-lg pl-9 pr-4 py-2 w-full focus:border-gray-600 outline-none"
                        />
                    </div>
                </div>

                <div className="glass-panel overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-gray-500 font-semibold bg-white/5">
                                    <th className="p-4">Reference ID</th>
                                    <th className="p-4">Project Title</th>
                                    <th className="p-4">Ministry</th>
                                    <th className="p-4">Closing Date</th>
                                    <th className="p-4">Est. Value</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                {filteredTenders.map((tender) => (
                                    <tr key={tender.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4 font-mono text-gray-500 text-xs">{tender.id}</td>
                                        <td className="p-4 font-medium text-gray-200 group-hover:text-white">{tender.title}</td>
                                        <td className="p-4 text-gray-500 text-xs">{tender.ministry}</td>
                                        <td className="p-4 text-gray-400">
                                            {tender.deadline}
                                            {tender.status === 'Open' && (
                                                <div className="text-[10px] text-orange-400 flex items-center gap-1 mt-1 font-bold">
                                                    <Clock size={10} /> {getDaysLeft(tender.deadline)} Days Left
                                                </div>
                                            )}
                                        </td>
                                        <td className="p-4 font-semibold text-gray-300">{tender.value}</td>
                                        <td className="p-4">
                                            <span className={clsx("px-2 py-1 rounded text-[10px] font-bold uppercase", {
                                                "bg-green-400/10 text-green-400 border border-green-400/20": tender.status === 'Open',
                                                "bg-red-400/10 text-red-400 border border-red-400/20": tender.status === 'Closed',
                                                "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20": tender.status === 'Evaluation',
                                            })}>
                                                {tender.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="text-lion-gold hover:text-white transition-colors flex items-center justify-end gap-2 w-full opacity-70 group-hover:opacity-100">
                                                <Download size={16} /> <span className="hidden sm:inline text-xs font-bold">PDF</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {filteredTenders.length === 0 && (
                    <div className="p-20 text-center text-gray-600">
                        <FileText className="mx-auto mb-4 opacity-20" size={64} />
                        <p>No tenders found matching your filter.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
