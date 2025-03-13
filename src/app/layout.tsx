import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'], display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Plant Doctor - AI Plant Disease Detection',
    description: 'Identify and treat plant diseases using AI technology',
    icons: "/plant-doctor-frontend/icons/favicon.ico",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen font-mono">
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
