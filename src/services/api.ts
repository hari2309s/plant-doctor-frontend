import {
  DiagnosisResponse,
  HistoryResponse,
  PlantInfoResponse,
} from "@/types/api";

const API_BASE_URL = "https://plant-doctor-mwde68pnagep.deno.dev";

export const uploadImage = async (
  file: File,
  plantName: string
): Promise<DiagnosisResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("plant_name", plantName);

  const response = await fetch(`${API_BASE_URL}/api/v1/predict`, {
    method: "POST",
    body: formData,
    mode: "cors",
    credentials: "omit",
  });

  if (!response.ok) throw new Error("Failed to analyze the image ");

  return response.json();
};

export const getDiagnosisHistory = async (): Promise<HistoryResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/v1/history`);
  return response.json();
};

export const getSingleDiagnosis = async (
  id: string
): Promise<DiagnosisResponse> => {
  const response = await fetch(`/api/v1/diagnosis/${id}`);
  return response.json();
};

export const getPlantsList = async (): Promise<PlantInfoResponse> => {
  const response = await fetch("/plants");
  return response.json();
};
