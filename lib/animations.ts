// Animation utilities for OpenGov
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 }
};

export const slideInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
};

export const slideInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Utility function for scroll-triggered animations
export function useScrollAnimation() {
    if (typeof window === 'undefined') return { ref: null, inView: true };

    // Simple intersection observer hook
    const ref = { current: null };
    const inView = true; // Default to true for SSR

    return { ref, inView };
}

// Counter animation utility
export function useCountUp(end: number, duration: number = 2000) {
    if (typeof window === 'undefined') return end;

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
}

// React import for hooks
import React from 'react';
