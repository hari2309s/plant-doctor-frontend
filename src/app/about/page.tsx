'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HiChip, HiLightBulb, HiGlobe, HiHeart } from 'react-icons/hi';

export default function AboutPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="page-container py-12">
            <motion.h1
                className="section-title text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Plant Doctor
            </motion.h1>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto mt-12"
            >
                <Card className="p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        Plant Doctor is dedicated to making expert plant disease diagnosis accessible to everyone.
                        Using advanced artificial intelligence, we help gardeners, farmers, and plant enthusiasts
                        identify and treat plant diseases quickly and effectively, promoting healthier plants and
                        sustainable cultivation practices.
                    </p>
                    <p className="text-gray-700">
                        By combining cutting-edge technology with extensive plant pathology knowledge, we aim to
                        reduce crop losses, minimize unnecessary pesticide use, and empower people to grow thriving,
                        healthy plants regardless of their level of expertise.
                    </p>
                </Card>

                <h2 className="text-2xl font-bold mb-6">What Sets Us Apart</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                        {
                            icon: <HiChip className="h-8 w-8 text-primary-600" />,
                            title: "Advanced AI Technology",
                            description: "Our system uses state-of-the-art deep learning algorithms trained on thousands of plant disease images for accurate diagnosis."
                        },
                        {
                            icon: <HiLightBulb className="h-8 w-8 text-primary-600" />,
                            title: "Expert Knowledge Base",
                            description: "All recommendations are backed by plant pathology expertise and verified treatment approaches."
                        },
                        {
                            icon: <HiGlobe className="h-8 w-8 text-primary-600" />,
                            title: "Global Plant Coverage",
                            description: "We support a wide range of common plants and crops from various regions around the world."
                        },
                        {
                            icon: <HiHeart className="h-8 w-8 text-primary-600" />,
                            title: "Eco-Friendly Solutions",
                            description: "We prioritize sustainable and environmentally friendly treatment recommendations when possible."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full">
                                <div className="flex items-start">
                                    <div className="mr-4">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <Card className="p-8 mb-12">
                    <ol className="space-y-6">
                        <li className="flex">
                            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Image Upload</h3>
                                <p className="text-gray-700">
                                    You upload a clear image of the affected plant part through our easy-to-use interface.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">AI Analysis</h3>
                                <p className="text-gray-700">
                                    Our AI model processes the image, identifying visual symptoms and patterns that indicate specific diseases.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Diagnosis</h3>
                                <p className="text-gray-700">
                                    The system provides a diagnosis with confidence levels for potential diseases affecting your plant.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Treatment Plan</h3>
                                <p className="text-gray-700">
                                    You receive detailed treatment recommendations and prevention advice specific to the identified condition.
                                </p>
                            </div>
                        </li>
                    </ol>
                </Card>

                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Ready to diagnose your plants?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-gray-600">
                        Start using Plant Doctor today and keep your garden healthy and thriving.
                    </p>
                    <Link href="/diagnose">
                        <Button size="lg">
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
