import { paths } from "@/config/paths";
import { wondersData } from "@/lib/data/wonders_data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TOTAL_ITEMS = 5;
const STEP_REM = 11.25;
const LAST_STEP_REM = 11.88;
const MOVE_OUT_REM = 1.25;

function getBottomPosition(index: number): string {
  if (index === 0 || index === 4) return "0px";
  if (index === 2) return "150px";
  if (index === 1 || index === 3) return "50px";
  return "40px";
}

const MIDDLE_CARD = { height: "13.75rem", width: "8.13rem" };
const DEFAULT_CARD = { height: "7.5rem", width: "7.5rem" };

const WonderArtifacts = () => {
  const navigate = useNavigate();
  const [firstHighlightIdIndex, setFirstHighlightIdIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isAnimatingRef = useRef(false);
  const firstHighlightIdIndexRef = useRef(firstHighlightIdIndex);
  const location = useLocation();
  const wonderId = location.pathname.split("/")[2];
  const wonder = wondersData.find((w) => w.id === wonderId) || wondersData[0];
  const highlights = wonder.highlights;

  useEffect(() => {
    firstHighlightIdIndexRef.current = firstHighlightIdIndex;
  }, [firstHighlightIdIndex]);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const getHighlightId = useCallback((offset: number) => {
    const idx =
      (firstHighlightIdIndexRef.current + offset + TOTAL_ITEMS) % TOTAL_ITEMS;
    return `#artifact-highlight-${idx}`;
  }, []);

  const animate = useCallback(
    (direction: 1 | -1) => {
      if (isAnimatingRef.current) return;

      contextSafe(() => {
        isAnimatingRef.current = true;

        const isNext = direction === 1;
        const sign = direction > 0 ? "-" : "+";
        const oppositeSign = direction > 0 ? "+" : "-";

        const exitId = getHighlightId(isNext ? 0 : 4);
        const card1Id = getHighlightId(isNext ? 1 : 3);
        const card2Id = getHighlightId(2);
        const card3Id = getHighlightId(isNext ? 3 : 1);
        const enterId = getHighlightId(isNext ? 4 : 0);

        const totalShift = `${oppositeSign}=${STEP_REM * 3 + LAST_STEP_REM + MOVE_OUT_REM}rem`;
        const step = `${sign}=${STEP_REM}rem`;
        const exitShift = `${sign}=20`;

        const nextIndex =
          (firstHighlightIdIndexRef.current + direction + TOTAL_ITEMS) %
          TOTAL_ITEMS;
        const nextTitle = highlights[(nextIndex + 2) % TOTAL_ITEMS].title;

        const titleEl = titleRef.current;

        gsap
          .timeline({
            defaults: { ease: "power1.inOut" },
            onComplete: () => {
              setFirstHighlightIdIndex(
                (prev) => (prev + direction + TOTAL_ITEMS) % TOTAL_ITEMS,
              );
              isAnimatingRef.current = false;
            },
          })
          .to(exitId, { x: exitShift, opacity: 0 })
          .to(exitId, { x: totalShift })
          .to(card1Id, { x: step, bottom: 0 }, "<")
          .to(
            card2Id,
            { x: step, ...DEFAULT_CARD, bottom: getBottomPosition(1) },
            "<",
          )
          .to(
            card3Id,
            { x: step, height: 220, width: 130, bottom: getBottomPosition(2) },
            "<",
          )
          .to(enterId, { x: step, bottom: getBottomPosition(3) }, "<")
          .to(exitId, { opacity: 1 })
          .to(titleEl, { x: `${sign}=40`, opacity: 0, duration: 0.25 }, "<")
          .call(() => {
            if (titleEl) titleEl.textContent = nextTitle;
          })
          .fromTo(
            titleEl,
            { x: `${oppositeSign}=40`, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3 },
          );
      })();
    },
    [contextSafe, getHighlightId, highlights],
  );

  return (
    <div
      ref={containerRef}
      className="absolute h-screen w-full overflow-hidden bg-black"
    >
      <img
        src={`https://www.wonderous.info/met/${highlights[(firstHighlightIdIndex + 2) % TOTAL_ITEMS].artifactId}.jpg`}
        alt=""
        className="h-full w-full object-cover blur-xs"
      />
      <div className="absolute top-0 h-screen w-full bg-linear-to-t from-black via-black/50 to-transparent" />

      <div className="absolute left-1/2 top-[210%] -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-off-white/80 rounded-full">
        <div className="flex gap-15">
          {Array.from({ length: TOTAL_ITEMS }).map((_, index) => {
            const isCenter =
              (firstHighlightIdIndex + 2) % TOTAL_ITEMS === index;
            const artifactId = highlights[index].artifactId;
            return (
              <div
                key={index}
                id={`artifact-highlight-${index}`}
                className="size-30 rounded-full bg-transparent border border-white p-2 relative bottom-0 left-[29%] "
                onClick={function () {
                  if (isCenter) {
                    navigate(
                      paths.artifactDetails.getHref(wonderId, artifactId),
                      {
                        state: {
                          artifact:
                            highlights[
                              (firstHighlightIdIndex + 2) % TOTAL_ITEMS
                            ],
                        },
                      },
                    );
                  }
                }}
                style={{
                  bottom: getBottomPosition(index),
                  cursor: isCenter ? "pointer" : "default",

                  ...(index === 2 ? MIDDLE_CARD : {}),
                }}
              >
                <img
                  src={`https://www.wonderous.info/met/${artifactId}.jpg`}
                  alt=""
                  className="h-full w-full object-cover rounded-full bg-off-white/80"
                />
              </div>
            );
          })}
        </div>
      </div>

      <h2
        ref={titleRef}
        className="absolute left-1/2 bottom-1/6 -translate-x-1/2 text-3xl text-black font-tenor"
      >
        {highlights[(firstHighlightIdIndex + 2) % TOTAL_ITEMS].title}
      </h2>

      <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl font-normal">
        Artifacts
      </h1>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 text-black">
        <button
          onClick={() => animate(-1)}
          className="bg-white/20 px-4 py-2 rounded text-sm backdrop-blur"
        >
          ← Prev
        </button>
        <button
          onClick={() => animate(1)}
          className="bg-white/20 px-4 py-2 rounded text-sm backdrop-blur"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default WonderArtifacts;
