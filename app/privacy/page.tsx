import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Privacy Policy | OpenGov Sri Lanka",
    description: "How we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black text-gray-300 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Privacy Policy</h1>
                    <p className="opacity-60 text-sm">Last Updated: January 1, 2026</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
                    <p className="leading-relaxed">
                        OpenGov Sri Lanka ("we", "our", "us") collects minimal information to provide our transparency services.
                        We may collect:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Usage Data:</strong> Information on how you interact with our dashboard (e.g., pages visited, clicks).</li>
                        <li><strong>Voluntary Submissions:</strong> Data you provide via forms, such as the Whistleblower Portal or Newsletter.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">2. Whistleblower Anonymity</h2>
                    <p className="leading-relaxed">
                        We take the security of our Whistleblower Portal seriously. Reports submitted through this portal are processed with high confidentiality.
                        We do not log IP addresses for submissions made via the secure reporting form. However, we encourage users to take their own precautions (e.g., using VPNs/Tor) when submitting sensitive information.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">3. Cookies & Analytics</h2>
                    <p className="leading-relaxed">
                        We use cookies to enhance your experience (e.g., remembering your language preference). We may use third-party analytics tools (like Google Analytics) to understand site traffic patterns. You can disable cookies in your browser settings.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">4. Data Sharing</h2>
                    <p className="leading-relaxed">
                        We are an open-data initiative. While we share aggregated public data, we <strong>never</strong> sell or share your personal private information with third parties, advertisers, or government entities unless required by law.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white">5. Contact Us</h2>
                    <p className="leading-relaxed">
                        If you have questions about this policy, please contact us at <a href="mailto:privacy@opengov.lk" className="text-lion-gold hover:underline">privacy@opengov.lk</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
