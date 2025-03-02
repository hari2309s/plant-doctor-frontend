import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";

interface DragDropZoneProps {
    onFileSelect: (file: File) => void;
    className?: string;
}

const DragDropZone = ({ onFileSelect, className }: DragDropZoneProps) => {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                onFileSelect(acceptedFiles[0]);
            }
        },
        [onFileSelect]
    );

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
        useDropzone({
            onDrop,
            accept: {
                "image/jpeg": [],
                "image/png": [],
                "image/jpg": [],
            },
            maxFiles: 1,
        });

    return (
        <div
            {...getRootProps()}
            className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                isDragActive
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-300 hover:border-primary-400",
                isDragReject && "border-red-500 bg-red-50",
                className
            )}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center space-y-2">
                <svg
                    className={cn(
                        "w-12 h-12 mb-3",
                        isDragActive ? "text-primary-500" : "text-gray-400"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                </svg>
                {isDragActive ? (
                    <p className="text-lg font-medium text-primary-600">
                        Drop the image here
                    </p>
                ) : (
                    <>
                        <p className="text-lg font-medium text-gray-700">
                            Drag & drop a leaf image here
                        </p>
                        <p className="text-sm text-gray-500">or click to browse files</p>
                        <p className="text-xs text-gray-400 mt-2">
                            Supports JPG, JPEG, PNG
                        </p>
                    </>
                )}
                {isDragReject && (
                    <p className="text-sm text-red-500 mt-2">
                        File type not supported. Please use images only.
                    </p>
                )}
            </div>
        </div>
    );
}

export default DragDropZone
