'use client';

import { TIMELINE_EVENTS } from "@/lib/data";
import { Circle, TrendingDown, TrendingUp, Landmark, FileText } from "lucide-react";
import clsx from "clsx";

export default function HistoryTimeline() {
    const sortedEvents = [...TIMELINE_EVENTS].sort((a, b) => Number(b.year) - Number(a.year));

    const getIcon = (type: string) => {
        switch (type) {
            case 'debt': return <TrendingDown size={16} />;
            case 'development': return <TrendingUp size={16} />;
            case 'deal': return <FileText size={16} />;
            case 'crisis': return <Landmark size={16} />;
            default: return <Circle size={16} />;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'debt': return 'text-red-500 bg-red-900/20 border-red-500/50';
            case 'development': return 'text-green-500 bg-green-900/20 border-green-500/50';
            case 'deal': return 'text-blue-500 bg-blue-900/20 border-blue-500/50';
            case 'crisis': return 'text-orange-500 bg-orange-900/20 border-orange-500/50';
            default: return 'text-gray-500 bg-gray-800 border-gray-700';
        }
    };

    return (
        <div className="relative border-l border-gray-800 ml-4 md:ml-8 space-y-8 py-4">
            {sortedEvents.map((event, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                    {/* Connector Dot */}
                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 bg-black z-10 ${getColor(event.type).split(' ')[0].replace('text-', 'border-')}`}></div>

                    {/* Card */}
                    <div className={clsx("glass-panel p-6 border transition-all hover:bg-white/5", getColor(event.type).split(' ').pop())}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <span className="text-xl font-black text-white/50">{event.year}</span>
                            <span className={clsx("text-xs font-bold uppercase px-2 py-1 rounded flex items-center gap-1 w-fit", getColor(event.type))}>
                                {getIcon(event.type)} {event.type}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lion-gold transition-colors">{event.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
