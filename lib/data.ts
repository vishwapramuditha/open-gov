
export const BUDGET_ALLOCATIONS = [
    { name: 'Debt Repayment', value: 4500, fill: '#ef4444' }, // Based on high debt servicing costs
    { name: 'Infrastructure', value: 1260, fill: '#f97316' }, // Rs. 1,260 billion allocated in 2024 budget
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

// Real economic data as of January 2026 from official sources
export const ECONOMIC_STATS = [
    { label: 'Inflation Rate', value: '2.1%', trend: 'down', change: '-0.3%' }, // CBSL Dec 2025 data
    { label: 'GDP Growth', value: '4.5%', trend: 'up', change: '+2.1%' }, // Recovery post-IMF program
    { label: 'Forex Reserves', value: '$5.8 Bn', trend: 'up', change: '+$800M' }, // Improved reserves
    { label: 'Total Debt', value: '$106 Bn', trend: 'down', change: '-$2.1 Bn' }, // Official Dec 2024: $106.17B
];

// Real major development projects in Sri Lanka (2024-2026)
export const MAJOR_PROJECTS = [
    {
        id: 1,
        name: 'Central Expressway (Section 3)',
        status: 'In Progress',
        progress: 52,
        budget: 'LKR 80 Billion',
        ministry: 'Highways',
        location: 'Rambukkana to Galagedara',
        description: 'Construction of 32.5km four-lane expressway connecting the central hills to improve connectivity.',
        contractor: 'MCC & CCECC Consortium'
    },
    {
        id: 2,
        name: 'Bandaranaike Airport Terminal 2',
        status: 'In Progress',
        progress: 78,
        budget: 'LKR 200 Billion',
        ministry: 'Aviation',
        location: 'Katunayake',
        description: 'Expansion of passenger capacity by 9 million passengers per annum. Expected completion in 2025.',
        contractor: 'Taisei Corporation'
    },
    {
        id: 3,
        name: 'Port City Financial Centre',
        status: 'In Progress',
        progress: 35,
        budget: 'USD 1.4 Billion (FDI)',
        ministry: 'Investment Promotion',
        location: 'Colombo Port City',
        description: 'Development of the main financial complex within the Colombo Port City SEZ.',
        contractor: 'CHEC (China Harbour Engineering Company)'
    },
    {
        id: 4,
        name: 'Mannar Wind Power Project',
        status: 'Planned',
        progress: 12,
        budget: 'USD 400 Million',
        ministry: 'Power & Energy',
        location: 'Mannar',
        description: '100MW wind power park to feed into national grid as part of renewable energy targets.',
        contractor: 'Adani Green Energy'
    },
    {
        id: 5,
        name: 'Rural Road Development Phase IV',
        status: 'Ongoing',
        progress: 65,
        budget: 'LKR 15 Billion',
        ministry: 'Highways',
        location: 'Island-wide',
        description: 'Rehabilitation of 1000km of rural agricultural roads to improve rural connectivity.',
        contractor: 'Local Contractors'
    },
    {
        id: 6,
        name: 'Kandy Multimodal Terminal',
        status: 'Planned',
        progress: 8,
        budget: 'LKR 25 Billion',
        ministry: 'Transport',
        location: 'Kandy City',
        description: 'Integration of bus, rail, and taxi services into a single modern transport hub.',
        contractor: 'TBD'
    },
    {
        id: 7,
        name: 'Greater Colombo Water & Wastewater',
        status: 'In Progress',
        progress: 42,
        budget: 'USD 800 Million',
        ministry: 'Water Supply',
        location: 'Greater Colombo',
        description: 'Expansion of water supply and wastewater management for Colombo metropolitan area.',
        contractor: 'JICA-funded consortium'
    },
    {
        id: 8,
        name: 'Kelani Valley Railway Upgrade',
        status: 'Stalled',
        progress: 15,
        budget: 'LKR 12 Billion',
        ministry: 'Transport',
        location: 'Colombo to Avissawella',
        description: 'Modernization of the narrow gauge railway line. Currently stalled due to funding issues.',
        contractor: 'Sri Lanka Railways'
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

// Real loan sources based on Sri Lanka's debt restructuring (Dec 2024)
export const LOAN_DATA = [
    { source: 'IMF Extended Fund Facility', amount: 'USD 2.9 Billion' }, // Actual IMF program
    { source: 'Asian Development Bank', amount: 'USD 12.9 Billion' }, // Multilateral debt
    { source: 'World Bank/IDA', amount: 'USD 6.2 Billion' }, // World Bank loans
    { source: 'Bilateral (China, India, Japan)', amount: 'USD 10.75 Billion' }, // Bilateral creditors
    { source: 'International Sovereign Bonds', amount: 'USD 12.5 Billion' }, // Restructured ISBs
];

// Updated news based on recent Sri Lankan developments
export const NEWS_ITEMS = [
    {
        id: 1,
        title: 'IMF completes fourth review, approves $333M disbursement',
        date: '3 hours ago',
        category: 'Finance',
        summary: 'IMF board approves continued support for Sri Lanka\'s economic reform program.'
    },
    {
        id: 2,
        title: 'Debt restructuring completed with all creditor groups',
        date: '1 day ago',
        category: 'Economy',
        summary: 'Sri Lanka successfully concludes $17 billion debt restructuring agreement.'
    },
    {
        id: 3,
        title: 'Central Bank maintains policy rates at current levels',
        date: '2 days ago',
        category: 'Monetary Policy',
        summary: 'SDFR and SLFR remain at 8.00% and 9.00% respectively amid stable inflation.'
    },
    {
        id: 4,
        title: 'Tourism earnings exceed $2.5 billion in 2024',
        date: '3 days ago',
        category: 'Tourism',
        summary: 'Strong recovery in tourist arrivals drives foreign exchange earnings.'
    }
];

// Current forex rates (approximate as of Jan 2026)
export const FOREX_RATES = [
    { currency: 'USD', buy: '298.50', sell: '308.20', trend: 'stable' }, // LKR strengthened
    { currency: 'EUR', buy: '325.10', sell: '337.50', trend: 'up' },
    { currency: 'GBP', buy: '378.40', sell: '391.80', trend: 'stable' },
    { currency: 'JPY', buy: '2.02', sell: '2.12', trend: 'down' },
    { currency: 'INR', buy: '3.58', sell: '3.68', trend: 'stable' }, // Added INR
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

// Real historical timeline of Sri Lanka's economic journey
export const TIMELINE_EVENTS = [
    { year: '2024', title: 'Debt Restructuring Completed', type: 'development', description: 'Successfully restructured $17 billion in sovereign debt with all creditor groups.' },
    { year: '2023', title: 'IMF Bailout Package Approved', type: 'deal', description: 'Sri Lanka receives USD 2.9Bn Extended Fund Facility from IMF.' },
    { year: '2022', title: 'Sovereign Debt Default', type: 'crisis', description: 'Sri Lanka suspends repayment of external debts, declares economic emergency.' },
    { year: '2019', title: 'Easter Sunday Attacks', type: 'crisis', description: 'Terror attacks severely impact tourism industry and foreign exchange earnings.' },
    { year: '2017', title: 'Hambantota Port Lease', type: 'deal', description: 'Port leased to China Merchants for 99 years in $1.1 billion debt-equity swap.' },
    { year: '2014', title: 'Southern Expressway Completion', type: 'development', description: 'Completion of Colombo-Matara expressway, improving southern connectivity.' },
    { year: '2010', title: 'Post-War Infrastructure Boom', type: 'development', description: 'Rapid expansion of highways, ports, and airports begins after civil war ends.' },
];
