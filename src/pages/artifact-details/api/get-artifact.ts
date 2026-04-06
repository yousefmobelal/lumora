import { http } from "@/lib/api/http";
import { parseArtifactData } from "@/mappers/artifact.mapper";
import type { Artifact } from "../types/Artifact";
import type { ArtifactResponse } from "@/types/ArtifactResponse";

export async function getArtifact(id: string): Promise<Artifact> {
  const response = await http.get<ArtifactResponse>(`/objects/${id}`);
  return parseArtifactData(response.data);
}
