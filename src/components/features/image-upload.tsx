import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { HiUpload, HiX } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
    onImageSelect: (file: File) => void;
    isLoading?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, isLoading = false }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
            setFile(selectedFile);
            onImageSelect(selectedFile);

            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreview(fileReader.result as string);
            };
            fileReader.readAsDataURL(selectedFile);
        }
    }, [onImageSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
        },
        maxFiles: 1,
        disabled: isLoading,
    });

    const handleClear = () => {
        setPreview(null);
        setFile(null);
    };

    return (
        <div className="w-full">
            {!preview ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDragActive ? 'border-primary-400 bg-primary-50' : 'border-gray-300 hover:border-primary-300'
                        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    {...getRootProps({ onAnimationEnd: undefined, })}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <HiUpload className="h-12 w-12 text-gray-400" />
                        <p className="text-lg font-medium">
                            {isDragActive ? 'Drop the image here' : 'Drag & drop a plant image here'}
                        </p>
                        <p className="text-sm text-gray-500">or click to select a file</p>
                        <p className="text-xs text-gray-400 mt-2">
                            Supported formats: JPEG, PNG, GIF
                        </p>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-lg overflow-hidden"
                >
                    <img
                        src={preview}
                        alt="Plant preview"
                        className="w-full h-64 object-cover rounded-lg"
                    />

                    {!isLoading && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1"
                            onClick={handleClear}
                        >
                            <HiX className="h-5 w-5" />
                        </Button>
                    )}

                    {isLoading && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};
