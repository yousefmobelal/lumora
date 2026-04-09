import TabEditorialActive from "@/assets/images/common/tab-editorial-active.png";
import TabEditorial from "@/assets/images/common/tab-editorial.png";
import TabTimelineActive from "@/assets/images/common/tab-timeline-active.png";
import TabTimeline from "@/assets/images/common/tab-timeline.png";
import TabArtifactsActive from "@/assets/images/common/tab-artifacts-active.png";
import TabArtifacts from "@/assets/images/common/tab-artifacts.png";
import WonderNavigationItem from "./WonderNavigationItem";
import { Link, useLocation } from "react-router-dom";
import { wonderColors } from "@/lib/utils/wonder-colors";
import { wondersData } from "@/lib/data/wonders_data";

const WonderNavigationBar = () => {
  const location = useLocation();
  const wonderId = location.pathname.split("/")[2];
  const wonder = wondersData.find((w) => w.id === wonderId) || wondersData[0];
  return (
    <div className="md:w-18 md:h-screen w-screen h-18 max-md:bottom-0 md:top-0 md:left-0 z-10 fixed bg-white md:rounded-tr-4xl">
      <div className="max-md:pl-20 md:pt-50 md:pb-30 flex flex-row md:flex-col items-center justify-around h-full w-full absolute max-md:bottom-0 md:top-0">
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
        className="size-18 rounded-full overflow-hidden border-6 border-white absolute max-md:bottom-2 left-4 md:top-20 md:left-2"
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
