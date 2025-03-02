import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/lib/api";
import { PlantDiagnosis } from "@/lib/types";
import PreviewImage from "./PreviewImage";
import DragDropZone from "./DragDropZone";
import Button from "../ui/Button";

const UploadForm = () => {
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileSelect = useCallback((selectedFile: File) => {
        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
        setError(null);
    }, []);

    const handleCancel = useCallback(() => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setFile(null);
        setPreviewUrl(null);
    }, [previewUrl]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            setError("Please select an image file");
            return;
        }

        try {
            setIsUploading(true);
            setError(null);

            const result = await uploadImage(file);

            // Store the diagnosis in localStorage for history feature
            const history = JSON.parse(
                localStorage.getItem("plantDiagnosisHistory") || "[]"
            ) as PlantDiagnosis[];
            localStorage.setItem(
                "plantDiagnosisHistory",
                JSON.stringify([result, ...history])
            );

            // Redirect to results page
            router.push(`/results/${result.id}`);
        } catch (err) {
            console.error("Upload error:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "An error occurred during the upload"
            );
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {!file ? (
                <DragDropZone onFileSelect={handleFileSelect} />
            ) : (
                <PreviewImage
                    file={file}
                    imageUrl={previewUrl!}
                    onCancel={handleCancel}
                />
            )}

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="flex justify-center">
                <Button
                    type="submit"
                    disabled={!file || isUploading}
                    isLoading={isUploading}
                    className="w-full sm:w-auto px-8"
                >
                    {isUploading ? "Analyzing..." : "Diagnose Plant"}
                </Button>
            </div>

            <div className="text-center text-sm text-gray-500">
                <p>Our AI will analyze your plant image and identify any diseases.</p>
                <p>
                    For best results, ensure the leaf is clearly visible and well-lit.
                </p>
            </div>
        </form>
    );
}

export default UploadForm
