import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { twMerge } from "tailwind-merge";

interface DraggableIllustrationProps {
  onDragEnd: (direction: string) => void;
  image: string;
  imageClass?: string;
  wrapperClass?: string;
}

const DraggableIllustration = ({
  onDragEnd,
  image,
  imageClass = "",
  wrapperClass = "",
}: DraggableIllustrationProps) => {
  useGSAP(() => {
    Draggable.create("#illustration-img", {
      type: "x",
      inertia: true,
      zIndexBoost: false,
      onDragEnd: function () {
        const DRAG_THRESHOLD_PX = 200;
        const deltaX = this.x - this.startX;

        if (Math.abs(deltaX) < DRAG_THRESHOLD_PX) {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          });
          return;
        }

        const dir = deltaX < 0 ? "left" : "right";
        onDragEnd(dir);
      },
    });
  });
  return (
    <div
      id="img-wrapper"
      className={twMerge("absolute h-full w-full flex-center", wrapperClass)}
    >
      <img
        id="illustration-img"
        src={image}
        alt="Pyramids"
        className={imageClass}
      />
    </div>
  );
};

export default DraggableIllustration;
