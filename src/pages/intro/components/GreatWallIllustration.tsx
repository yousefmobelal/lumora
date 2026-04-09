import GreatWall from "@/assets/images/great_wall_of_china/great-wall.png";
import Roller2 from "@/assets/images/_common/texture/roller-2-white.gif";
import ForegroundLeft from "@/assets/images/great_wall_of_china/foreground-left.png";
import ForegroundRight from "@/assets/images/great_wall_of_china/foreground-right.png";
import Sun from "@/assets/images/great_wall_of_china/sun.png";
import Cloud from "@/assets/images/_common/cloud-white.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useImperativeHandle, useRef } from "react";
import type { IllustrationHandle } from "@/types/IllustrationHandle";
import { type Ref } from "react";
import DraggableIllustration from "@/components/shared/DraggableIllustration";

interface GreatWallIllustrationProps {
  ref: Ref<IllustrationHandle>;
  onDragEnd: (direction: string) => void;
}

const GreatWallIllustration: React.FC<GreatWallIllustrationProps> = ({
  ref,
  onDragEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useImperativeHandle(ref, () => ({
    animateOut: contextSafe((direction: "next" | "previous") => {
      return new Promise<void>((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });
        tl.to("#great-wall-fg-left", { x: -120, opacity: 0, duration: 0.4 })
          .to(
            "#great-wall-fg-right",
            { x: 120, opacity: 0, duration: 0.4 },
            "<",
          )
          .to("#great-wall-sun", { scale: 0, opacity: 0, duration: 0.3 }, "<")
          .to(
            ".cloud",
            { xPercent: "random([200, -200])", opacity: 0, duration: 0.4 },
            "<",
          )
          .to(
            "#illustration-img",
            {
              xPercent: direction === "next" ? 100 : -100,
              opacity: 0,
              duration: 0.4,
            },
            "<50%",
          );
      });
    }),
  }));

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
      });
      tl.from("#illustration-img", {
        opacity: 0,
      })
        .from("#great-wall-sun", {
          opacity: 0,
          scale: 0.5,
        })
        .from(
          ".cloud",
          {
            xPercent: "random([200, -200])",
          },
          "<",
        )
        .from("#great-wall-fg-left", {
          opacity: 0,
          x: -80,
        })
        .from(
          "#great-wall-fg-right",
          {
            opacity: 0,
            x: 80,
          },
          "<",
        );
    },
    {
      scope: containerRef,
    },
  );
  return (
    <div ref={containerRef} className="bg-[#688750] w-full h-full">
      <img
        id="great-wall-sun"
        src={Sun}
        alt="Sun"
        className="absolute left-1/2 top-13  -translate-x-30"
      />
      <div className="absolute w-full h-full top-0 z-10">
        <DraggableIllustration onDragEnd={onDragEnd} image={GreatWall} />

        <div className="flex items-center justify-center w-full gap-0 md:gap-[10vw] absolute -bottom-50">
          <img
            id="great-wall-fg-left"
            src={ForegroundLeft}
            alt="Great Wall Foreground Left"
            className="h-125 mt-20"
          />
          <img
            id="great-wall-fg-right"
            src={ForegroundRight}
            alt="Great Wall Foreground Right"
            className="h-150"
          />
        </div>
      </div>

      <div className="absolute h-full w-full top-0 left-0">
        <img
          src={Roller2}
          alt="roller"
          className="bg-contain h-full w-full opacity-15"
        />
        <img
          src={Cloud}
          alt="cloud"
          className="absolute left-1/2 top-13 opacity-30 cloud"
        />
        <img
          src={Cloud}
          alt="cloud"
          className="absolute left-1/4 top-30 opacity-30 cloud"
        />
        <img
          src={Cloud}
          alt="cloud"
          className="absolute left-0 top-1/3 opacity-30 cloud"
        />
      </div>
      <div className="bg-linear-to-t from-[#642828] via-transparent to-transparent h-full w-full absolute z-20 pointer-events-none" />
    </div>
  );
};
export default GreatWallIllustration;
