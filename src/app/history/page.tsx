'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { HistoryCard } from '@/components/features/history-card';
import { getDiagnosisHistory } from '@/services/api';
import { DiagnosisHistory } from '@/types/api';

export default function HistoryPage() {
    const [history, setHistory] = useState<DiagnosisHistory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setIsLoading(true);
                const response = await getDiagnosisHistory();
                setHistory(response?.history?.map(item => ({
                    ...item,
                    image_url: `${item.image_url.substring(1, item.image_url.length)}`
                })));
            } catch (err) {
                setError('Failed to load diagnosis history. Please try again later.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHistory();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="font-mono">
            <section className="py-12 bg-white">
                <div className="page-container max-w-5xl mx-auto px-6">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Diagnosis History
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 text-center max-w-3xl mx-auto mb-12 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        View your past plant diagnoses and revisit treatment recommendations.
                    </motion.p>

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
                        </div>
                    ) : error ? (
                        <Card className="p-6 max-w-xl mx-auto bg-red-50 border border-red-200">
                            <p className="text-red-700">{error}</p>
                        </Card>
                    ) : history?.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <Card className="p-8 max-w-xl mx-auto border border-gray-200 rounded-lg shadow-none">
                                <h2 className="text-xl font-semibold mb-2">No diagnoses yet</h2>
                                <p className="text-gray-600 mb-6">
                                    You haven't diagnosed any plants yet. Upload a plant image to get started.
                                </p>
                                <a
                                    href="/plant-doctor-frontend/diagnose"
                                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                                >
                                    Diagnose a Plant
                                </a>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {history?.map((item) => (
                                <motion.div key={item.id} variants={item as unknown as Variants}>
                                    <HistoryCard item={item} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}