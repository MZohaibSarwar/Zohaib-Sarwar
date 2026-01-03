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
    title: "Waqas Asghar | Full Stack Developer & CPA/PMP",
    description: "Professional portfolio of Waqas Asghar, a Full Stack Developer & CPA/PMP with 10+ years of experience in financial project management and system integration.",
    keywords: ["Full Stack Developer", "CPA", "PMP", "Financial Systems", "ERP", "Next.js", "Technical Accounting"],
    openGraph: {
        title: "Waqas Asghar | Full Stack Developer & CPA/PMP",
        description: "Bridging the gap between high-quality development and financial project management.",
        type: "website",
        url: "https://waqasasghar.com",
        siteName: "Waqas Asghar Portfolio",
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
