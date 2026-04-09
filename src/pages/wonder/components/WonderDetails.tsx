import Roller2 from "@/assets/images/_common/texture/roller-2-white.gif";
import CompassFull from "@/assets/images/_common/compass-full.svg";
import IntroMask1 from "@/assets/images/_common/intro-mask-1.png";
import IntroMask2 from "@/assets/images/_common/intro-mask-2.png";
import IntroMask3 from "@/assets/images/_common/intro-mask-3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { useLocation } from "react-router-dom";
import { wondersData } from "@/lib/data/wonders_data";
import { wonderColors } from "@/lib/utils/wonder-colors";
import WonderTitle from "@/components/shared/WonderTitle";
import { getWonderYearsRange } from "@/lib/utils/getWonderYearsRange";

const WonderDetails = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const wonderId = location.pathname.split("/")[2];
  const wonder = wondersData.find((w) => w.id === wonderId) || wondersData[0];

  useGSAP(() => {
    gsap.to(".compass", {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const container = document.querySelector("#wonder-images-wrapper");
      const totalScroll = container!.scrollWidth - window.innerWidth;
      gsap.to("#wonder-images", {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: "#wonder-images-wrapper",
          start: "top 5%",
          end: `+=${totalScroll + 20}`,
          scrub: 1,
          pin: true,
        },
      });
    });

    const firstParaSplit = SplitText.create("#wonder-history-info", {
      type: "lines",
      mask: "lines",
    });
    gsap.from(firstParaSplit.lines, {
      yPercent: 110,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "#wonder-history-info",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const bodyParagraphs = gsap.utils.toArray<HTMLElement>(".wonder-body-p");
    bodyParagraphs.forEach((el) => {
      const split = SplitText.create(el, { type: "lines", mask: "lines" });
      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(".wonder-pullquote", {
      x: -50,
      opacity: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".wonder-pullquote",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".wonder-pullquote-bar", {
      scaleY: 0,
      transformOrigin: "top center",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".wonder-pullquote",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const lastParaSplit = SplitText.create("#wonder-last-p", {
      type: "words",
    });
    gsap.from(lastParaSplit.words, {
      opacity: 0,
      y: 15,
      rotationX: -45,
      transformOrigin: "top center",
      ease: "back.out(1.7)",
      stagger: 0.03,
      scrollTrigger: {
        trigger: "#wonder-last-p",
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });

    const hellenisticSplit = SplitText.create("#wonder-hellenistic-p", {
      type: "chars",
    });
    gsap.from(hellenisticSplit.chars, {
      opacity: 0,
      color: "#9fa8da",
      ease: "power1.in",
      stagger: { each: 0.015, from: "start" },
      scrollTrigger: {
        trigger: "#wonder-hellenistic-p",
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".wonder-map-figure", {
      clipPath: "inset(0 0 100% 0)",
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".wonder-map-figure",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.utils.toArray<HTMLElement>(".wonder-divider-line").forEach((el) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });
  });

  function getMaskImage(index: number) {
    const maskImages = [IntroMask1, IntroMask2, IntroMask3];
    return maskImages[index % maskImages.length];
  }
  return (
    <div
      ref={containerRef}
      className="w-full absolute overflow-x-hidden"
      style={{
        backgroundColor: wonderColors.bgColor(wonder.id),
      }}
    >
      <div
        className="h-50 w-full relative"
        style={{
          backgroundColor: wonderColors.fgColor(wonder.id),
        }}
      >
        <img
          src={Roller2}
          alt="roller"
          className="bg-contain h-full w-full opacity-20"
        />
        <img
          src={wonder.illustrationBackImage}
          className="absolute left-1/2 top-0 size-15 -translate-x-20"
        />
        <img
          src={wonder.illustrationImage}
          className="h-50 left-1/2 top-10 absolute -translate-x-1/2"
        />
      </div>

      <div className="mt-15 col-center">
        <div className="flex-center">
          <div className="wonder-divider-line h-px w-80 bg-black" />
          <span className="mx-5 uppercase text-white font-raleway text-nowrap">
            {wonder.subTitle}
          </span>
          <div className="wonder-divider-line h-px w-80 bg-black" />
        </div>
        <WonderTitle title={wonder.title} className="mt-5" />
        <h2 className="mt-5">{wonder.regionTitle}</h2>
        <img src={CompassFull} alt="compass" className="compass" />
        <p className="text-white text-sm font-bold mt-5">
          {getWonderYearsRange(wonder.startYr, wonder.endYr)}
        </p>
      </div>

      <div id="wonder-images-wrapper" className="w-full overflow-hidden mt-10">
        <div
          id="wonder-images"
          className="md:ps-20 md:h-150 flex md:flex-row flex-col md:gap-1 "
        >
          {wonder.galleryImages.map((imgSrc, index) => (
            <div
              key={index}
              className="h-full aspect-square relative shrink-0 wonder-image"
            >
              <img src={imgSrc} alt="" className="absolute h-full w-full" />
              <img
                src={getMaskImage(index)}
                alt=""
                className="absolute h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        id="wonder-info"
        className="bg-off-white pt-20 pb-50 max-md:px-5 text-body"
      >
        <div className="max-w-3xl mx-auto space-y-10">
          <p id="wonder-history-info" className="style-first-char">
            {wonder.historyInfo1}
          </p>

          <p className="wonder-body-p">{wonder.historyInfo2}</p>

          <div className="wonder-pullquote flex-center gap-2">
            <div className="wonder-pullquote-bar h-10 bg-accent3 w-px" />
            <p className="text-start font-raleway italic font-medium leading-relaxed text-black">
              {wonder.callout}
            </p>
          </div>

          <p className="wonder-body-p">{wonder.historyInfo3}</p>

          <p className="wonder-body-p">{wonder.historyInfo4}</p>

          <p id="wonder-last-p" className="style-first-char">
            {wonder.constructionInfo1}
          </p>

          <p id="wonder-hellenistic-p">{wonder.constructionInfo2}</p>
        </div>

        <figure className="wonder-map-figure w-full max-w-3xl mx-auto mt-10">
          <iframe
            title="Petra Map"
            src={`https://www.google.com/maps?q=${wonder.lat},${wonder.lng}&output=embed`}
            className="w-full h-100 border-0 rounded-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            {wonder.mapCaption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default WonderDetails;
