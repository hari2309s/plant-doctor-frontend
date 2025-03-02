import NavBar from '@/components/ui/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
    title: 'Plant Doctor - AI Plant Disease Diagnosis',
    description: 'Diagnose plant diseases with AI technology. Upload a photo and get instant results.',
};

const RootLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col bg-gray-50">
                <NavBar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout
