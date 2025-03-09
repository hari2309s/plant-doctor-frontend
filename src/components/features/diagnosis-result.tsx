import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { PlantDiagnosis } from '@/types/api';

interface DiagnosisResultProps {
    predictions: PlantDiagnosis[];
    imageUrl: string;
}

export const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ imageUrl, predictions }) => {
    if (!predictions || predictions.length === 0) {
        return null;
    }

    const mainDiagnosis = predictions[0];

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
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-8"
        >
            <h2 className="text-2xl font-bold mb-4">Diagnosis Results</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {imageUrl && (
                    <motion.div variants={item} className="mb-6 md:mb-0">
                        <img
                            src={imageUrl}
                            alt="Diagnosed plant"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    </motion.div>
                )}

                <motion.div variants={item}>
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold text-primary-700">
                            {mainDiagnosis.disease}
                        </h3>
                        <div className="mt-2 mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-primary-600 h-2.5 rounded-full"
                                    style={{ width: `${mainDiagnosis.confidence}` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                Confidence: {mainDiagnosis.confidence}
                            </p>
                        </div>
                        <p className="text-gray-700 mb-4">{mainDiagnosis.description}</p>

                        {/* <div className="mt-4 space-y-4">
                            <div>
                                <h4 className="font-medium text-primary-800">Treatment</h4>
                                <p className="text-gray-700 mt-1">{mainDiagnosis.treatment}</p>
                            </div>

                            <div>
                                <h4 className="font-medium text-primary-800">Prevention</h4>
                                <p className="text-gray-700 mt-1">{mainDiagnosis.prevention}</p>
                            </div>
                        </div> */}
                    </Card>
                </motion.div>
            </div>

            {predictions.length > 1 && (
                <motion.div variants={item} className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Other Possible Conditions</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {predictions.slice(1).map((item, index) => (
                            <Card key={index} className="p-4">
                                <h4 className="font-medium text-primary-700">{item.disease}</h4>
                                <div className="mt-2 mb-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-secondary-500 h-2 rounded-full"
                                            style={{ width: `${item.confidence}` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Confidence: {item.confidence}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-700 line-clamp-3">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};
