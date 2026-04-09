import { queryClient } from "@/lib/utils/queryClient";
import { queryKeys } from "@/lib/utils/queryKeys";
import type { LoaderFunctionArgs } from "react-router-dom";
import { getArtifact } from "../api/get-artifact";

export const ArtifactDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const artifactId = params.artifactId;

  if (!artifactId) {
    throw new Response("Artifact id is required", { status: 400 });
  }

  await queryClient.prefetchQuery({
    queryKey: queryKeys.artifact(artifactId),
    queryFn: () => getArtifact(artifactId),
  });

  return null;
};
