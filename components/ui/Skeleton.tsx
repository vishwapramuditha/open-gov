import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
    const variants = {
        text: 'h-4 w-full',
        circular: 'rounded-full',
        rectangular: 'rounded-lg'
    };

    return (
        <div
            className={cn(
                'animate-pulse bg-gray-800',
                variants[variant],
                className
            )}
        />
    );
}

export function StatCardSkeleton() {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <Skeleton className="h-3 w-20 mb-3" />
            <Skeleton className="h-8 w-24 mb-2" />
            <Skeleton className="h-3 w-16" />
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-5/6" />
        </div>
    );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
    return (
        <div className="space-y-3">
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="flex gap-4">
                    <Skeleton className="h-12 flex-1" />
                    <Skeleton className="h-12 w-24" />
                    <Skeleton className="h-12 w-32" />
                </div>
            ))}
        </div>
    );
}
