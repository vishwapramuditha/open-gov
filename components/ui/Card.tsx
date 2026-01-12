import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    glow?: boolean;
}

export function Card({ className, hover = true, glow = false, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300',
                hover && 'hover:border-gray-700 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1',
                glow && 'shadow-lg shadow-lion-gold/10',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('mb-4', className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn('text-lg font-bold text-white', className)} {...props}>
            {children}
        </h3>
    );
}

export function CardDescription({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn('text-sm text-gray-400', className)} {...props}>
            {children}
        </p>
    );
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('', className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('mt-4 pt-4 border-t border-gray-800', className)} {...props}>
            {children}
        </div>
    );
}
