import Link from "next/link";
import { Scale, Github, Twitter, Facebook, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050510] border-t border-white/5 pt-16 pb-8 text-gray-400 font-sans">
            <div className="max-w-[1400px] mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <Scale className="text-lion-gold" size={24} />
                            <h1 className="text-xl font-bold tracking-wide text-white">
                                OPEN<span className="text-lion-gold">GOV</span> LK
                            </h1>
                        </Link>
                        <p className="text-sm leading-relaxed opacity-80">
                            Sri Lanka's first real-time transparency dashboard. Empowering citizens with open data on government spending, debt, and development.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-lion-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-lion-gold transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-lion-gold transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Platform</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-lion-gold transition-colors">Dashboard</Link></li>
                            <li><Link href="/projects" className="hover:text-lion-gold transition-colors">Development Projects</Link></li>
                            <li><Link href="/tenders" className="hover:text-lion-gold transition-colors">Transparency Hub</Link></li>
                            <li><Link href="/representatives" className="hover:text-lion-gold transition-colors">MP Watch</Link></li>
                            <li><Link href="/timeline" className="hover:text-lion-gold transition-colors">Economic History</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/tax-calculator" className="hover:text-lion-gold transition-colors">Tax Calculator</Link></li>
                            <li><Link href="/report" className="hover:text-lion-gold transition-colors flex items-center gap-2"><ShieldAlert size={14} className="text-red-500" /> Whistleblower Portal</Link></li>
                            <li><a href="https://www.treasury.gov.lk" target="_blank" className="hover:text-lion-gold transition-colors">Ministry of Finance</a></li>
                            <li><a href="https://www.cbsl.gov.lk" target="_blank" className="hover:text-lion-gold transition-colors">Central Bank of Sri Lanka</a></li>
                            <li><a href="#" className="hover:text-lion-gold transition-colors">Data API (Coming Soon)</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Stay Updated</h3>
                        <p className="text-sm mb-4 opacity-80">Get the latest consolidated budget reports directly to your inbox.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-lion-gold outline-none transition-colors"
                                disabled
                            />
                            <button
                                type="button"
                                className="w-full bg-lion-gold hover:bg-yellow-600 text-black font-bold py-2 rounded-lg text-sm transition-colors opacity-70 cursor-not-allowed"
                            >
                                Subscribe (Coming Soon)
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
                    <p>&copy; {new Date().getFullYear()} OpenGov Sri Lanka. A Civil Transparency Initiative.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link href="/license" className="hover:text-white">Open Data License</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
