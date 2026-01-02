import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
    title: "Zohaib Sarwar | Full Stack Developer & SEO Strategist",
    description: "Professional portfolio of Zohaib Sarwar, specializing in building high-performance, SEO-optimized web applications with 4+ years of experience.",
    keywords: ["Full Stack Developer", "SEO Strategist", "Next.js Developer", "Technical SEO", "Web Performance"],
    openGraph: {
        title: "Zohaib Sarwar | Full Stack Developer & SEO Strategist",
        description: "Building High-Ranking Websites with Performance and Scalability.",
        type: "website",
        url: "https://zohaibsarwar.com",
        siteName: "Zohaib Sarwar Portfolio",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(inter.className, "bg-dark text-white min-h-screen flex flex-col")}>
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
