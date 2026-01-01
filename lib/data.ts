
export const BUDGET_ALLOCATIONS = [
    { name: 'Debt Repayment', value: 4500, fill: '#ef4444' },
    { name: 'Infrastructure', value: 2000, fill: '#f97316' },
    { name: 'Education', value: 800, fill: '#3b82f6' },
    { name: 'Health', value: 600, fill: '#10b981' },
    { name: 'Defence', value: 1200, fill: '#6366f1' },
    { name: 'Welfare/Samurdhi', value: 900, fill: '#ec4899' },
];

export const PROVINCIAL_DATA = [
    { name: 'Western Province', budget: 450, id: 'WP' },
    { name: 'Central Province', budget: 220, id: 'CP' },
    { name: 'Southern Province', budget: 200, id: 'SP' },
    { name: 'Northern Province', budget: 180, id: 'NP' },
    { name: 'Eastern Province', budget: 170, id: 'EP' },
    { name: 'North Western Province', budget: 190, id: 'NW' },
    { name: 'North Central Province', budget: 150, id: 'NC' },
    { name: 'Uva Province', budget: 130, id: 'UP' },
    { name: 'Sabaragamuwa Province', budget: 140, id: 'SG' },
];

export const ECONOMIC_STATS = [
    { label: 'Inflation Rate', value: '4.2%', trend: 'down', change: '-0.5%' },
    { label: 'GDP Growth', value: '2.8%', trend: 'up', change: '+1.2%' },
    { label: 'Forex Reserves', value: '$4.5 Bn', trend: 'up', change: '+$200M' },
    { label: 'Total Debt', value: '$96 Bn', trend: 'down', change: '-$1.5 Bn' },
];

export const MAJOR_PROJECTS = [
    {
        id: 1,
        name: 'Central Expressway (Section 3)',
        status: 'In Progress',
        progress: 45,
        budget: 'LKR 80 Billion',
        ministry: 'Highways',
        location: 'Rambukkana to Galagedara',
        description: 'Construction of 32.5km four lane expressway connecting the central hills.',
        contractor: 'MCC & CCECC Consortium'
    },
    {
        id: 2,
        name: 'Lotus Tower Maintenance',
        status: 'Completed',
        progress: 100,
        budget: 'LKR 1.2 Billion',
        ministry: 'Finance',
        location: 'Colombo 10',
        description: 'Annual maintenance and digital upgrade of the telecommunications tower.',
        contractor: 'Lotus Tower Management Co.'
    },
    {
        id: 3,
        name: 'Kandy Multimodal Terminal',
        status: 'Planned',
        progress: 10,
        budget: 'LKR 25 Billion',
        ministry: 'Transport',
        location: 'Kandy City',
        description: 'Integration of bus, rail, and taxi services into a single transport hub.',
        contractor: 'TBD'
    },
    {
        id: 4,
        name: 'Rural Road Development Phase IV',
        status: 'Ongoing',
        progress: 60,
        budget: 'LKR 15 Billion',
        ministry: 'Highways',
        location: 'Island-wide',
        description: 'Rehabilitation of 1000km of rural agricultural roads.',
        contractor: 'Local Contractors'
    },
    {
        id: 5,
        name: 'Port City Financial Centre',
        status: 'In Progress',
        progress: 30,
        budget: 'LKR 150 Billion (FDI)',
        ministry: 'Investment Promotion',
        location: 'Colombo Port City',
        description: 'Development of the main financial complex within the SEZ.',
        contractor: 'CHEC'
    },
    {
        id: 6,
        name: 'Solar Power Park - Siyambalanduwa',
        status: 'Planned',
        progress: 5,
        budget: 'LKR 40 Billion',
        ministry: 'Power & Energy',
        location: 'Monaragala',
        description: '100MW Solar park to feed into national grid.',
        contractor: 'Rivan Corp'
    },
    {
        id: 7,
        name: 'Kelani Valley Railway Upgrade',
        status: 'Stalled',
        progress: 15,
        budget: 'LKR 12 Billion',
        ministry: 'Transport',
        location: 'Colombo to Avissawella',
        description: 'Modernization of the narrow gauge railway line.',
        contractor: 'Sri Lanka Railways'
    },
    {
        id: 8,
        name: 'Bandaranaike Airport Terminal 2',
        status: 'In Progress',
        progress: 75,
        budget: 'LKR 200 Billion',
        ministry: 'Aviation',
        location: 'Katunayake',
        description: 'Expansion of passenger capacity by 9 million passengers per annum.',
        contractor: 'Taisei Corporation'
    }
];

