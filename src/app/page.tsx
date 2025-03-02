import Button from '@/components/ui/Button';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <div className="sm:text-center lg:text-left px-4 sm:px-6 lg:px-0">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block">Diagnose Plant</span>
                                        <span className="block text-primary-600">Diseases Instantly</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Upload a photo of your plant and get instant AI-powered diagnosis.
                                        Identify diseases, pests, and nutrient deficiencies in seconds.
                                    </p>
                                    <div className="mt-8 sm:mt-10">
                                        <Link href="/upload">
                                            <Button size="lg" className="px-8 py-3 text-base font-medium">
                                                Start Diagnosis
                                            </Button>
                                        </Link>
                                        <Link href="/about">
                                            <Button variant="outline" className="ml-3 px-8 py-3 text-base font-medium">
                                                Learn More
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/images/healthy-plant.jpg"
                        alt="Healthy plant"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Take better care of your plants
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Our AI-powered platform helps you identify and treat plant diseases quickly and efficiently.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {[
                                {
                                    title: 'Instant Diagnosis',
                                    description: 'Get results within seconds of uploading a photo of your plant.',
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'Treatment Recommendations',
                                    description: 'Receive customized treatment plans based on the identified disease.',
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'Easy to Use',
                                    description: 'Simply take a photo or upload an existing one from your device.',
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: 'History Tracking',
                                    description: 'Keep track of all your previous plant diagnoses and treatments.',
                                    icon: (
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                },
                            ].map((feature, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        {feature.icon}
                                    </div>
                                    <div className="ml-16">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                                        <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
