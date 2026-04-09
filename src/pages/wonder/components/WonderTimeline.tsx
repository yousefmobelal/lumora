import WonderTitle from "@/components/shared/WonderTitle";
import { wondersData } from "@/lib/data/wonders_data";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWonderYearsRange } from "@/lib/utils/getWonderYearsRange";

gsap.registerPlugin(ScrollTrigger);

const WonderTimeline = () => {
  const location = useLocation();
  const wonderId = location.pathname.split("/")[2];
  const wonder = wondersData.find((w) => w.id === wonderId) || wondersData[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#wonder-img", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });

      gsap.from("#wonder-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power1.inOut",
      });

      gsap.from("#wonder-subtitle", {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.7,
        ease: "power1.inOut",
      });

      gsap.from("#timeline", {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power1.inOut",
      });

      const timelineItems = gsap.utils.toArray<HTMLElement>(".timeline-item");
      timelineItems.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            scroller: "#timeline",
            start: "top 95%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: 30,
          duration: 0.6,
          delay: i < 3 ? i * 0.1 : 0,
          ease: "power1.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black h-screen w-full px-5 pt-10 md:ps-50 md:pe-10 md:pt-20 overflow-hidden max-lg:overflow-y-auto">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-center">
          <div
            id="wonder-img"
            className="relative h-60 md:h-90 w-90 flex justify-center items-end"
          >
            <div className="h-full w-50 rounded-t-full overflow-hidden">
              <img
                src={wonder.timelineImage}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black to-transparent" />
            <div id="wonder-title" className="absolute">
              <WonderTitle title={wonder.title} className="text-6xl" />
            </div>
          </div>
          <h2 id="wonder-subtitle" className="text-accent2 font-medium">
            {getWonderYearsRange(wonder.startYr, wonder.endYr)}
          </h2>
        </div>

        <div
          id="timeline"
          className="timeline-scroll lg:overflow-x-hidden max-lg:pb-30 flex h-full flex-col gap-5 lg:overflow-y-auto pr-2 pb-20 lg:scrollbar-thin lg:scrollbar-track-transparent lg:scrollbar-thumb-gray-500 lg:hover:scrollbar-thumb-gray-400 lg:scrollbar-thumb-rounded-full"
        >
          {Object.entries(wonder.events).map(([yearStr, description], i) => {
            const year = parseInt(yearStr);
            const isBCE = year < 0;
            return (
              <div
                key={i}
                className="bg-grey-strong w-full text-white px-3 py-5 flex items-start justify-center timeline-item"
              >
                <div>
                  <p className="font-tenor text-2xl leading-tight">{year}</p>
                  <p>{isBCE ? "BCE" : "CE"}</p>
                </div>
                <div className="w-px self-stretch bg-white ms-10 me-4" />
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WonderTimeline;
