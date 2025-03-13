'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import { useStorageBucket } from '@/hooks/use-storage-bucket';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pestIconUrl, setPestIconUrl] = useState("");
    const { getIconUrl } = useStorageBucket();
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/diagnose', label: 'Diagnose Plant' },
        { href: '/history', label: 'History' },
        { href: '/about', label: 'About' },
    ];

    useEffect(() => {
        (async function () {
            const pestUrl = await getIconUrl("pest.png");
            setPestIconUrl(pestUrl)
        })()
    }, [getIconUrl])

    const isActiveLink = (href: string) => {
        if (href === '/' && pathname === '/') return true;
        if (href !== '/' && pathname?.startsWith(href)) return true;
        return false;
    };

    return (
        <nav className="bg-green-50 shadow-sm border-b border-green-100 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-green-600 flex items-center">
                                <div className="flex items-center gap-x-2">
                                    {pestIconUrl && <Image src={pestIconUrl} alt="Icon" width={30} height={30} unoptimized={true} />}
                                    Plant Doctor
                                </div>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActiveLink(link.href)
                                        ? 'border-green-500 text-green-600 font-semibold'
                                        : 'border-transparent text-gray-600 hover:text-green-700 hover:border-green-300'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="sm:hidden"
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActiveLink(link.href)
                                        ? 'border-green-500 text-green-600 bg-green-100 font-semibold'
                                        : 'border-transparent text-gray-600 hover:bg-green-100 hover:border-green-300 hover:text-green-700'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
