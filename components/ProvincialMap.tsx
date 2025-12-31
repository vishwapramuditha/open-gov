'use client';

import { useState } from 'react';
import { PROVINCIAL_DATA } from '@/lib/data';

// Simplified coordinate mapping for provinces (x, y percentages)
const PROVINCE_COORDS: Record<string, { x: number; y: number }> = {
    'NP': { x: 50, y: 15 },
    'NC': { x: 50, y: 35 },
    'NW': { x: 30, y: 40 },
    'EP': { x: 75, y: 45 },
    'CP': { x: 50, y: 55 },
    'WP': { x: 25, y: 65 },
    'SG': { x: 40, y: 70 },
    'UP': { x: 65, y: 65 },
    'SP': { x: 50, y: 85 },
};

export default function ProvincialMap() {
    const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

    const activeData = hoveredProvince
        ? PROVINCIAL_DATA.find(p => p.id === hoveredProvince)
        : null;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-deep-blue mb-2">Provincial Allocations</h2>
            <p className="text-sm text-gray-500 mb-6">Hover over a region to see budget details</p>

            <div className="relative w-full h-[400px] bg-blue-50/30 rounded-xl border border-dashed border-gray-200">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl filter">
                    {/* Connecting Lines for visual style */}
                    <line x1="50" y1="15" x2="50" y2="35" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="50" y1="35" x2="50" y2="55" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="50" y1="35" x2="30" y2="40" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="50" y1="35" x2="75" y2="45" stroke="#cbd5e1" strokeWidth="0.5" />

                    {PROVINCIAL_DATA.map((prov) => {
                        const coords = PROVINCE_COORDS[prov.id];
                        if (!coords) return null;

                        const isHovered = hoveredProvince === prov.id;

                        return (
                            <g
                                key={prov.id}
                                onMouseEnter={() => setHoveredProvince(prov.id)}
                                onMouseLeave={() => setHoveredProvince(null)}
                                className="cursor-pointer transition-all duration-300"
                            >
                                <circle
                                    cx={coords.x}
                                    cy={coords.y}
                                    r={isHovered ? 6 : 4}
                                    fill={isHovered ? '#D4AF37' : '#002147'}
                                    className="transition-all duration-300"
                                />
                                <text
                                    x={coords.x}
                                    y={coords.y + 8}
                                    textAnchor="middle"
                                    fontSize="3"
                                    fill="#475569"
                                    fontWeight="bold"
                                >
                                    {prov.id}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {activeData && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-lion-gold animate-in fade-in slide-in-from-bottom-2">
                        <h3 className="font-bold text-deep-blue text-lg">{activeData.name}</h3>
                        <div className="text-2xl font-bold text-lion-gold">LKR {activeData.budget} Bn</div>
                        <p className="text-xs text-gray-500">Allocated Budget 2024</p>
                    </div>
                )}
            </div>
        </div>
    );
}
