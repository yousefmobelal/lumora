import Moon from "@/assets/images/pyramids/moon.png";
import ForegroundBack from "@/assets/images/pyramids/foreground-back.png";
import ForegroundFront from "@/assets/images/pyramids/foreground-front.png";
import Pyramids from "@/assets/images/pyramids/pyramids.png";
import Roller2 from "@/assets/images/common/texture/roller-2-white.gif";
import Cloud from "@/assets/images/common/cloud-white.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";
import type { IllustrationHandle } from "@/types/IllustrationHandle";
import DraggableIllustration from "@/components/shared/DraggableIllustration";

interface PyramidsIllustrationProps {
  ref: React.Ref<IllustrationHandle>;
  onDragEnd: (direction: string) => void;
}
const PyramidsIllustration: React.FC<PyramidsIllustrationProps> = ({
  ref,
  onDragEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useImperativeHandle(ref, () => ({
    animateOut: contextSafe((direction: "next" | "previous") => {
      return new Promise<void>((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });
        tl.to("#pyramids-fg-front", { x: -120, opacity: 0, duration: 0.4 })
          .to("#pyramids-fg-back", { x: 120, opacity: 0, duration: 0.4 }, "<")
          .to("#pyramids-moon", { scale: 0, opacity: 0, duration: 0.3 }, "<")
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
        .from(
          "#pyramids-moon",
          {
            opacity: 0,
            scale: 0.5,
            y: -20,
          },
          "<",
        )

        .from(
          ".cloud",
          {
            xPercent: "random([200, -200])",
          },
          "<",
        )
        .from("#pyramids-fg-front", {
          opacity: 0,
          x: -80,
        })
        .from(
          "#pyramids-fg-back",
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
    <div ref={containerRef} className="bg-[#1B1A65] h-full w-full">
      <img
        id="pyramids-moon"
        src={Moon}
        alt="Moon"
        className="absolute left-1/2 top-13  translate-x-20"
      />
      <div className="absolute w-screen h-full top-0 z-10 overflow-hidden">
        <DraggableIllustration
          onDragEnd={onDragEnd}
          image={Pyramids}
          wrapperClass="w-[120vh] max-w-[1400px] left-1/2 -translate-x-1/2"
          imageClass="w-full h-auto"
        />

        <div className="w-[170vh] md:h-1/2 absolute bottom-10 md:translate-x-1/2">
          <img
            id="pyramids-fg-back"
            src={ForegroundBack}
            alt="Pyramids Foreground Back"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-[150vh] md:h-1/2 absolute bottom-10 md:-translate-x-[10vh]  max-md:-translate-x-1/3">
          <img
            id="pyramids-fg-front"
            src={ForegroundFront}
            alt="Pyramids Foreground Front"
            className="w-full h-auto object-contain"
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
          className="absolute left-1/2 top-15 -translate-x-20 opacity-30 w-100 cloud"
        />
        <img
          src={Cloud}
          alt="cloud"
          className="absolute left-1/2 top-20 translate-x-20  opacity-30 w-100 cloud"
        />

        <img
          src={Cloud}
          alt="cloud"
          className="absolute left-1/2 top-50 translate-x-60  opacity-30 w-80 cloud"
        />
      </div>
      <div className="bg-linear-to-t from-[#444B9B] via-transparent to-transparent h-full w-full absolute z-20 pointer-events-none" />
    </div>
  );
};

export default PyramidsIllustration;
