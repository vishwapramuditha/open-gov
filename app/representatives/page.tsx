'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import RepresentativeCard from "@/components/RepresentativeCard";
import { MPS_DATA } from "@/lib/data";
import { Search, MapPin } from "lucide-react";

export default function RepresentativesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("All");

    const districts = ["All", ...Array.from(new Set(MPS_DATA.map(mp => mp.district)))];

    const filteredMPs = MPS_DATA.filter(mp => {
        const matchesSearch = mp.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDistrict = selectedDistrict === "All" || mp.district === selectedDistrict;
        return matchesSearch && matchesDistrict;
    });

    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">MP Watch</h1>
                    <p className="opacity-60 max-w-2xl text-sm">
                        Hold your representatives accountable. Track attendance, voting records, and budget utilization.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Find your MP..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg pl-10 pr-4 py-2 w-full focus:border-lion-gold outline-none"
                        />
                    </div>

                    <div className="relative w-full md:w-64">
                        <MapPin className="absolute left-3 top-2.5 text-gray-500" size={16} />
                        <select
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            className="bg-gray-900 border border-gray-800 text-white text-sm rounded-lg pl-10 pr-4 py-2 w-full focus:border-lion-gold outline-none cursor-pointer appearance-none"
                        >
                            {districts.map(d => <option key={d} value={d} className="bg-gray-900">{d}</option>)}
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMPs.map((mp) => (
                        <RepresentativeCard key={mp.id} mp={mp} />
                    ))}
                </div>

                {filteredMPs.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <p>No representatives found.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
