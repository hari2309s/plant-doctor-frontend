import React from "react";
import Button from "@/components/ui/Button";

interface PreviewImageProps {
    file: File;
    imageUrl: string;
    onCancel: () => void;
}

const PreviewImage = ({ file, imageUrl, onCancel }: PreviewImageProps) => {
    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="relative border rounded-lg overflow-hidden w-full max-w-lg">
                <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-auto max-h-64 object-contain"
                />
            </div>
            <div className="mt-2 text-sm text-gray-500">
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </div>
            <Button variant="outline" size="sm" className="mt-2" onClick={onCancel}>
                Choose another image
            </Button>
        </div>
    );
}

export default PreviewImage
