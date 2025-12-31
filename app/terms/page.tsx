import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Terms of Service | OpenGov Sri Lanka",
    description: "Rules and regulations for using the OpenGov platform.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black text-gray-300 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Terms of Service</h1>
                    <p className="opacity-60 text-sm">Last Updated: January 1, 2026</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed">
                        By accessing and using OpenGov Sri Lanka (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">2. Disclaimer of Data Accuracy</h2>
                    <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
                        <p className="leading-relaxed text-red-200">
                            <strong>Important:</strong> The data presented on this platform is aggregated from various public sources, ministry reports, and open portals.
                            While we strive for accuracy, OpenGov Sri Lanka <strong>cannot guarantee</strong> the real-time precision or legal validity of the figures shown.
                            Always verify with official government gazettes before making legal or financial decisions.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">3. Acceptable Use</h2>
                    <p className="leading-relaxed">
                        You agree not to use the Service to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Violate any local, state, national, or international law.</li>
                        <li>Submit false or malicious reports via the Whistleblower Portal.</li>
                        <li>Attempt to compromise the security or integrity of the platform.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
                    <p className="leading-relaxed">
                        The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and intellectual property laws.
                        However, the data itself is Open Data (see our <a href="/license" className="text-lion-gold hover:underline">Open Data License</a>).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
                    <p className="leading-relaxed">
                        OpenGov Sri Lanka shall not be liable for any damages whatsoever resulting from your use or inability to use the Service.
                    </p>
                </section>
            </div>
        </main>
    );
}
