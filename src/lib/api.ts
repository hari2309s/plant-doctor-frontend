import { PlantDiagnosis } from "./types";

// const API_URL = "https://plant-doctor.deno.dev";
const API_URL = "http://localhost:8000";

export async function uploadImage(file: File): Promise<PlantDiagnosis> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData,
    mode: "cors",
    credentials: "omit",
  });

  if (!response.ok) throw new Error("Failed to analyze the image");

  return response.json();
}

export async function getDiagnosis(id: string): Promise<PlantDiagnosis> {
  const response = await fetch(`${API_URL}/diagnosis/${id}`);
  return response.json();
}

export async function getHistory(): Promise<PlantDiagnosis[]> {
  const response = await fetch(`${API_URL}/history`);
  return response.json();
}
