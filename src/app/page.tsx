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
            icon: <HiLightningBolt className="h-6 w-6 text-primary-600" />,
        },
        {
            title: 'Comprehensive Database',
            description: 'Access information on hundreds of plant diseases, treatments, and prevention methods.',
            icon: <HiDatabase className="h-6 w-6 text-primary-600" />,
        },
        {
            title: 'Expert Recommendations',
            description: 'Receive tailored treatment and prevention recommendations based on your specific diagnosis.',
            icon: <HiShieldCheck className="h-6 w-6 text-primary-600" />,
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-primary-50 to-white">
                <div className="page-container py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Diagnose Plant Diseases with AI Precision
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Upload a photo of your plant and get instant diagnosis, treatment recommendations, and prevention tips to keep your garden thriving.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/diagnose">
                                <Button size="lg" variant="primary" className="font-semibold">
                                    Diagnose Your Plant
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button size="lg" variant="outline" className="font-semibold">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute right-0 bottom-0 hidden lg:block w-1/3 h-full">
                    <div className="h-full w-full bg-contain bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url('/images/plants-hero.png')` }}>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="page-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">How Plant Doctor Works</h2>
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
                                <Card className="p-6 h-full flex flex-col">
                                    <div className="rounded-full bg-primary-100 p-3 w-fit mb-4">
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
            <section className="py-16 bg-gray-50">
                <div className="page-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Simple 3-Step Process</h2>
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
                                <Card className="p-6 h-full border-t-4 border-primary-500">
                                    <div className="absolute -top-5 left-6 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
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
            <section className="py-20 bg-primary-600 text-white">
                <div className="page-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to diagnose your plants?</h2>
                        <p className="max-w-2xl mx-auto mb-8 text-primary-100">
                            Start using Plant Doctor today and keep your garden healthy and thriving.
                        </p>
                        <Link href="/diagnose">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="font-semibold bg-white !text-primary-700 hover:bg-gray-100"
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
