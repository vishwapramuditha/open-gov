import Navbar from "@/components/Navbar";
import { MPS_DATA } from "@/lib/data";
import { ArrowLeft, Mail, Phone, Calendar, Target, CheckCircle, XCircle, MinusCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Correctly typing params for Next.js 15+ (can be async)
export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const mp = MPS_DATA.find((m) => m.id === Number(params.id));
    if (!mp) return { title: "MP Not Found" };
    return {
        title: `${mp.name} | OpenGov Sri Lanka`,
        description: `Track attendance and voting history for ${mp.name}.`,
    };
}

// Required for static export (Mobile App)
export async function generateStaticParams() {
    return MPS_DATA.map((mp) => ({
        id: mp.id.toString(),
    }));
}

export default async function RepresentativeProfile(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const mp = MPS_DATA.find((m) => m.id === Number(params.id));

    if (!mp) {
        notFound();
    }

    // Helper to get vote icon
    const getVoteIcon = (vote: string) => {
        switch (vote) {
            case 'Sim': return <CheckCircle className="text-green-500" size={18} />;
            case 'Não': return <XCircle className="text-red-500" size={18} />;
            case 'Absent': return <MinusCircle className="text-gray-500" size={18} />;
            default: return <HelpCircle className="text-yellow-500" size={18} />;
        }
    };

    return (
        <main className="min-h-screen bg-black text-gray-100 pb-20 selection:bg-lion-gold selection:text-black">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <Link href="/representatives" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to MP Watch
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="glass-panel p-6 text-center relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-lion-gold/20 to-transparent"></div>

                            <div className="relative mx-auto w-40 h-40 rounded-full border-4 border-black shadow-xl overflow-hidden mb-4">
                                {/* Use a placeholder if image is local path, or remote if http */}
                                <Image
                                    src={mp.image || "/placeholder-user.jpg"}
                                    alt={mp.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h1 className="text-2xl font-bold text-white mb-1">{mp.name}</h1>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
                                <span className="bg-white/10 px-2 py-0.5 rounded">{mp.party}</span>
                                <span>•</span>
                                <span>{mp.district} District</span>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {mp.bio || "No biography available."}
                            </p>

                            <div className="flex flex-col gap-3">
                                {mp.email && (
                                    <a href={`mailto:${mp.email}`} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                                        <Mail size={16} className="text-lion-gold" />
                                        <span>{mp.email}</span>
                                    </a>
                                )}
                                {mp.phone && (
                                    <a href={`tel:${mp.phone}`} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                                        <Phone size={16} className="text-lion-gold" />
                                        <span>{mp.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Topics of Interest */}
                        <div className="glass-panel p-6">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Target size={16} /> Key Focus Areas
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {mp.topics_interest?.map((topic, i) => (
                                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-lion-gold/10 text-lion-gold border border-lion-gold/20">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats & History */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-4xl font-bold text-white mb-2">{mp.attendance}%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Parliamentary Attendance</div>
                                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${mp.attendance}%` }}></div>
                                </div>
                            </div>
                            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center">
                                <div className="text-4xl font-bold text-white mb-2">{mp.budget_used}%</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Budget Utilization</div>
                                <div className="w-full h-1.5 bg-gray-800 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-green-500" style={{ width: `${mp.budget_used}%` }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Voting History */}
                        <div className="glass-panel p-6">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Calendar size={20} className="text-gray-500" /> Voting History
                            </h3>

                            <div className="space-y-4">
                                {mp.votingHistory?.map((record, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                                        <div>
                                            <h4 className="font-medium text-white mb-1">{record.bill}</h4>
                                            <p className="text-xs text-gray-500">{record.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5">
                                            {getVoteIcon(record.vote)}
                                            <span className={`text-sm font-bold ${record.vote === 'Sim' ? 'text-green-500' :
                                                record.vote === 'Não' ? 'text-red-500' : 'text-gray-400'
                                                }`}>
                                                {record.vote}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
