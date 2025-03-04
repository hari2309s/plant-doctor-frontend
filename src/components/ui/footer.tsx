import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 mt-16">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-2 space-x-6">
                        <Link href="/about" className="text-gray-500 hover:text-gray-600">
                            About
                        </Link>
                        <Link href="/privacy" className="text-gray-500 hover:text-gray-600">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-gray-600">
                            Terms
                        </Link>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-500">
                            &copy; {new Date().getFullYear()} Plant Doctor. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
