import { GAZETTES } from "@/lib/data";
import { FileText } from "lucide-react";

export default function GazetteList() {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg mt-6">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                Official Gazettes
            </h3>
            <div className="space-y-4">
                {GAZETTES.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                            <span>{item.id}</span>
                            <span>{item.date}</span>
                        </div>
                        <div className="flex gap-2 items-start">
                            <FileText size={16} className="text-lion-gold shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 py-2 text-xs font-medium text-gray-500 hover:text-white border border-gray-800 hover:border-gray-600 rounded transition-colors">
                View All Gazettes
            </button>
        </div>
    );
}
