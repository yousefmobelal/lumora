import PetraIllustration from "@/assets/images/petra/petra.png";
import ColosseumIllustration from "@/assets/images/colosseum/colosseum.png";
import GreatWallIllustration from "@/assets/images/great_wall_of_china/great-wall.png";
import PyramidsIllustration from "@/assets/images/pyramids/pyramids.png";
import PetraMoon from "@/assets/images/petra/moon.png";
import ColosseumSun from "@/assets/images/colosseum/sun.png";
import GreatWallSun from "@/assets/images/great_wall_of_china/sun.png";
import PyramidsMoon from "@/assets/images/pyramids/moon.png";
import PetraPhoto1 from "@/assets/images/petra/photo-1.jpg";
import PetraPhoto2 from "@/assets/images/petra/photo-2.jpg";
import PetraPhoto3 from "@/assets/images/petra/photo-3.jpg";
import PetraPhoto4 from "@/assets/images/petra/photo-4.jpg";
import PyramidsPhoto1 from "@/assets/images/pyramids/photo-1.jpg";
import PyramidsPhoto2 from "@/assets/images/pyramids/photo-2.jpg";
import PyramidsPhoto3 from "@/assets/images/pyramids/photo-3.jpg";
import PyramidsPhoto4 from "@/assets/images/pyramids/photo-4.jpg";
import ColosseumPhoto1 from "@/assets/images/colosseum/photo-1.jpg";
import ColosseumPhoto2 from "@/assets/images/colosseum/photo-2.jpg";
import ColosseumPhoto3 from "@/assets/images/colosseum/photo-3.jpg";
import ColosseumPhoto4 from "@/assets/images/colosseum/photo-4.jpg";
import GreatWallPhoto1 from "@/assets/images/great_wall_of_china/photo-1.jpg";
import GreatWallPhoto2 from "@/assets/images/great_wall_of_china/photo-2.jpg";
import GreatWallPhoto3 from "@/assets/images/great_wall_of_china/photo-3.jpg";
import GreatWallPhoto4 from "@/assets/images/great_wall_of_china/photo-4.jpg";
import PetraWonderBtn from "@/assets/images/petra/wonder-button.png";
import PyramidsWonderBtn from "@/assets/images/pyramids/wonder-button.png";
import ColosseumWonderBtn from "@/assets/images/colosseum/wonder-button.png";
import GreatWallWonderBtn from "@/assets/images/great_wall_of_china/wonder-button.png";
import PetraTimeline from "@/assets/images/petra/flattened.jpg";
import PyramidsTimeline from "@/assets/images/pyramids/flattened.jpg";
import ColosseumTimeline from "@/assets/images/colosseum/flattened.jpg";
import GreatWallTimeline from "@/assets/images/great_wall_of_china/flattened.jpg";
import {
  colosseumHighlights,
  greatWallHighlights,
  petraHighlights,
  pyramidsHighlights,
} from "./highlight_data";
import type { Wonder } from "@/types/Wonder";

