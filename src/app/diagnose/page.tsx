'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageUpload } from '@/components/features/image-upload';
import { DiagnosisResult } from '@/components/features/diagnosis-result';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useDiagnose } from '@/hooks/use-diagnose';
import { DiagnosisResponse } from '@/types/api';

export default function DiagnosePage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [plantName, setPlantName] = useState<string>('');
    const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResponse | null>(null);
    const { diagnose, isLoading, error } = useDiagnose();

    const handleImageSelect = (file: File) => {
        setSelectedFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedFile || !plantName) {
            return;
        }

        const result = await diagnose(selectedFile, plantName);

        if (result) {
            setDiagnosisResult(result);
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setPlantName('');
        setDiagnosisResult(null);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
                        Diagnose Your Plant
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 text-center max-w-3xl mx-auto mb-12 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Upload a clear image of the affected plant part and get an instant diagnosis with treatment recommendations.
                    </motion.p>

                    {!diagnosisResult ? (
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                        >
                            <Card className="max-w-2xl mx-auto p-6 border border-gray-200 rounded-lg shadow-none">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="plantName"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Plant Name
                                        </label>
                                        <input
                                            type="text"
                                            id="plantName"
                                            value={plantName}
                                            onChange={(e) => setPlantName(e.target.value)}
                                            placeholder="E.g., Tomato, Rose, Basil"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload Plant Image
                                        </label>
                                        <ImageUpload
                                            onImageSelect={handleImageSelect}
                                            isLoading={isLoading}
                                        />
                                    </div>

                                    {error && (
                                        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                                            {error}
                                        </div>
                                    )}

                                    <div className="flex justify-end">
                                        <Button
                                            type="submit"
                                            disabled={!selectedFile || !plantName || isLoading}
                                            isLoading={isLoading}
                                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
                                        >
                                            Diagnose Plant
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DiagnosisResult
                                imageUrl={diagnosisResult.image_url!}
                                predictions={diagnosisResult.predictions}
                            />

                            <div className="text-center mt-12">
                                <Button
                                    variant="outline"
                                    onClick={handleReset}
                                    className="mx-auto font-semibold border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-800"
                                >
                                    Diagnose Another Plant
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
