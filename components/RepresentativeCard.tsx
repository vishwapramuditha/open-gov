'use client';

import { User, CheckCircle, XCircle, MinusCircle } from "lucide-react";
import clsx from "clsx";

type MPProps = {
    id: number;
    name: string;
    district: string;
    party: string;
    attendance: number;
    budget_used: number;
    last_vote: string;
};

export default function RepresentativeCard({ mp }: { mp: MPProps }) {
    const voteColor = clsx({
        'text-green-400': mp.last_vote === 'Sim' || mp.last_vote === 'Yes',
        'text-red-400': mp.last_vote === 'Não' || mp.last_vote === 'No',
        'text-gray-400': mp.last_vote === 'Absent' || mp.last_vote === 'Abstain',
    });

    const voteIcon = {
        'Sim': <CheckCircle size={14} />,
        'Yes': <CheckCircle size={14} />,
        'Não': <XCircle size={14} />,
        'No': <XCircle size={14} />,
        'Absent': <MinusCircle size={14} />,
        'Abstain': <MinusCircle size={14} />,
    }[mp.last_vote] || <MinusCircle size={14} />;

    return (
        <div className="glass-panel p-5 relative overflow-hidden group hover:border-lion-gold/30 transition-all">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                    <User className="text-gray-400" />
                </div>
                <div>
                    <h3 className="text-white font-bold">{mp.name}</h3>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-lion-gold font-medium uppercase tracking-wider">{mp.district}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{mp.party}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-black/30 p-2 rounded">
                    <div className="text-gray-500 mb-1">Attendance</div>
                    <div className={`font-bold text-lg ${mp.attendance < 50 ? 'text-red-500' : 'text-green-500'}`}>
                        {mp.attendance}%
                    </div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                    <div className="text-gray-500 mb-1">Decentralized Budget</div>
                    <div className="font-bold text-lg text-blue-400">
                        {mp.budget_used}%
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs">
                <span className="text-gray-500">Last Major Vote:</span>
                <span className={`font-bold flex items-center gap-1 uppercase ${voteColor}`}>
                    {voteIcon} {mp.last_vote}
                </span>
            </div>

            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-2 h-2 rounded-full ${mp.attendance > 75 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>

            {/* Overlay Link */}
            <a href={`/representatives/${mp.id}`} className="absolute inset-0 z-10" aria-label={`View profile of ${mp.name}`}></a>
        </div>
    );
}
