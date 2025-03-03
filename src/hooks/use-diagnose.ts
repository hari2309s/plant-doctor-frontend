import { useState } from "react";
import { uploadImage } from "@/services/api";
import { DiagnosisResponse } from "@/types/api";

export const useDiagnose = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DiagnosisResponse | null>(null);

  const diagnose = async (file: File, plantName: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await uploadImage(file, plantName);
      setResult(response);
      return response;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setResult(null);
  };

  return {
    diagnose,
    reset,
    isLoading,
    error,
    result,
  };
};
