import PreviousArrow from "@/assets/images/_common/icons/icon-back.png";
import NextArrow from "@/assets/images/_common/icons/icon-next-large.png";
import { ChevronDown } from "lucide-react";

import GreatWallIllustration from "../components/GreatWallIllustration";
import React, { useEffect, useRef, useState, type JSX } from "react";
import PetraIllustration from "../components/PetraIllustration";
import CollosseumIllustration from "../components/ColosseumIllustration";
import type { IllustrationHandle } from "@/types/IllustrationHandle";
import PyramidsIllustration from "../components/PyramidsIllustration";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import WonderTitle from "@/components/shared/WonderTitle";

interface IllustrationProps {
  id: string;
  title: string;
  element: JSX.Element;
}
const IntroPage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<IllustrationHandle>(null);
  const isAnimating = useRef(false);
  const [currentIllustrationIndex, setCurrentIllustrationIndex] = useState(0);
  const totalIllustrationsCount = 4;
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(() => {
    gsap.set("#indicator-0", { width: 20 });
  }, []);

  const navigate = async (direction: "next" | "previous") => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    await illustrationRef.current?.animateOut(direction);
    const newIndex =
      direction === "next"
        ? (currentIllustrationIndex + 1) % totalIllustrationsCount
        : (currentIllustrationIndex - 1 + totalIllustrationsCount) %
          totalIllustrationsCount;
    contextSafe(() => {
      const tl = gsap.timeline();
      tl.to("#indicator-" + newIndex, {
        width: 20,
        duration: 0.3,
      }).to(
        "#indicator-" + currentIllustrationIndex,
        {
          width: 8,
          duration: 0.3,
        },
        "<",
      );
    })();

    setCurrentIllustrationIndex(newIndex);

    isAnimating.current = false;
  };
  const handleDragEnd = (direction: string) => {
    navigate(direction === "left" ? "previous" : "next");
  };

  const illustrations: IllustrationProps[] = [
    {
      id: "pyramids",
      title: "Pyramids of Giza",
      element: (
        <PyramidsIllustration
          key="pyramids"
          ref={illustrationRef}
          onDragEnd={handleDragEnd}
        />
      ),
    },
    {
      id: "great_wall_of_china",
      title: "The Great Wall",
      element: (
        <GreatWallIllustration
          key="great-wall"
          ref={illustrationRef}
          onDragEnd={handleDragEnd}
        />
      ),
    },
    {
      id: "petra",
      title: "Petra",
      element: (
        <PetraIllustration
          key="petra"
          ref={illustrationRef}
          onDragEnd={handleDragEnd}
        />
      ),
    },
    {
      id: "colosseum",
      title: "Colosseum",
      element: (
        <CollosseumIllustration
          key="colosseum"
          ref={illustrationRef}
          onDragEnd={handleDragEnd}
        />
      ),
    },
  ];

  const handleNext = () => navigate("next");
  const handlePrevious = () => navigate("previous");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") handleNext();
    if (event.key === "ArrowLeft") handlePrevious();
  };

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const currentIllustration = illustrations[currentIllustrationIndex];
  return (
    <main
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="overflow-hidden h-screen w-full outline-none select-none absolute z-0"
    >
      {currentIllustration.element}

      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 col-center">
        <WonderTitle title={currentIllustration.title} />
        <div className="flex-center gap-2 mt-10">
          {Array.from({ length: illustrations.length }).map((_, index) => {
            return (
              <div
                id={`indicator-${index}`}
                key={index}
                className="bg-white rounded-full h-2 w-2"
              />
            );
          })}
        </div>

        <Link
          to={`/wonder/${currentIllustration.id}?t=0`}
          className="size-fit mt-10 hover:bg-white/20 cursor-pointer rounded-lg transition-colors"
        >
          <ChevronDown className="text-white size-10" />
        </Link>
      </div>

      <div className="absolute top-1/2 flex justify-between w-full px-5 md:px-[15%] z-100">
        <button className="circle-btn" onClick={handlePrevious}>
          <img src={PreviousArrow} alt="" />
        </button>
        <button className="circle-btn" onClick={handleNext}>
          <img src={NextArrow} alt="" />
        </button>
      </div>
    </main>
  );
};

export default IntroPage;
