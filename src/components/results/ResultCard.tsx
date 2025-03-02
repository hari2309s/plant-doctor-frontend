import React from 'react';
import { PlantDiagnosis } from '@/lib/types';
import { formatDate, getConfidenceColor, getConfidencePercentage } from '@/lib/utils';
import Link from 'next/link';
import DiseaseSummary from './DiseaseSummary';
import Button from '../ui/Button';
import TreatmentSteps from './TreatmentSteps';

interface ResultCardProps {
    diagnosis: PlantDiagnosis;
}

const ResultCard = ({ diagnosis }: ResultCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={diagnosis.imageUrl}
                                alt={diagnosis.prediction.class}
                                className="w-full h-auto object-cover aspect-square"
                            />
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            Uploaded: {formatDate(diagnosis.timestamp)}
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Diagnosis Result
                        </h1>

                        <div className="mt-4">
                            <div className="flex items-center justify-between py-2 border-b">
                                <span className="text-gray-700 font-medium">Condition:</span>
                                <span className="font-semibold">{diagnosis.prediction.class}</span>
                            </div>

                            <div className="flex items-center justify-between py-2 border-b">
                                <span className="text-gray-700 font-medium">Confidence:</span>
                                <span className={`font-semibold ${getConfidenceColor(diagnosis.prediction.confidence)}`}>
                                    {getConfidencePercentage(diagnosis.prediction.confidence)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between py-2 border-b">
                                <span className="text-gray-700 font-medium">Diagnosis ID:</span>
                                <span className="font-mono text-sm text-gray-600">{diagnosis.id}</span>
                            </div>
                        </div>

                        <DiseaseSummary diagnosisClass={diagnosis.prediction.class} />

                        <div className="mt-6">
                            <Link href="/upload">
                                <Button variant="outline" className="mr-2">
                                    New Diagnosis
                                </Button>
                            </Link>
                            <Link href="/history">
                                <Button variant="ghost">
                                    View History
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 border-t">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Recommended Treatment
                </h2>
                <TreatmentSteps diagnosisClass={diagnosis.prediction.class} />
            </div>
        </div>
    );
}

export default ResultCard
