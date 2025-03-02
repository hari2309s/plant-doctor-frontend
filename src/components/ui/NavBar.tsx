'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
            )}
        >
            {children}
        </Link>
    );
};

const NavBar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <img
                                className="h-8 w-auto"
                                src="/images/logo.svg"
                                alt="Plant Doctor"
                            />
                            <span className="ml-2 text-xl font-bold text-primary-700">Plant Doctor</span>
                        </Link>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-1">
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/upload">Diagnose</NavItem>
                        <NavItem href="/history">History</NavItem>
                        <NavItem href="/about">About</NavItem>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar