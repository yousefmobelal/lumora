import { paths } from "@/config/paths";
import IntroPage from "@/pages/intro/pages/IntroPage";
import WonderPage from "@/pages/wonder/pages/WonderPage";
import NotFoundPage from "@/pages/not-found/pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";
import ArtifactDetailsPage from "@/pages/artifact-details/pages/ArtifactDetailsPage";
import { ArtifactDetailsLoader } from "@/pages/artifact-details/loaders/artifact-details-loader";

export const router = createBrowserRouter([
  { path: paths.intro.path, element: <IntroPage /> },
  { path: paths.wonder.path, element: <WonderPage /> },
  {
    path: paths.artifactDetails.path,
    element: <ArtifactDetailsPage />,
    loader: ArtifactDetailsLoader,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
