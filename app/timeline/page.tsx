import Navbar from "@/components/Navbar";
import HistoryTimeline from "@/components/HistoryTimeline";

export const metadata = {
    title: "Economic History | OpenGov Sri Lanka",
    description: "A timeline of Sri Lanka's major economic events, loans, and development projects.",
};

export default function TimelinePage() {
    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg sticky top-0 z-10 backdrop-blur-md">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Economic Timeline</h1>
                    <p className="opacity-60 max-w-2xl text-sm">
                        The story of debt and development. understand the context behind today's numbers.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <HistoryTimeline />
            </div>
        </main>
    );
}
