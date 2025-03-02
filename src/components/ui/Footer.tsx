import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <Link href="/about" className="text-gray-500 hover:text-gray-600">
                        About
                    </Link>
                    <a href="https://github.com/hari2309s/plant-doctor" className="text-gray-500 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Plant Doctor. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer
