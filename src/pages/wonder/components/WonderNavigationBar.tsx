import TabEditorialActive from "@/assets/images/_common/tab-editorial-active.png";
import TabEditorial from "@/assets/images/_common/tab-editorial.png";
import TabTimelineActive from "@/assets/images/_common/tab-timeline-active.png";
import TabTimeline from "@/assets/images/_common/tab-timeline.png";
import TabArtifactsActive from "@/assets/images/_common/tab-artifacts-active.png";
import TabArtifacts from "@/assets/images/_common/tab-artifacts.png";
import WonderNavigationItem from "./WonderNavigationItem";
import { Link, useLocation } from "react-router-dom";
import { wonderColors } from "@/lib/utils/wonder-colors";
import { wondersData } from "@/lib/data/wonders_data";

const WonderNavigationBar = () => {
  const location = useLocation();
  const wonderId = location.pathname.split("/")[2];
  const wonder = wondersData.find((w) => w.id === wonderId) || wondersData[0];
  return (
    <div className="w-18 rounded-tr-4xl h-screen bg-white top-0 left-0 z-10 fixed">
      <div className="pt-50 pb-30 flex flex-col items-center justify-around h-full w-full absolute top-0">
        <WonderNavigationItem
          tabIndex={0}
          Image={TabEditorial}
          activeImage={TabEditorialActive}
          alt="Editorial"
        />
        <WonderNavigationItem
          tabIndex={1}
          Image={TabTimeline}
          activeImage={TabTimelineActive}
          alt="Timeline"
        />
        <WonderNavigationItem
          tabIndex={2}
          Image={TabArtifacts}
          activeImage={TabArtifactsActive}
          alt="Artifacts"
        />
      </div>

      <Link
        to="/"
        className="size-18 rounded-full overflow-hidden border-6 border-white absolute top-20 left-2"
        style={{
          backgroundColor: wonderColors.bgColor(wonder.id),
        }}
      >
        <img
          src={wonder.wonderBtnImage}
          alt=""
          className="h-full w-full object-cover"
        />
      </Link>
    </div>
  );
};

export default WonderNavigationBar;
