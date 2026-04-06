import type { HighlightData } from "./HighlightData";

export interface Wonder {
  id: string;
  title: string;
  subTitle: string;
  regionTitle: string;
  mapCaption: string;
  historyInfo1: string;
  historyInfo2: string;
  historyInfo3: string;
  historyInfo4: string;
  constructionInfo1: string;
  constructionInfo2: string;
  callout: string;
  startYr: number;
  endYr: number;
  lat: string;
  lng: string;
  illustrationImage: string;
  illustrationBackImage: string;
  wonderBtnImage: string;
  galleryImages: string[];
  timelineImage: string;
  events: Record<string, string>;
  highlights: HighlightData[];
}
