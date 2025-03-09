export interface PlantDiagnosis {
  disease: string;
  confidence: number;
  description: string;
}

export interface DiagnosisResponse {
  success: boolean;
  model: string;
  plant_name: string;
  disease_name: string;
  predictions: PlantDiagnosis[];
  image_url?: string;
  created_at: string;
  timestamp: string;
  id: string;
  additional_info?: Record<string, unknown>;
  treatment: string;
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
  disease_name: string;
  image_url: string;
  predictions: PlantDiagnosis[];
  created_at: string;
  additional_info: Record<string, unknown>;
}

export interface HistoryResponse {
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
