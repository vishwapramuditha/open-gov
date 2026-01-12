import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'OpenGov Sri Lanka | National Transparency Dashboard',
    description: 'Track government spending, loans, development projects, and MP activities in Sri Lanka. Real-time transparency portal for national economic data and civic expenditure.',
    keywords: ['Sri Lanka', 'government transparency', 'open data', 'budget tracking', 'MP accountability', 'development projects'],
    authors: [{ name: 'Vishwa Pramuditha' }],
    openGraph: {
        title: 'OpenGov Sri Lanka | National Transparency Dashboard',
        description: 'Real-time transparency portal for Sri Lankan government data',
        type: 'website',
        locale: 'en_LK',
        siteName: 'OpenGov Sri Lanka',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OpenGov Sri Lanka',
        description: 'Track government spending and development projects in real-time',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#D4AF37',
};
