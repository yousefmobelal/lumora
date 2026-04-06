import { useSearchParams } from "react-router-dom";
import WonderNavigationBar from "../components/WonderNavigationBar";
import WonderDetails from "../components/WonderDetails";
import WonderTimeline from "../components/WonderTimeline";
import WonderArtifacts from "../components/WonderArtifacts";

const WonderPage = () => {
  const [searchParams] = useSearchParams();
  const tab = +(searchParams.get("t") || "0");

  function getContent() {
    switch (tab) {
      case 0:
        return <WonderDetails />;
      case 1:
        return <WonderTimeline />;
      case 2:
        return <WonderArtifacts />;
      default:
        break;
    }
  }
  return (
    <div className="absolute inset-0">
      {getContent()}
      <WonderNavigationBar />
    </div>
  );
};

export default WonderPage;
