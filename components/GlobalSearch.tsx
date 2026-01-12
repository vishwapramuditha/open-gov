'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, Users, Building2, FileText } from 'lucide-react';
import Link from 'next/link';
import { MPS_DATA, MAJOR_PROJECTS, NEWS_ITEMS, TENDERS } from '@/lib/data';

interface SearchResult {
    type: 'mp' | 'project' | 'news' | 'tender';
    title: string;
    subtitle?: string;
    href: string;
    icon: any;
}

export function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Keyboard shortcut (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Search logic
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const searchQuery = query.toLowerCase();
        const searchResults: SearchResult[] = [];

        // Search MPs
        MPS_DATA.forEach((mp) => {
            if (
                mp.name.toLowerCase().includes(searchQuery) ||
                mp.district.toLowerCase().includes(searchQuery) ||
                mp.party.toLowerCase().includes(searchQuery)
            ) {
                searchResults.push({
                    type: 'mp',
                    title: mp.name,
                    subtitle: `${mp.district} • ${mp.party}`,
                    href: `/representatives/${mp.id}`,
                    icon: Users,
                });
            }
        });

        // Search Projects
        MAJOR_PROJECTS.forEach((project) => {
            if (
                project.name.toLowerCase().includes(searchQuery) ||
                project.ministry.toLowerCase().includes(searchQuery) ||
                project.location.toLowerCase().includes(searchQuery)
            ) {
                searchResults.push({
                    type: 'project',
                    title: project.name,
                    subtitle: `${project.ministry} • ${project.status}`,
                    href: `/projects#${project.id}`,
                    icon: Building2,
                });
            }
        });

        // Search News
        NEWS_ITEMS.forEach((news) => {
            if (
                news.title.toLowerCase().includes(searchQuery) ||
                news.category.toLowerCase().includes(searchQuery)
            ) {
                searchResults.push({
                    type: 'news',
                    title: news.title,
                    subtitle: `${news.category} • ${news.date}`,
                    href: `/#news-${news.id}`,
                    icon: TrendingUp,
                });
            }
        });

        // Search Tenders
        TENDERS.forEach((tender) => {
            if (
                tender.title.toLowerCase().includes(searchQuery) ||
                tender.ministry.toLowerCase().includes(searchQuery)
            ) {
                searchResults.push({
                    type: 'tender',
                    title: tender.title,
                    subtitle: `${tender.ministry} • ${tender.status}`,
                    href: `/tenders#${tender.id}`,
                    icon: FileText,
                });
            }
        });

        setResults(searchResults.slice(0, 8)); // Limit to 8 results
    }, [query]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors text-gray-400 hover:text-white"
            >
                <Search size={16} />
                <span className="hidden md:inline text-sm">Search...</span>
                <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-gray-800 border border-gray-700 rounded">
                    <span>⌘</span>K
                </kbd>
            </button>
        );
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fade-in"
                onClick={() => setIsOpen(false)}
            />

            {/* Search Modal */}
            <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 animate-scale-in">
                <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 p-4 border-b border-gray-800">
                        <Search size={20} className="text-gray-500" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search MPs, projects, news, tenders..."
                            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery('')}
                                className="p-1 hover:bg-gray-800 rounded transition-colors"
                            >
                                <X size={16} className="text-gray-500" />
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-1 text-xs bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 transition-colors"
                        >
                            ESC
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-96 overflow-y-auto">
                        {results.length === 0 && query && (
                            <div className="p-8 text-center text-gray-500">
                                No results found for &quot;{query}&quot;
                            </div>
                        )}

                        {results.length === 0 && !query && (
                            <div className="p-8 text-center text-gray-500">
                                <p className="mb-2">Start typing to search...</p>
                                <p className="text-xs">Search across MPs, projects, news, and tenders</p>
                            </div>
                        )}

                        {results.map((result, index) => {
                            const Icon = result.icon;
                            return (
                                <Link
                                    key={index}
                                    href={result.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 p-4 hover:bg-gray-800 transition-colors border-b border-gray-800 last:border-b-0"
                                >
                                    <div className="p-2 bg-gray-800 rounded-lg">
                                        <Icon size={18} className="text-lion-gold" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white font-medium truncate">{result.title}</div>
                                        {result.subtitle && (
                                            <div className="text-sm text-gray-500 truncate">{result.subtitle}</div>
                                        )}
                                    </div>
                                    <div className="text-xs text-gray-600 uppercase">{result.type}</div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
