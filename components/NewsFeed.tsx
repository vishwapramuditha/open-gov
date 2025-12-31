import { NEWS_ITEMS } from "@/lib/data";
import { Clock } from "lucide-react";

export default function NewsFeed() {
    return (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 h-full">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide">Latest Updates</h3>
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
            </div>

            <div className="space-y-6">
                {NEWS_ITEMS.map((news) => (
                    <div key={news.id} className="border-l-2 border-gray-800 pl-4 hover:border-lion-gold transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] uppercase font-bold text-lion-gold bg-lion-gold/10 px-1.5 rounded">
                                {news.category}
                            </span>
                            <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                <Clock size={10} /> {news.date}
                            </span>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-200 leading-tight mb-1 hover:text-white cursor-pointer">
                            {news.title}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2">
                            {news.summary}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
