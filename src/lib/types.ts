export interface PlantDiagnosis {
  id: string;
  fileName: string;
  originalName: string;
  prediction: {
    class: string;
    confidence: number;
  };
  timestamp: string;
  imageUrl: string;
}

export interface DiagnosisResponse {
  status: string;
  data: PlantDiagnosis;
}

export interface ErrorResponse {
  status: string;
  message: string;
}

export interface UploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
  diagnosis: PlantDiagnosis | null;
}