export const wondersData: Wonder[] = [
  {
    id: "petra",
    title: "Petra",
    subTitle: "The Lost City",
    regionTitle: "Ma’an, Jordan",
    mapCaption: "Map showing location of Petra in Ma’an Governorate, Jordan.",
    historyInfo1:
      "The area around Petra has been inhabited from as early as 7000  BCE, and the Nabataeans might have settled in what would become the capital city of their kingdom as early as the 4th century BCE.",
    historyInfo2:
      "The trading business gained the Nabataeans considerable revenue and Petra became the focus of their wealth. The Nabataeans were accustomed to living in the barren deserts, unlike their enemies, and were able to repel attacks by taking advantage of the area's mountainous terrain.",
    historyInfo3:
      "Petra flourished in the 1st century CE, when its famous Al-Khazneh structure - believed to be the mausoleum of Nabataean king Aretas IV - was constructed, and its population peaked at an estimated 20,000 inhabitants.",
    historyInfo4:
      "Access to the city is through a 3/4 mile-long (1.2 km) gorge called the Siq, which leads directly to the Khazneh.",
    constructionInfo1:
      'Famous for its rock-cut architecture and water conduit system, Petra is also called the "Red Rose City" because of the color of the stone from which it is carved.',
    constructionInfo2:
      "Another thing Petra is known for is its Hellenistic (“Greek”) architecture. These influences can be seen in many of the facades at Petra and are a reflection of the cultures that the Nabataens traded with.",

    callout:
      "They were particularly skillful in harvesting rainwater, agriculture and stone carving.",
    startYr: -312,
    endYr: 100,
    lat: "30.328830750209903",
    lng: "35.44398203484667",
    illustrationImage: PetraIllustration,
    illustrationBackImage: PetraMoon,
    galleryImages: [PetraPhoto1, PetraPhoto2, PetraPhoto3, PetraPhoto4],
    wonderBtnImage: PetraWonderBtn,
    timelineImage: PetraTimeline,
    events: {
      "-1200": "First Edomites occupied the area and established a foothold.",
      "-106": "Became part of the Roman province Arabia",
      "551":
        "After being damaged by earthquakes, habitation of the city all but ceased.",
      "1812": "Rediscovered by the Swiss traveler Johann Ludwig Burckhardt.",
      "1958":
        "Excavations led on the site by the British School of Archaeology and the American Center of Oriental Research.",
      "1989": "Appeared in the film Indiana Jones and The Last Crusade.",
    },
    highlights: petraHighlights,
  },
  {
    id: "pyramids",
    title: "Pyramids of Giza",
    subTitle: "The ancient wonder",
    regionTitle: "Cairo, Egypt",
    mapCaption:
      "Map showing location of Giza Pyramids in Greater Cairo, Egypt.",
    historyInfo1:
      "The Giza pyramid complex, also called the Giza necropolis, is the site on the Giza Plateau in Greater Cairo, Egypt that includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx of Giza. All were built during the Fourth Dynasty of the Old Kingdom of Ancient Egypt, between 2600 and 2500 BCE.",
    historyInfo2:
      "The pyramids were built as tombs for the pharaohs of the Fourth Dynasty, with the Great Pyramid being the largest and most famous of the three main pyramids.",
    historyInfo3:
      "The construction of the pyramids required immense organizational skills and resources, with thousands of workers involved in their building.",
    historyInfo4:
      "The pyramids have stood the test of time and continue to be a symbol of ancient Egyptian civilization.",
    constructionInfo1:
      "The Great Pyramid is the largest of the three pyramids and was the tallest man-made structure in the world for over 3,800 years.",
    constructionInfo2:
      "The precision with which the pyramids were built is remarkable, with each side aligned almost perfectly with the cardinal directions.",
    callout:
      "The pyramids are a testament to the ingenuity and engineering prowess of ancient Egypt.",
    startYr: -2800,
    endYr: -2300,
    lat: "29.9792",
    lng: "31.1342",
    illustrationImage: PyramidsIllustration,
    illustrationBackImage: PyramidsMoon,
    galleryImages: [
      PyramidsPhoto1,
      PyramidsPhoto2,
      PyramidsPhoto3,
      PyramidsPhoto4,
    ],
    wonderBtnImage: PyramidsWonderBtn,
    timelineImage: PyramidsTimeline,

    events: {
      "-2575":
        "Construction of the 3 pyramids began for three kings of the 4th dynasty; Khufu, Khafre, and Menkaure.",
      "-2465":
        "Construction began on the smaller surrounding structures called Mastabas for royalty of the 5th and 6th dynasties.",
      "-443":
        "Greek Author Herodotus speculated that the pyramids were built in the span of 20 years with over 100,000 slave labourers. This assumption would last for over 1500 years",
      "1925":
        "Tomb of Queen Hetepheres was discovered, containing furniture and jewelry. One of the last remaining treasure-filled tombs after many years of looting and plundering.",
      "1979":
        "Designated a UNESCO World Heritage Site to prevent any more unauthorized plundering and vandalism.",
      "1990":
        "Discovery of labouror’s districts suggest that the workers building the pyramids were not slaves, and an ingenious building method proved a relatively small work-force was required to build such immense structures.",
    },
    highlights: pyramidsHighlights,
  },
  {
    id: "colosseum",
    title: "Colosseum",
    subTitle: "The icon of Rome",
    regionTitle: "Rome, Italy",
    mapCaption: "Map showing location of Colosseum in Rome, Italy,",
    historyInfo1:
      "The Colosseum is an oval amphitheater in the center of the city of Rome, Italy. It is the largest ancient amphitheater ever built and is still the largest standing amphitheater in the world today.",
    historyInfo2:
      "The Colosseum was used for gladiatorial contests and public spectacles including animal hunts, executions, reenactments of famous battles, and dramas based on Roman mythology, and mock sea battles.",
    historyInfo3:
      "The building ceased to be used for entertainment in the early medieval era. By the late 6th century a small chapel had been built into the structure of the amphitheater, and the arena was converted into a cemetery.",
    historyInfo4:
      "The numerous vaulted spaces in the arcades under the seating were converted into housing and workshops, and are recorded as still being rented out as late as the 12th century.",
    constructionInfo1:
      "Construction began under the emperor Vespasian in 72 CE and was completed in 80 CE under his successor and heir, Titus. Further modifications were made during the reign of Domitian.",
    constructionInfo2:
      "The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete. The outer wall is estimated to have required over 3.5 million cubic feet of travertine stone which were set without mortar; they were held together by 300 tons of iron clamps.",
    callout:
      "The Colosseum could hold an estimated 50,000 to 80,000 spectators at various points in its history, having an average audience of some 65,000.",
    startYr: 70,
    endYr: 80,
    lat: "41.890242126393495",
    lng: "12.492349361871392",
    illustrationImage: ColosseumIllustration,
    illustrationBackImage: ColosseumSun,
    galleryImages: [
      ColosseumPhoto1,
      ColosseumPhoto2,
      ColosseumPhoto3,
      ColosseumPhoto4,
    ],
    wonderBtnImage: ColosseumWonderBtn,
    timelineImage: ColosseumTimeline,
    events: {
      "70": "Colosseum construction was started during the Vespasian reign overtop what used to be a private lake for the previous four emperors. This was done in an attempt to revitalize Rome from their tyrannical reign.",
      "82": "The uppermost floor was built, and the structure was officially completed by Domitian.",
      "1140":
        "The arena was repurposed as a fortress for the Frangipane and Annibaldi families. It was also at one point used as a church.",
      "1490":
        "Pope Alexander VI permitted the site to be used as a quarry, for both storing and salvaging building materials.",
      "1829":
        "Preservation of the colosseum officially began, after more than a millennia of dilapidation and vandalism. Pope Pius VIII was notably devoted to this project.",
      "1990":
        "A restoration project was undertaken to ensure the colosseum remained a major tourist attraction for Rome. It currently stands as one of the greatest sources of tourism revenue in Italy.",
    },
    highlights: colosseumHighlights,
  },
  {
    id: "great_wall_of_china",
    title: "The Great Wall",
    subTitle: "Longest structure on Earth",
    regionTitle: "China",
    mapCaption:
      "Map showing location of Great Wall of China in northern China.",
    historyInfo1:
      "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. The total length of all sections ever built is over 13,000 miles.",
    historyInfo2:
      "Several walls were built from as early as the 7th century BCE, with selective stretches later joined together by Qin Shi Huang (220-206  BCE), the first emperor of China. Little of the Qin wall remains. \nLater on, many successive dynasties built and maintained multiple stretches of border walls.",
    historyInfo3:
      "The Great Wall of China is not a single continuous wall but rather a series of walls and fortifications built by different dynasties over centuries.",
    historyInfo4:
      "The Great Wall has been a symbol of China's strength and resilience throughout history.",
    constructionInfo1:
      "Transporting the large quantity of materials required for construction was difficult, so builders always tried to use local resources. Stones from the mountains were used over mountain ranges, while rammed earth was used for construction in the plains. Most of the ancient walls have eroded away over the centuries.",
    constructionInfo2:
      "Stones cut into rectangular shapes were used for the foundation, inner and outer brims, and gateways of the wall. \nUnder the rule of the Qing dynasty, China's borders extended beyond the walls and Mongolia was annexed into the empire, so construction was discontinued.",
    callout:
      "The Great Wall of China is a UNESCO World Heritage Site and is considered one of the most impressive architectural feats in human history.",
    startYr: -700,
    endYr: 1644,
    lat: "40.43199751120627",
    lng: "116.57040708482984",
    illustrationImage: GreatWallIllustration,
    illustrationBackImage: GreatWallSun,
    galleryImages: [
      GreatWallPhoto1,
      GreatWallPhoto2,
      GreatWallPhoto3,
      GreatWallPhoto4,
    ],
    wonderBtnImage: GreatWallWonderBtn,
    timelineImage: GreatWallTimeline,
    events: {
      "-700":
        "First landmark of the Great Wall began originally as a square wall surrounding the state of Chu. Over the years, additional walls would be built and added to it to expand and connect territory.",
      "-214":
        "The first Qin Emperor unifies China and links the wall of the surrounding states of Qin, Yan, and Zhao into the Great Wall of China, taking 10 years to build with hundreds of thousands of laborers.",
      "-121":
        "A 20-year construction project was started by the Han emperor to build east and west sections of the wall, including beacons, towers, and castles. Not just for defense, but also to control trade routes like the Silk Road.",
      "556":
        "The Bei Qi kingdom also launched several construction projects, utilizing over 1.8 million workers to repair and extend sections of the wall, adding to its length and even building a second inner wall around Shanxi.",
      "618":
        "The Great Wall was repaired during the Sui Dynasty and used to defend against Tujue attacks. Before and after the Sui Dynasty, the wall saw very little use and fell into disrepair.",
      "1487":
        "Hongzhi Emperor split the walls into north and south lines, eventually shaping it into how it is today. Since then, it has gradually fallen into disrepair and remains mostly unused.",
    },
    highlights: greatWallHighlights,
  },
];
