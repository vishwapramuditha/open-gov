import Navbar from "@/components/Navbar";
import TaxCalculator from "@/components/TaxCalculator";

export const metadata = {
    title: "Tax Calculator | OpenGov Sri Lanka",
    description: "Calculate your tax contribution and see how it is spent.",
};

export default function TaxCalculatorPage() {
    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="bg-[#050510] border-b border-gray-800 py-12 px-4 shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2 text-white">Tax Transparency</h1>
                    <p className="opacity-60 max-w-2xl text-sm">
                        Understand your contribution to the nation. See the breakdown of every rupee you pay.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <TaxCalculator />
            </div>
        </main>
    );
}
