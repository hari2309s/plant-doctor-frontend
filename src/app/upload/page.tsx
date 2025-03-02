'use client';

import UploadForm from "@/components/upload/UploadForm";

const UploadPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Plant Disease Diagnosis</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Upload a clear photo of your plant leaf to identify diseases and get treatment recommendations
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <UploadForm />
            </div>
        </div>
    );
}

export default UploadPage
