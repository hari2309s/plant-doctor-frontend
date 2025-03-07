import {
  DiagnosisResponse,
  HistoryResponse,
  PlantInfoResponse,
} from "@/types/api";
import { createClient } from '@supabase/supabase-js';

const API_BASE_URL = process.env.PLANT_DOCTER_API_BASE_URL || "https://plant-doctor-m58r22yaq6nh.deno.dev";
//const API_BASE_URL = "http://localhost:8000";
const PLANT_DOCTER_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tztqrwfrxgdnghfvdluj.supabase.co";
const PLANT_DOCTER_SUPABASE_SERVICE_ROLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6dHFyd2ZyeGdkbmdoZnZkbHVqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTI3MDM4MSwiZXhwIjoyMDU2ODQ2MzgxfQ.p8JNmOc72V437eqbsVp5WGanll3PfvRXBEZQR2cwvBw";
const supabaseClient = createClient(PLANT_DOCTER_SUPABASE_URL, PLANT_DOCTER_SUPABASE_SERVICE_ROLE_KEY);

export const uploadImageAndPredict = async (
  file: File,
  plantName: string
): Promise<DiagnosisResponse> => {
  // Create a unique file name for the image (optional)
  const uniqueFileName = `${plantName.replace(/\s+/g, "_")}_${Date.now()}_${file.name}`;
  
  // Upload the image to Supabase Storage
  const { error } = await supabaseClient.storage
    .from('plant-doctor-plants-images')
    .upload(uniqueFileName, file);

  if (error) {
    throw new Error('Failed to upload image to Supabase: ' + error.message);
  }

  // Generate a signed URL (valid for 1 hour)
  const { data: signedData, error: signedError } = await supabaseClient.storage
    .from('plant-doctor-plants-images')
    .createSignedUrl(uniqueFileName, 60 * 60);
    
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
