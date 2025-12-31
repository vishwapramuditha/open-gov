'use client';

import { NEWS_ITEMS } from "@/lib/data";

export default function LiveTicker() {
    return (
        <div className="bg-lion-gold text-black py-2 overflow-hidden relative flex items-center z-40 border-b border-yellow-600">
            <div className="bg-lion-gold px-4 font-black uppercase text-xs tracking-widest z-10 shadow-[5px_0_10px_rgba(212,175,55,1)]">
                BREAKING
            </div>

            <div className="whitespace-nowrap animate-marquee flex gap-8 items-center">
                {/* Duplicate list for seamless loop */}
                {[...NEWS_ITEMS, ...NEWS_ITEMS, ...NEWS_ITEMS].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/50"></span>
                        <span className="uppercase font-bold opacity-70 text-xs">{item.category}:</span>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
        </div>
    );
}
