export const TAX_BRACKETS = [
    { limit: 100000, rate: 0, label: "First 100k (Relief)" },
    { limit: 141667, rate: 0.06, label: "Next 41,667 @ 6%" },
    { limit: 183334, rate: 0.12, label: "Next 41,667 @ 12%" },
    { limit: 225000, rate: 0.18, label: "Next 41,667 @ 18%" },
    { limit: 266667, rate: 0.24, label: "Next 41,667 @ 24%" },
    { limit: 308334, rate: 0.30, label: "Next 41,667 @ 30%" },
    { limit: Infinity, rate: 0.36, label: "Balance @ 36%" },
];

/**
 * Calculates the monthly income tax based on the 2024/2025 APIT tables.
 * Each slab is roughly 500,000 LKR per annum (approx 41,667 per month).
 */
export function calculateTax(monthlyIncome: number): number {
    if (!monthlyIncome || monthlyIncome <= 100000) return 0;

    let tax = 0;
    let remainingIncome = monthlyIncome - 100000; // First 100k is tax free

    // Slab size is 500,000 / 12 = 41,666.666... let's approximate to 41,667 for simplicity in this demo
    // or use the precise cumulative calculation method often used in payroll systems.
    // For this transparency dashboard, a simple progressive calculation is sufficient.

    const slabSize = 41667;
    const rates = [0.06, 0.12, 0.18, 0.24, 0.30, 0.36];

    for (const rate of rates) {
        if (remainingIncome <= 0) break;

        // For the last rate (36%), it applies to everything remaining
        if (rate === 0.36) {
            tax += remainingIncome * rate;
            remainingIncome = 0;
        } else {
            const taxableInThisSlab = Math.min(remainingIncome, slabSize);
            tax += taxableInThisSlab * rate;
            remainingIncome -= taxableInThisSlab;
        }
    }

    return Math.floor(tax); // Round down to nearest LKR
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        maximumFractionDigits: 0
    }).format(amount);
}
