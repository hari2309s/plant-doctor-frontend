import Button from '@/components/ui/Button';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">About Plant Doctor</h1>

                    <div className="prose max-w-none">
                        <p>
                            Plant Doctor is an AI-powered tool designed to help gardeners, farmers, and plant enthusiasts
                            identify and treat plant diseases quickly and effectively.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-2">How It Works</h2>
                        <p>
                            Our system uses deep learning models trained on thousands of images of healthy and diseased plants.
                            When you upload a photo, our AI analyzes it and compares it against known patterns of various plant diseases.
                        </p>
                        <p>
                            The system can identify a wide range of diseases affecting various plants, with a focus on common crops
                            and ornamental plants. After diagnosis, Plant Doctor provides tailored treatment recommendations to
                            help your plants recover.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-2">The Technology</h2>
                        <p>
                            This application is built using a modern tech stack:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Backend: Deno with Fresh framework for fast, secure API endpoints</li>
                            <li>Frontend: Next.js with React and TypeScript for a responsive user interface</li>
                            <li>Styling: Tailwind CSS for modern, mobile-friendly design</li>
                            <li>AI Model: Trained convolutional neural networks for image classification</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-2">Project Repository</h2>
                        <p>
                            Plant Doctor is an open-source project. You can view the source code on GitHub:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <a
                                    href="https://github.com/hari2309s/plant-doctor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 hover:underline"
                                >
                                    Backend Repository
                                </a>
                            </li>
                            <li>Frontend Repository (this project)</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <Link href="/upload">
                            <Button>Try Plant Doctor Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage
