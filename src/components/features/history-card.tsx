import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { DiagnosisHistory } from '@/types/api';
import Link from 'next/link';
import { HiChevronDown } from "react-icons/hi";

interface HistoryCardProps {
    item: DiagnosisHistory;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ item }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const date = new Date(item.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    const mainDiagnosis = {
        name: item.disease_name,
        confidence: item.predictions[0].confidence,
        description: item.predictions[0].description
    };

    const toggleAccordion = (index: number) => (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent Link navigation when clicking accordion
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Card className="h-full overflow-hidden">
            <div className="flex flex-col h-full">
                <Link href={`/diagnose/${item.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                        <motion.img
                            src={item.image_url}
                            alt={item.plant_name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </Link>

                <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <motion.h3
                            className="text-lg font-semibold text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {item.plant_name}
                        </motion.h3>
                        <span className="text-xs text-gray-500">{date}</span>
                    </div>

                    <div className="mb-4">
                        <motion.span
                            className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {mainDiagnosis.name}
                        </motion.span>

                        <motion.div
                            className="w-full bg-gray-200 rounded-full h-1.5 mt-2"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.div
                                className="bg-primary-600 h-1.5 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: `${mainDiagnosis.confidence}%` }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            ></motion.div>
                        </motion.div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {mainDiagnosis.description}
                    </div>

                    <motion.div
                        className="border-t pt-3 flex flex-col items-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div
                            className="text-sm font-medium text-primary-600 flex items-center cursor-pointer"
                            whileHover={{ scale: 1.01 }}
                            onClick={(e) => {
                                e.preventDefault();
                                setExpandedIndex(expandedIndex === null ? 0 : null);
                            }}
                        >
                            <span>All Predictions ({item.predictions.length})</span>
                            <motion.div
                                animate={{ rotate: expandedIndex !== null ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-1"
                            >
                                <HiChevronDown size={16} />
                            </motion.div>
                        </motion.div>

                        <AnimatePresence>
                            {expandedIndex !== null && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    {item.predictions.map((prediction, index) => (
                                        <motion.div
                                            key={`${item.id}-prediction-${index}`}
                                            className="border-b border-gray-100 last:border-b-0 py-3"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div
                                                className="flex justify-between items-center cursor-pointer"
                                                onClick={toggleAccordion(index)}
                                            >
                                                <div className="flex items-center">
                                                    <span className={`h-2.5 w-2.5 rounded-full mr-2 ${index === 0 ? 'bg-primary-500' :
                                                        prediction.confidence > 50 ? 'bg-orange-500' : 'bg-gray-400'
                                                        }`}></span>
                                                    <span className="font-medium text-gray-800">{prediction.disease}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-xs text-gray-500 mr-2">
                                                        {prediction.confidence}
                                                    </span>
                                                    <motion.div
                                                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <HiChevronDown size={14} />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {expandedIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="pt-2 pl-4 text-xs text-gray-600 overflow-hidden"
                                                    >
                                                        <p>{prediction.description}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </Card>
    );
};
