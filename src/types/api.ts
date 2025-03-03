export interface PlantDiagnosis {
  disease_name: string;
  confidence: number;
  description: string;
  treatment: string;
  prevention: string;
}

export interface DiagnosisResponse {
  success: boolean;
  message: string;
  diagnosis: PlantDiagnosis[];
  image_url?: string;
  timestamp: string;
  id: string;
}

export interface DiagnosisResult {
  imageUrl: string;
  diseaseName: string;
  plantName: string;
  confidence: number;
  timestamp: string;
  id: string;
}

export interface DiagnosisHistory {
  id: string;
  plant_name: string;
  image_url: string;
  diagnosis: PlantDiagnosis[];
  timestamp: string;
}

export interface HistoryResponse {
  success: boolean;
  message: string;
  history: DiagnosisHistory[];
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  error: string;
}

export interface Plant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  scientificName: string;
  diseases: Array<any>;
}

export interface PlantInfoResponse {
  success: boolean;
  message: string;
  plants: Plant[];
}