export const TENDERS = [
    {
        id: 'T-2024-001',
        title: 'Supply of Surgical Consumables for National Hospital',
        ministry: 'Ministry of Health',
        deadline: '2024-03-15',
        value: 'LKR 50 Million',
        status: 'Open'
    },
    {
        id: 'T-2024-002',
        title: 'Road Resurfacing: A9 Highway (Jaffna Section)',
        ministry: 'Ministry of Highways',
        deadline: '2024-02-28',
        value: 'LKR 120 Million',
        status: 'Open'
    },
    {
        id: 'T-2024-003',
        title: 'Procurement of 500 Desktop Computers for Schools',
        ministry: 'Ministry of Education',
        deadline: '2024-01-30',
        value: 'LKR 75 Million',
        status: 'Closed'
    },
    {
        id: 'T-2024-004',
        title: 'Consultancy for National Digital ID System',
        ministry: 'Ministry of Technology',
        deadline: '2024-04-10',
        value: 'LKR 200 Million',
        status: 'Open'
    },
    {
        id: 'T-2024-005',
        title: 'Supply of Fertilizer for Paddy Cultivation (Yala Season)',
        ministry: 'Ministry of Agriculture',
        deadline: '2024-03-01',
        value: 'LKR 300 Million',
        status: 'Evaluation'
    }
];

export const LOAN_DATA = [
    { source: 'IMF Extended Fund', amount: 'USD 2.9 Billion' },
    { source: 'Asian Development Bank', amount: 'USD 500 Million' },
    { source: 'World Bank', amount: 'USD 700 Million' },
    { source: 'Sovereign Bonds', amount: 'USD 12 Billion' },
];

export const NEWS_ITEMS = [
    {
        id: 1,
        title: 'Cabinet approves new Digital Economy Policy',
        date: '2 hours ago',
        category: 'Policy',
        summary: 'The new framework aims to increase IT exports to $5Bn by 2030.'
    },
    {
        id: 2,
        title: 'Central Bank maintains policy rates',
        date: '5 hours ago',
        category: 'Finance',
        summary: 'SDFR and SLFR remain unchanged at 9.00% and 10.00% respectively.'
    },
    {
        id: 3,
        title: 'Education Ministry launches "Smart Classroom" pilot',
        date: '1 day ago',
        category: 'Education',
        summary: '25 schools selected for the initial phase of digitalization.'
    },
    {
        id: 4,
        title: 'Tourism earnings cross $200M in January',
        date: '2 days ago',
        category: 'Economy',
        summary: 'visitor arrivals show strong recovery year-on-year.'
    }
];

export const FOREX_RATES = [
    { currency: 'USD', buy: '305.50', sell: '315.20', trend: 'down' },
    { currency: 'EUR', buy: '330.10', sell: '342.50', trend: 'up' },
    { currency: 'GBP', buy: '385.40', sell: '398.80', trend: 'down' },
    { currency: 'JPY', buy: '2.05', sell: '2.15', trend: 'stable' }
];

export const GAZETTES = [
    { id: '2365/12', title: 'Consumer Affairs Authority Act: Maximum Retail Price on Rice', date: '2024-02-10' },
    { id: '2365/08', title: 'Import and Export Control Regulations (No. 02 of 2024)', date: '2024-02-05' },
    { id: '2364/22', title: 'Urban Development Authority (Special Provisions)', date: '2024-01-28' },
];

