'use client';

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { MAJOR_PROJECTS } from "@/lib/data";
import { Search, Filter } from "lucide-react";

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMinistry, setSelectedMinistry] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");

    const ministries = ["All", ...Array.from(new Set(MAJOR_PROJECTS.map(p => p.ministry)))];
    const statuses = ["All", "In Progress", "Completed", "Planned", "Ongoing", "Stalled"];

    const filteredProjects = useMemo(() => {
        return MAJOR_PROJECTS.filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesMinistry = selectedMinistry === "All" || project.ministry === selectedMinistry;
            const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;

            return matchesSearch && matchesMinistry && matchesStatus;
        });
    }, [searchTerm, selectedMinistry, selectedStatus]);

    const activeCount = filteredProjects.filter(p => p.status === 'In Progress' || p.status === 'Ongoing').length;
    const totalBudget = filteredProjects.length; // Simply count for now, parsing "LKR X Billion" string is complex for mock

    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            {/* Header */}
            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Development Projects</h1>
                    <p className="opacity-60 max-w-2xl text-sm">
                        Monitor the progress of national infrastructure and development initiatives.
                    </p>

                    {/* Stats Row */}
                    <div className="flex gap-6 mt-6">
                        <div className="border-l-2 border-lion-gold pl-4">
                            <div className="text-2xl font-bold text-white">{filteredProjects.length}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Displaying</div>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-4">
                            <div className="text-2xl font-bold text-white">{activeCount}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Active Now</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls & Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Search & Filter Bar */}
                <div className="glass-panel p-4 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-20 z-40 backdrop-blur-xl bg-black/50">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-black/40 border border-gray-700 text-white text-sm rounded-lg pl-10 pr-4 py-2 w-full focus:border-lion-gold focus:ring-1 focus:ring-lion-gold outline-none"
                        />
                    </div>

                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <div className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-gray-700 rounded-lg">
                            <Filter size={14} className="text-gray-500" />
                            <select
                                value={selectedMinistry}
                                onChange={(e) => setSelectedMinistry(e.target.value)}
                                className="bg-transparent text-sm text-gray-300 outline-none cursor-pointer"
                            >
                                {ministries.map(m => <option key={m} value={m} className="bg-gray-900">{m}</option>)}
                            </select>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-gray-700 rounded-lg">
                            <div className={`w-2 h-2 rounded-full ${selectedStatus === 'All' ? 'bg-gray-500' : 'bg-lion-gold'}`}></div>
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="bg-transparent text-sm text-gray-300 outline-none cursor-pointer"
                            >
                                {statuses.map(s => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <p>No projects found matching your criteria.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
