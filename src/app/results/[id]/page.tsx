'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getDiagnosis } from '@/lib/api';
import { PlantDiagnosis } from '@/lib/types';
import Button from '@/components/ui/Button';
import ResultCard from '@/components/results/ResultCard';

const ResultsPage = () => {
    const params = useParams();
    const router = useRouter();

    const id = params.id as string;

    const [diagnosis, setDiagnosis] = useState<PlantDiagnosis | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDiagnosis() {
            try {
                setIsLoading(true);

                // Try to get from localStorage first
                const history = JSON.parse(localStorage.getItem('plantDiagnosisHistory') || '[]') as PlantDiagnosis[];
                const localDiagnosis = history.find(item => item.id === id);

                if (localDiagnosis) {
                    setDiagnosis(localDiagnosis);
                } else {
                    // If not in localStorage, fetch from API
                    const result = await getDiagnosis(id);
                    setDiagnosis(result);
                }
            } catch (err) {
                console.error('Error fetching diagnosis:', err);
                setError('Failed to load diagnosis. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchDiagnosis();
    }, [id]);

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="animate-spin w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">Loading diagnosis results...</p>
            </div>
        );
    }

    if (error || !diagnosis) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
                    <p className="text-gray-600 mb-6">{error || 'Diagnosis not found'}</p>
                    <Button onClick={() => router.push('/upload')}>
                        Return to Upload
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <ResultCard diagnosis={diagnosis} />
        </div>
    );
}

export default ResultsPage
