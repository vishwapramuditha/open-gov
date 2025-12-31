import Navbar from "@/components/Navbar";
import { ShieldAlert, Upload, Lock } from "lucide-react";

export const metadata = {
    title: "Report Corruption | OpenGov Sri Lanka",
    description: "Secure, anonymous reporting of government public sector corruption.",
};

export default function ReportCorruptionPage() {
    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-red-500 selection:text-white">
            <Navbar />

            <div className="max-w-3xl mx-auto px-4 py-12">

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 text-red-500 mb-4 ring-1 ring-red-500/50">
                        <ShieldAlert size={32} />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Whistleblower Portal</h1>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Report corruption, fraud, or waste in the public sector.
                        Your identity is protected by strong encryption and anonymity protocols.
                    </p>
                </div>

                <div className="glass-panel p-8">
                    <div className="flex items-center gap-2 mb-6 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg text-yellow-500 text-sm">
                        <Lock size={16} />
                        <span>This connection is secure. You may submit this report anonymously.</span>
                    </div>

                    <form
                        action="https://formsubmit.co/vishwa.pramudiitha@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Whistleblower Report (OpenGov)" />
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="hidden" name="_next" value="http://localhost:3000/report?success=true" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Department / Ministry</label>
                                <input type="text" name="department" placeholder="e.g. Department of Motor Traffic" required className="w-full glass-input px-4 py-2" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Location</label>
                                <input type="text" name="location" placeholder="City or District" required className="w-full glass-input px-4 py-2" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Description of Incident</label>
                            <textarea
                                name="description"
                                rows={5}
                                placeholder="Please provide as much detail as possible..."
                                required
                                className="w-full glass-input px-4 py-2"
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Evidence (Link / Description)</label>
                            <input
                                type="text"
                                name="evidence_link"
                                placeholder="Link to files (GDrive/Dropbox) or description of evidence held"
                                className="w-full glass-input px-4 py-2"
                            />
                            <p className="text-xs text-gray-500 mt-1">For security, please upload files to a cloud service and share the link, or describe what you have.</p>
                        </div>

                        <hr className="border-gray-800 my-6" />

                        <div className="flex justify-end">
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-red-900/20 transition-all hover:scale-105">
                                Submit Secure Report
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
