'use client';

import { useEffect, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export function CountUp({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) return;

        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Ease out cubic for smooth deceleration
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = startValue + (end - startValue) * easeOutCubic;

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setHasAnimated(true);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, hasAnimated]);

    const formattedCount = count.toFixed(decimals);

    return (
        <span className={className}>
            {prefix}{formattedCount}{suffix}
        </span>
    );
}
