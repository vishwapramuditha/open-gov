import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
    const variants = {
        default: 'bg-gray-800 text-gray-300 border-gray-700',
        success: 'bg-green-900/30 text-green-400 border-green-800',
        warning: 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
        danger: 'bg-red-900/30 text-red-400 border-red-800',
        info: 'bg-blue-900/30 text-blue-400 border-blue-800'
    };

    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-colors',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