export const MPS_DATA = [
    {
        id: 1,
        name: 'Hon. A. Silva',
        district: 'Colombo',
        party: 'Gov',
        attendance: 85,
        budget_used: 92,
        last_vote: 'Sim',
        image: '/placeholder-mp-1.jpg', // In a real app, these would be real images
        email: 'a.silva@parliament.lk',
        phone: '+94 11 234 5678',
        bio: 'Serving the Colombo district since 2010. Focused on urban development and digital infrastructure.',
        topics_interest: ['Economy', 'Urban Development', 'Technology'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Sim', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Sim', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Sim', date: '2023-12-13' }
        ]
    },
    {
        id: 2,
        name: 'Hon. B. Perera',
        district: 'Gampaha',
        party: 'Opp',
        attendance: 45,
        budget_used: 30,
        last_vote: 'Não',
        image: '/placeholder-mp-2.jpg',
        email: 'b.perera@parliament.lk',
        phone: '+94 11 234 5679',
        bio: 'Advocate for rural education and healthcare reform. Former provincial council member.',
        topics_interest: ['Education', 'Health', 'Rural Affairs'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Não', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Não', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Não', date: '2023-12-13' }
        ]
    },
    {
        id: 3,
        name: 'Hon. C. Wickramasinghe',
        district: 'Kandy',
        party: 'Gov',
        attendance: 90,
        budget_used: 88,
        last_vote: 'Sim',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
        email: 'c.wick@parliament.lk',
        phone: '+94 81 234 5678',
        bio: 'Expert in agricultural policy and export promotion. Representing the hill country.',
        topics_interest: ['Agriculture', 'Trade', 'Tourism'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Sim', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Sim', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Abstain', date: '2023-12-13' }
        ]
    },
    {
        id: 4,
        name: 'Hon. D. Rajapaksa',
        district: 'Hambantota',
        party: 'Gov',
        attendance: 60,
        budget_used: 75,
        last_vote: 'Absent',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
        email: 'd.rajapaksa@parliament.lk',
        phone: '+94 47 234 5678',
        bio: 'Focused on southern infrastructure development and youth sports.',
        topics_interest: ['Infrastructure', 'Sports', 'Youth'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Absent', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Sim', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Sim', date: '2023-12-13' }
        ]
    },
    {
        id: 5,
        name: 'Hon. E. Fernando',
        district: 'Galle',
        party: 'Opp',
        attendance: 78,
        budget_used: 65,
        last_vote: 'Não',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
        email: 'e.fernando@parliament.lk',
        phone: '+94 91 234 5678',
        bio: 'Environmental activist turned politician. Championing coastal conservation.',
        topics_interest: ['Environment', 'Fisheries', 'Tourism'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Não', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Não', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Não', date: '2023-12-13' }
        ]
    },
    {
        id: 6,
        name: 'Hon. F. Mohamed',
        district: 'Colombo',
        party: 'Opp',
        attendance: 92,
        budget_used: 95,
        last_vote: 'Não',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        email: 'f.mohamed@parliament.lk',
        phone: '+94 11 234 5688',
        bio: 'Legal professional advocating for judicial independence and minority rights.',
        topics_interest: ['Justice', 'Human Rights', 'Education'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Não', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Abstain', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Não', date: '2023-12-13' }
        ]
    },
    {
        id: 7,
        name: 'Hon. G. Kumar',
        district: 'Jaffna',
        party: 'Ind',
        attendance: 50,
        budget_used: 40,
        last_vote: 'Abstain',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        email: 'g.kumar@parliament.lk',
        phone: '+94 21 234 5678',
        bio: 'Independent voice for the northern peninsula. Focusing on resettlement and livelihood.',
        topics_interest: ['Reconciliation', 'Housing', 'Agriculture'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Abstain', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Abstain', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Abstain', date: '2023-12-13' }
        ]
    },
    {
        id: 8,
        name: 'Hon. H. Banda',
        district: 'Kurunegala',
        party: 'Gov',
        attendance: 95,
        budget_used: 100,
        last_vote: 'Sim',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        email: 'h.banda@parliament.lk',
        phone: '+94 37 234 5678',
        bio: 'Senior statesman with a focus on irrigation and regional development.',
        topics_interest: ['Irrigation', 'Regional Dev', 'Public Admin'],
        votingHistory: [
            { bill: 'Online Safety Bill', vote: 'Sim', date: '2024-01-24' },
            { bill: 'VAT Amendment Act', vote: 'Sim', date: '2023-12-11' },
            { bill: 'Budget 2024 - Third Reading', vote: 'Sim', date: '2023-12-13' }
        ]
    }
];

export const TIMELINE_EVENTS = [
    { year: '2024', title: 'Digital ID Project Approved', type: 'development', description: 'Cabinet approves massive digitization drive.' },
    { year: '2023', title: 'IMF Bailout Package Approved', type: 'debt', description: 'Sri Lanka receives USD 2.9Bn Extended Fund Facility.' },
    { year: '2022', title: 'Sovereign Debt Default', type: 'crisis', description: 'Sri Lanka suspends repayment of external debts.' },
    { year: '2019', title: 'Central Expressway Phase 2', type: 'development', description: 'Construction begins on the Kurunegala section.' },
    { year: '2017', title: 'Hambantota Port Lease', type: 'deal', description: 'Port leased for 99 years in debt-equity swap.' },
    { year: '2010', title: 'Post-War Infrastructure Boom', type: 'development', description: 'Rapid expansion of highways and ports begins.' },
];
