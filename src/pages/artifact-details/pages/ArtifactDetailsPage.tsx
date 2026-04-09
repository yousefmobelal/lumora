import { queryKeys } from "@/lib/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getArtifact } from "../api/get-artifact";
import { QueryBoundary } from "@/components/shared/QueryBoundary";
import CompassFull from "@/assets/images/common/compass-full.svg";
import ArtifactDetailsInfoRow from "../components/ArtifactDetailsInfoRow";
import PreviousArrow from "@/assets/images/common/icons/icon-back.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ArtifactDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const artifactId = location.pathname.split("/").pop() || "";
  const queryResult = useQuery({
    queryKey: queryKeys.artifact(artifactId),
    queryFn: () => getArtifact(artifactId),
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
    });
    tl.from("#culture", { opacity: 0 })
      .from("#title", { opacity: 0 }, "<50%")
      .from(".compass-line", {
        width: 0,
      })
      .from(
        ".compass",
        {
          rotation: -360,
        },
        "<",
      )
      .from(".artifact-info-row", {
        opacity: 0,
        x: 80,
        stagger: 0.1,
      });
  });

  return (
    <QueryBoundary queryResult={queryResult}>
      {(artifact) => (
        <div className="bg-black h-screen w-full font-tenor absolute">
          <button
            className="circle-btn fixed top-4 left-4 z-10"
            onClick={() => navigate(-1)}
          >
            <img src={PreviousArrow} alt="" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
            <div className="h-full w-full flex-center">
              <img
                src={`https://www.wonderous.info/met/${artifact.objectId}.jpg`}
                alt={artifact.title}
              />
            </div>
            <div className="h-full w-full bg-grey-strong col-center p-5 md:p-20">
              <h2 id="culture" className="text-accent1 uppercase">
                {artifact.culture}
              </h2>
              <h1 id="title" className="text-3xl font-tenor leading-none">
                {artifact.title}
              </h1>
              <div className="flex-center w-full my-8">
                <div className="h-[0.5px] w-full bg-grey-medium compass-line" />
                <img src={CompassFull} alt="compass" className="compass mx-4" />
                <div className="h-[0.5px] w-full bg-grey-medium compass-line" />
              </div>

              <div className="flex flex-col gap-4">
                <ArtifactDetailsInfoRow label="Date" value={artifact.date} />
                <ArtifactDetailsInfoRow
                  label="Period"
                  value={artifact.period}
                />
                <ArtifactDetailsInfoRow
                  label="Geography"
                  value={artifact.country}
                />
                <ArtifactDetailsInfoRow
                  label="Medium"
                  value={artifact.medium}
                />
                <ArtifactDetailsInfoRow
                  label="Dimension"
                  value={artifact.dimension}
                />
                <ArtifactDetailsInfoRow
                  label="Classification"
                  value={artifact.classification}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </QueryBoundary>
  );
};

export default ArtifactDetailsPage;
