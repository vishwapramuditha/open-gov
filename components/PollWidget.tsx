'use client';

import { useState } from 'react';
import { Vote } from 'lucide-react';
import clsx from 'clsx';

const POLL_OPTIONS = [
    { id: 'edu', label: 'Education Reform', votes: 45 },
    { id: 'hlt', label: 'Healthcare Infrastructure', votes: 30 },
    { id: 'tpt', label: 'Public Transport', votes: 25 },
];

export default function PollWidget() {
    const [voted, setVoted] = useState<string | null>(null);
    const [votes, setVotes] = useState(POLL_OPTIONS);

    const handleVote = (id: string) => {
        if (voted) return;
        setVoted(id);
        setVotes(prev => prev.map(opt =>
            opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
        ));
    };

    const totalVotes = votes.reduce((acc, curr) => acc + curr.votes, 0);

    return (
        <div className="glass-panel p-5 mt-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                <Vote className="text-lion-gold" size={18} />
                <h3 className="text-white font-bold text-sm uppercase tracking-wide">Citizen Voice</h3>
            </div>

            <p className="text-xs text-gray-400 mb-4">
                What should be the priority for the 2025 Supplementary Budget?
            </p>

            <div className="space-y-3">
                {votes.map((option) => {
                    const percentage = Math.round((option.votes / totalVotes) * 100);
                    const isSelected = voted === option.id;

                    return (
                        <button
                            key={option.id}
                            onClick={() => handleVote(option.id)}
                            disabled={!!voted}
                            className={clsx(
                                "relative w-full text-left p-3 rounded-lg border transition-all overflow-hidden",
                                voted
                                    ? "border-transparent bg-white/5"
                                    : "border-white/10 hover:border-lion-gold/50 hover:bg-white/10"
                            )}
                        >
                            {/* Progress Background */}
                            {voted && (
                                <div
                                    className={clsx("absolute inset-y-0 left-0 transition-all duration-700 opacity-20",
                                        isSelected ? "bg-lion-gold" : "bg-gray-500"
                                    )}
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            )}

                            <div className="relative flex justify-between items-center z-10">
                                <span className={clsx("text-sm font-medium", isSelected ? "text-lion-gold" : "text-gray-300")}>
                                    {option.label}
                                </span>
                                {voted && (
                                    <span className="text-xs font-bold text-white">
                                        {percentage}%
                                    </span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {voted && (
                <p className="text-right text-[10px] text-gray-500 mt-2">
                    Votes recorded: {totalVotes}
                </p>
            )}
        </div>
    );
}
