# OpenGov Sri Lanka 🇱🇰
### The National Transparency Dashboard

<p align="center">
  <img src="https://github.com/vishwapramuditha/open-gov/blob/main/lib/git-bg.jpeg?raw=true" alt="OpenGov Sri Lanka Banner" />
</p>

> **"Democracy requires a well-informed citizenry."**

**OpenGov** is a citizen-led initiative to demystify Sri Lanka's economic and political data. In an era of complexity, we build tools that make government spending, debt, and decision-making accessible to everyone—from policy researchers to the daily voter.

---

## Why We Built This
We believe that **data belongs to the people**. 

Too often, critical information about our nation's health is buried in PDF reports or complex spreadsheets. OpenGov transforms this raw data into **interactive, real-time visualizations** that tell a story. We aim to:
- **Simplify** complex economic figures (debt, tax, inflation).
- **Track** the progress of massive infrastructure projects.
- **Hold Accountable** the representatives we vote for.

---

## Key Features

### The Command Center (Dashboard)
A real-time "Bloomberg Terminal" for citizens.
- **Live Economic Stats**: Real data from Central Bank of Sri Lanka
  - National Debt: $106.17B (Dec 2024)
  - Inflation: 2.1% (Dec 2025)
  - GDP Growth: 4.5% (2024-2025)
  - Forex Reserves: $5.8B
- **Breaking News**: Latest cabinet decisions and policy updates
- **Forex Rates**: Current LKR exchange rates updated from CBSL

### Development Projects Tracker (`/projects`)
Monitor real infrastructure projects.
- **171 Large-Scale Projects**: From Ministry of Finance reports
- **Live Progress Tracking**: Airport Terminal 2 (78%), Port City (35%), Central Expressway (52%)
- **Budget Transparency**: Rs. 1,260 billion allocated for development (2024)
- **Project Details**: Contractors, locations, timelines, and status updates

### MP Watch (`/representatives`)
Know who you voted for.
- **Attendance Records**: See which MPs are showing up to Parliament
- **Voting History**: Track their stance on major bills
- **Budget Utilization**: Monitor decentralized fund spending
- **Contact Information**: Direct access to your representatives

### Whistleblower Portal (`/report`)
A safe space for integrity.
- **Secure Reporting**: Anonymous form for corruption reports
- **Privacy-First**: Encrypted submissions

### Tax Impact Calculator (`/tax-calculator`)
Make it personal.
- **Progressive Tax Brackets**: Based on real Sri Lankan tax structure
- **Visual Breakdown**: See exactly where your tax money goes
- **Budget Allocation**: Understand government spending priorities

### Economic Timeline (`/timeline`)
Context matters.
- **Historical Journey**: 2010-2024 economic milestones
- **Crisis & Recovery**: From post-war boom to 2022 default to 2024 restructuring
- **Key Events**: IMF program, debt restructuring, infrastructure projects

### Global Search (⌘K)
Find anything, instantly.
- **Cross-Platform Search**: MPs, projects, news, tenders
- **Keyboard Shortcuts**: Fast access with Cmd/Ctrl+K
- **Smart Filtering**: Real-time results as you type

---

## Data Sources

All data is sourced from official Sri Lankan government publications:
- **Central Bank of Sri Lanka (CBSL)**: Economic indicators, forex rates, inflation data
- **Ministry of Finance**: Budget allocations, debt statistics, project reports
- **Parliament of Sri Lanka**: MP information and legislative data
- **International Monetary Fund (IMF)**: Loan programs and economic assessments

See [DATA_SOURCES.md](./DATA_SOURCES.md) for complete attribution and references.

**Data Accuracy**: Last updated January 2026 with official government data.

---

## Technology Stack
Built with modern, performance-first web technologies.
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Dark Mode & Glassmorphism)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

---

## Getting Started

We welcome developers, designers, and data scientists to contribute.

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishwapramuditha/open-gov.git
   cd open-gov
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the local server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Contributing
OpenGov is **Open Source**. We need your help to:
1.  **Verify Data**: Help us fact-check stats against Central Bank reports.
2.  **Add Features**: Build new widgets or visualizations.
3.  **Translate**: Help us localize into Sinhala and Tamil.

Please see `CONTRIBUTING.md` for details.

---

## 📜 License
**Data**: Creative Commons Attribution 4.0 (CC BY 4.0). Can be freely used by journalists and researchers.
**Code**: MIT License.

---

*Built with ❤️ for Sri Lanka | Vishwa Pramuditha*
