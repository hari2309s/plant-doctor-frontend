'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HiLightningBolt, HiDatabase, HiShieldCheck } from 'react-icons/hi';

export default function Home() {
    const features = [
        {
            title: 'Instant Diagnosis',
            description: 'Get accurate plant disease diagnosis within seconds using advanced AI technology.',
            icon: <HiLightningBolt className="h-6 w-6 text-green-600" />,
        },
        {
            title: 'Comprehensive Database',
            description: 'Access information on hundreds of plant diseases, treatments, and prevention methods.',
            icon: <HiDatabase className="h-6 w-6 text-green-600" />,
        },
        {
            title: 'Expert Recommendations',
            description: 'Receive tailored treatment and prevention recommendations based on your specific diagnosis.',
            icon: <HiShieldCheck className="h-6 w-6 text-green-600" />,
        },
    ];

    return (
        <div className="font-mono">
            {/* Hero Section */}
            <section className="py-20 bg-white text-center">
                <div className="page-container max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Diagnose Plant Diseases with AI Precision
                        </h1>
                        <p className="text-xl text-gray-700 mb-12">
                            Upload a photo of your plant and get instant diagnosis, treatment recommendations, and prevention tips to keep your garden thriving.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            <Link href="/diagnose">
                                <Button
                                    size="lg"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md"
                                >
                                    Diagnose Your Plant
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="font-semibold border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-md"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="page-container max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">How Plant Doctor Works</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Our cutting-edge AI technology makes plant disease diagnosis simple and accurate.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full flex flex-col border border-gray-200 rounded-lg shadow-sm bg-green-50 hover:bg-green-100 transition-colors">
                                    <div className="mb-4 text-green-600">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="page-container max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Simple 3-Step Process</h2>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            Diagnose your plant diseases in just a few simple steps.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Take a Photo',
                                description: 'Capture a clear image of the affected plant part (leaf, stem, fruit, etc.).',
                            },
                            {
                                step: '02',
                                title: 'Upload & Analyze',
                                description: 'Upload your photo and our AI will analyze the symptoms instantly.',
                            },
                            {
                                step: '03',
                                title: 'Get Results',
                                description: 'Receive a detailed diagnosis with treatment and prevention recommendations.',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <Card className="p-6 h-full border border-gray-200 rounded-lg shadow-sm bg-green-50 hover:bg-green-100 transition-colors">
                                    <div className="absolute -top-5 left-6 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div className="pt-4">
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-white text-gray-800 border-t border-gray-200">
                <div className="page-container max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to diagnose your plants?</h2>
                        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
                            Start using Plant Doctor today and keep your garden healthy and thriving.
                        </p>
                        <Link href="/diagnose">
                            <Button
                                size="lg"
                                className="font-semibold bg-green-600 hover:bg-green-700 text-white"
                            >
                                Get Started Now
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
