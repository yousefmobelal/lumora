import { QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes";
import gsap from "gsap";
import { Draggable, InertiaPlugin, ScrollTrigger, SplitText } from "gsap/all";
import { queryClient } from "@/lib/utils/queryClient";
gsap.registerPlugin(SplitText, Draggable, InertiaPlugin, ScrollTrigger);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
