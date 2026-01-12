'use client';

import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import { GlobalSearch } from './GlobalSearch';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: 'Dashboard', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'MPs', path: '/representatives' },
        { name: 'History', path: '/timeline' },
        { name: 'Tenders', path: '/tenders' },
        { name: 'Tax Calc', path: '/tax-calculator' },
    ];

    return (
        <nav className="bg-[#050510]/80 text-white p-4 shadow-md sticky top-0 z-50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Scale className="text-lion-gold group-hover:rotate-12 transition-transform" />
                        <h1 className="text-xl font-bold tracking-wide">OPEN<span className="text-lion-gold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">GOV</span> LK</h1>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={clsx("hover:text-lion-gold transition-colors", isActive(link.path) ? "text-lion-gold" : "opacity-70")}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Global Search */}
                    <div className="hidden lg:block">
                        <GlobalSearch />
                    </div>

                    {/* Language Switcher */}
                    <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-gray-400">
                        <span className="text-lion-gold cursor-pointer">EN</span>
                        <span className="text-gray-700">|</span>
                        <span className="hover:text-white cursor-pointer">SI</span>
                        <span className="text-gray-700">|</span>
                        <span className="hover:text-white cursor-pointer">TA</span>
                    </div>

                    {/* Report CTA */}
                    <Link
                        href="/report"
                        className="hidden sm:flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 text-red-500 border border-red-600/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                    >
                        Report Corruption
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#050510] border-b border-gray-800 p-4 shadow-xl animate-in slide-in-from-top-5">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={clsx("text-sm font-medium py-2 border-b border-white/5", isActive(link.path) ? "text-lion-gold" : "text-gray-300")}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-4 pt-2">
                            <Link
                                href="/report"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex-1 text-center bg-red-600/10 text-red-500 border border-red-600/20 px-3 py-2 rounded-lg text-xs font-bold"
                            >
                                Report Corruption
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
