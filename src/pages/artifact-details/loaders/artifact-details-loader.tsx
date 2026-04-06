import { queryClient } from "@/lib/utils/queryClient";
import { queryKeys } from "@/lib/utils/queryKeys";
import { getArtifact } from "../api/get-artifact";

export const ArtifactDetailsLoader = async ({
  params,
}: {
  params: { artifactId: string };
}) => {
  const artifactId = params.artifactId;
  await queryClient.prefetchQuery({
    queryKey: queryKeys.artifact(artifactId),
    queryFn: () => getArtifact(artifactId),
  });

  return null;
};
