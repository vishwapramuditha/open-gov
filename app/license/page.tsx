import Navbar from "@/components/Navbar";
import { Scale, Check, X } from "lucide-react";

export const metadata = {
    title: "Open Data License | OpenGov Sri Lanka",
    description: "Terms for using and redistributing data from OpenGov.",
};

export default function LicensePage() {
    return (
        <main className="min-h-screen bg-black text-gray-300 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Open Data License</h1>
                    <p className="opacity-60 text-sm">Empowering innovation through free information.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl flex items-start gap-6">
                    <div className="p-4 bg-white/5 rounded-full hidden sm:block">
                        <Scale size={48} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">Creative Commons Attribution 4.0 International (CC BY 4.0)</h2>
                        <p className="leading-relaxed mb-4">
                            Unless otherwise noted, all data sets and content on OpenGov Sri Lanka are made available under the
                            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" className="text-lion-gold hover:underline mx-1">CC BY 4.0 License</a>.
                        </p>
                        <p className="text-sm opacity-70">
                            This means you are free to share, copy, and remix the data for any purpose, even commercially, as long as you provide attribution.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Check className="text-green-500" /> You are free to:
                        </h3>
                        <ul className="list-disc pl-8 space-y-2 marker:text-green-500">
                            <li><strong>Share:</strong> Copy and redistribute the material in any medium or format.</li>
                            <li><strong>Adapt:</strong> Remix, transform, and build upon the material for any purpose, even commercially.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-lion-gold text-lion-gold text-xs font-bold">!</div> Under the following terms:
                        </h3>
                        <ul className="list-disc pl-8 space-y-2 marker:text-lion-gold">
                            <li>
                                <strong>Attribution:</strong> You must give appropriate credit, provide a link to the license, and indicate if changes were made.
                                <br /><span className="text-xs opacity-60">Example: "Data source: OpenGov Sri Lanka (opengov.lk)"</span>
                            </li>
                            <li>
                                <strong>No Additional Restrictions:</strong> You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
                            </li>
                        </ul>
                    </section>
                </div>

                <section className="space-y-4 pt-8 border-t border-gray-800">
                    <h2 className="text-xl font-bold text-white">Exceptions</h2>
                    <p className="leading-relaxed">
                        The Open Data License does <strong>not</strong> apply to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Third-party logos or trademarks (e.g., official ministry seals).</li>
                        <li>Users' personal information protected under our Privacy Policy.</li>
                        <li>Content clearly marked as being under a different license.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
