// src/components/features/history-card.tsx (continued)
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { DiagnosisHistory } from '@/types/api';
import Link from 'next/link';

interface HistoryCardProps {
    item: DiagnosisHistory;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ item }) => {
    const mainDiagnosis = item.diagnosis[0]; // Assuming the first diagnosis is the most likely
    const date = new Date(item.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <Card
            className="h-full"
            hoverEffect={true}
        >
            <Link href={`/diagnose/${item.id}`} className="block h-full">
                <div className="flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                        <img
                            src={item.image_url}
                            alt={item.plant_name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">{item.plant_name}</h3>
                            <span className="text-xs text-gray-500">{date}</span>
                        </div>
                        <div className="mb-3">
                            <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                                {mainDiagnosis.disease_name}
                            </span>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                <div
                                    className="bg-primary-600 h-1.5 rounded-full"
                                    style={{ width: `${mainDiagnosis.confidence}%` }}
                                ></div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{mainDiagnosis.description}</p>
                    </div>
                </div>
            </Link>
        </Card>
    );
};
