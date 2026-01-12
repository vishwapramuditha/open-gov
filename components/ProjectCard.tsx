'use client';

import { MapPin, Building2, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type ProjectProps = {
    name: string;
    ministry: string;
    status: string;
    progress: number;
    budget: string;
    location: string;
    description: string;
    contractor: string;
};

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'success';
            case 'In Progress':
            case 'Ongoing':
                return 'info';
            case 'Planned':
                return 'warning';
            case 'Stalled':
                return 'danger';
            default:
                return 'default';
        }
    };

    return (
        <div className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-lion-gold/50 hover:shadow-xl hover:shadow-lion-gold/10 transition-all duration-300 hover:-translate-y-1 animate-scale-in">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{project.ministry}</span>
                    <h3 className="font-bold text-lg text-white mt-1 group-hover:text-lion-gold transition-colors line-clamp-2">
                        {project.name}
                    </h3>
                </div>
                <Badge variant={getStatusVariant(project.status)} className="ml-2 flex-shrink-0">
                    {project.status}
                </Badge>
            </div>

            <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                {project.description}
            </p>

            <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-lion-gold flex-shrink-0" />
                    <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-lion-gold flex-shrink-0" />
                    <span className="truncate">Contractor: {project.contractor}</span>
                </div>
                <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-lion-gold flex-shrink-0" />
                    <span>Progress: <span className="text-white font-bold">{project.progress}%</span></span>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
                <div className="text-xs text-gray-500 uppercase tracking-wider">Total Budget</div>
                <div className="font-bold text-lion-gold">{project.budget}</div>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-800 h-2 mt-4 rounded-full overflow-hidden">
                <div
                    className="bg-gradient-to-r from-lion-gold to-yellow-500 h-full transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${project.progress}%` }}
                >
                    <div className="h-full w-full bg-white/20 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
