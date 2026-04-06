import type { Artifact } from "@/pages/artifact-details/types/Artifact";
import type { ArtifactResponse } from "@/types/ArtifactResponse";

export const parseArtifactData = (content: ArtifactResponse): Artifact => {
  return {
    objectId: content.objectID.toString(),
    title: content.title ?? "--",
    image: content.primaryImage ?? "--",
    date: content.objectDate ?? "--",
    objectType: content.objectName ?? "--",
    period: content.period ?? "--",
    country: content.country ?? "--",
    medium: content.medium ?? "--",
    dimension: content.dimensions ?? "--",
    classification: content.classification ?? "--",
    culture: content.culture ?? "--",
    objectBeginYear: content.objectBeginDate,
    objectEndYear: content.objectEndDate,
  };
};
