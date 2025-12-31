import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenGov Sri Lanka | Transparency Dashboard",
  description: "Real-time tracker for Sri Lanka's government spending, debt, and development projects. Empowering citizens with open data.",
  keywords: ["Sri Lanka", "Open Data", "Government Spending", "Debt Tracker", "Corruption Report", "Development", "OpenGov"],
  openGraph: {
    title: "OpenGov Sri Lanka | Transparency Dashboard",
    description: "Track government spending, loans, and projects in Sri Lanka.",
    url: "https://opengov.lk",
    siteName: "OpenGov Sri Lanka",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenGov Sri Lanka Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenGov Sri Lanka",
    description: "Real-time government transparency dashboard.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
