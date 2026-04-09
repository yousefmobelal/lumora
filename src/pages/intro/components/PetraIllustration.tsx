import Moon from "@/assets/images/petra/moon.png";
import Petra from "@/assets/images/petra/petra.png";
import ForegroundLeft from "@/assets/images/petra/foreground-left.png";
import ForegroundRight from "@/assets/images/petra/foreground-right.png";
import Cloud from "@/assets/images/_common/cloud-white.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImperativeHandle, useRef } from "react";
import type { IllustrationHandle } from "@/types/IllustrationHandle";
import DraggableIllustration from "@/components/shared/DraggableIllustration";

interface PetraIllustrationProps {
  ref: React.Ref<IllustrationHandle>;
  onDragEnd: (direction: string) => void;
}
const PetraIllustration: React.FC<PetraIllustrationProps> = ({
  ref,
  onDragEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useImperativeHandle(ref, () => ({
    animateOut: contextSafe((direction: "next" | "previous") => {
      return new Promise<void>((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });
        tl.to("#petra-fg-left", { x: -120, opacity: 0, duration: 0.4 })
          .to("#petra-fg-right", { x: 120, opacity: 0, duration: 0.4 }, "<")
          .to("#petra-moon", { scale: 0, opacity: 0, duration: 0.3 }, "<")
          .to(".cloud", { xPercent: 200, opacity: 0, duration: 0.4 }, "<")
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
          "#petra-moon",
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
            xPercent: 200,
          },
          "<",
        )
        .from("#petra-fg-left", {
          opacity: 0,
          x: -80,
        })
        .from(
          "#petra-fg-right",
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
        id="petra-moon"
        src={Moon}
        alt="Moon"
        className="absolute left-1/2 top-0  -translate-x-30"
      />
      <div className="absolute w-full h-full top-0 z-10">
        <DraggableIllustration
          onDragEnd={onDragEnd}
          image={Petra}
          wrapperClass="w-[100vh] max-w-[1400px] left-1/2 -translate-x-1/2"
          imageClass="w-full h-auto absolute top-8"
        />

        <div className="h-screen w-screen  absolute gap-[20vw] flex items-center justify-center overflow-hidden pointer-events-none">
          <img
            id="petra-fg-left"
            src={ForegroundLeft}
            alt="Petra Foreground Left"
            className="h-full"
          />
          <img
            id="petra-fg-right"
            src={ForegroundRight}
            alt="Petra Foreground Right"
            className="h-full"
          />
        </div>
      </div>
      <img
        src={Cloud}
        alt="cloud"
        className="absolute left-1/2 top-5 translate-x-10 opacity-30 cloud"
      />
      <div className="bg-linear-to-t from-[#444B9B] via-transparent to-transparent h-full w-full absolute z-20 pointer-events-none" />
    </div>
  );
};

export default PetraIllustration;
