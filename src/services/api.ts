import supabaseClient from "@/lib/supabaseClient";
import {
  DiagnosisResponse,
  HistoryResponse,
  PlantInfoResponse,
} from "@/types/api";

const API_BASE_URL = process.env.PLANT_DOCTER_API_BASE_URL || "https://plant-doctor-bchxrqzr217v.deno.dev";

export const uploadImageAndPredict = async (
  file: File,
  plantName: string
): Promise<DiagnosisResponse> => {
  // Create a unique file name for the image
  const uniqueFileName = `${plantName.replace(/\s+/g, "_")}_${Date.now()}_${file.name}`;
  
  // Upload the image to Supabase Storage
  const { error } = await supabaseClient.storage
    .from('plant-doctor-plants-images')
    .upload(uniqueFileName, file);

  if (error) {
    throw new Error('Failed to upload image to Supabase: ' + error.message);
  }

  // Generate a signed URL (valid for 1 year)
  const expiresIn = 60 * 60 * 24 * 365;

  const { data: signedData, error: signedError } = await supabaseClient.storage
    .from('plant-doctor-plants-images')
    .createSignedUrl(uniqueFileName, expiresIn);
    
  if (signedError || !signedData) {
    throw new Error('Failed to generate signed URL: ' + (signedError?.message || 'Unknown error'));
  }
  
  const signedUrl = signedData.signedUrl;

  // Send the URL and the plant name to the backend
  const response = await fetch(`${API_BASE_URL}/api/v1/predict`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plant_name: plantName,
      image_url: signedUrl,
    }),
    mode: "cors" as RequestMode,
    credentials: "omit" as RequestCredentials,
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
