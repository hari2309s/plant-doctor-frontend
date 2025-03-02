'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlantDiagnosis } from '@/lib/types';
import { formatDate, getConfidenceColor, getConfidencePercentage } from '@/lib/utils';
import Button from '@/components/ui/Button';

const HistoryPage = () => {
    const [history, setHistory] = useState<PlantDiagnosis[]>([]);

    useEffect(() => {
        // Load history from localStorage
        const storedHistory = JSON.parse(localStorage.getItem('plantDiagnosisHistory') || '[]') as PlantDiagnosis[];
        setHistory(storedHistory);
    }, []);

    const clearHistory = () => {
        localStorage.removeItem('plantDiagnosisHistory');
        setHistory([]);
    };

    if (history.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Diagnosis History</h1>
                    <p className="text-gray-600 mb-6">You haven't diagnosed any plants yet.</p>
                    <Link href="/upload">
                        <Button>Diagnose a Plant</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Diagnosis History</h1>
                <Button variant="outline" onClick={clearHistory}>Clear History</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {history.map((item) => (
                    <Link href={`/results/${item.id}`} key={item.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.imageUrl}
                                    alt={item.prediction.class}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.prediction.class.replace(/_/g, ' ')}
                                    </h3>
                                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${getConfidenceColor(item.prediction.confidence)}`}>
                                        {getConfidencePercentage(item.prediction.confidence)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    {formatDate(item.timestamp)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HistoryPage
