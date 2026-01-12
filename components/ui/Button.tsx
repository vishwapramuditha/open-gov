import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';

        const variants = {
            primary: 'bg-lion-gold hover:bg-yellow-600 text-black focus:ring-lion-gold shadow-lg shadow-lion-gold/20 hover:shadow-xl hover:shadow-lion-gold/30 hover:scale-105',
            secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 focus:ring-gray-600 hover:border-gray-600',
            ghost: 'bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white focus:ring-gray-700',
            danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30',
            success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30'
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg'
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
