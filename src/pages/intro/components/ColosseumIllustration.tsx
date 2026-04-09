import Colosseum from "@/assets/images/colosseum/colosseum.png";
import Roller1 from "@/assets/images/_common/texture/roller-1-white.gif";
import ForegroundLeft from "@/assets/images/colosseum/foreground-left.png";
import ForegroundRight from "@/assets/images/colosseum/foreground-right.png";
import Sun from "@/assets/images/colosseum/sun.png";
import Cloud from "@/assets/images/_common/cloud-white.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useImperativeHandle, useRef } from "react";
import type { IllustrationHandle } from "@/types/IllustrationHandle";
import DraggableIllustration from "@/components/shared/DraggableIllustration";

interface ColosseumIllustrationProps {
  ref: React.Ref<IllustrationHandle>;
  onDragEnd: (direction: string) => void;
}

const ColosseumIllustration: React.FC<ColosseumIllustrationProps> = ({
  ref,
  onDragEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useImperativeHandle(ref, () => ({
    animateOut: contextSafe((direction: "next" | "previous") => {
      return new Promise<void>((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });
        tl.to("#colosseum-fg-left", { y: 120, opacity: 0, duration: 0.4 })
          .to("#colosseum-fg-right", { y: 120, opacity: 0, duration: 0.4 }, "<")
          .to("#colosseum-sun", { scale: 0, opacity: 0, duration: 0.3 }, "<")
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
        .from("#colosseum-sun", {
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
        .from("#colosseum-fg-left", {
          opacity: 0,
          x: -80,
        })
        .from(
          "#colosseum-fg-right",
          {
            opacity: 0,
            x: 80,
          },
          "<",
        );
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      id="colosseum"
      className="bg-[#4AA39D] w-full h-full"
    >
      <img
        id="colosseum-sun"
        src={Sun}
        alt="Sun"
        className="absolute left-1/2 top-13  w-40"
      />
      <div className="absolute w-full h-full top-0 z-10">
        <DraggableIllustration
          onDragEnd={onDragEnd}
          image={Colosseum}
          imageClass="w-150"
        />

        <div className="w-screen absolute -bottom-15 flex items-center justify-center gap-0 md:gap-[15vw] pointer-events-none">
          <img
            id="colosseum-fg-left"
            src={ForegroundLeft}
            alt="Colosseum Foreground Left"
            className="h-115 mt-30"
          />
          <img
            id="colosseum-fg-right"
            src={ForegroundRight}
            alt="Colosseum Foreground Right"
            className="h-120 mt-40"
          />
        </div>
      </div>
      <div className="absolute h-full w-full top-0 left-0">
        <img
          src={Roller1}
          alt="roller"
          className="bg-contain h-full w-full opacity-70"
        />

        <img
          src={Cloud}
          alt="cloud"
          className="absolute left-0 top-1/3 opacity-30 cloud "
        />
      </div>
      <div className="bg-linear-to-t from-[#1E736D] via-transparent to-transparent h-full w-full absolute z-20 pointer-events-none" />
    </div>
  );
};
export default ColosseumIllustration;
