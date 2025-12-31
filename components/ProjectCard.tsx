import { MapPin, Building2, CalendarClock } from "lucide-react";
import clsx from "clsx";

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
    const statusColor = clsx({
        'bg-green-100 text-green-700': project.status === 'Completed',
        'bg-blue-100 text-blue-700': project.status === 'In Progress' || project.status === 'Ongoing',
        'bg-yellow-100 text-yellow-700': project.status === 'Planned',
        'bg-red-100 text-red-700': project.status === 'Stalled',
    });

    return (
        <div className="glass-panel p-6 group hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{project.ministry}</span>
                    <h3 className="font-bold text-lg text-white mt-1 group-hover:text-lion-gold transition-colors">{project.name}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                    {project.status}
                </span>
            </div>

            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {project.description}
            </p>

            <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <span>Contractor: {project.contractor}</span>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarClock size={16} />
                    <span>Progress: <span className="text-white font-bold">{project.progress}%</span></span>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <div className="text-xs text-gray-500">Total Budget</div>
                <div className="font-bold text-white">{project.budget}</div>
            </div>

            <div className="w-full bg-gray-800 h-1.5 mt-4 rounded-full overflow-hidden">
                <div
                    className="bg-lion-gold h-full"
                    style={{ width: `${project.progress}%` }}
                ></div>
            </div>
        </div>
    );
}
