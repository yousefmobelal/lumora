export const wonderColors = {
  bgColor: (id: string) => {
    switch (id) {
      case "pyramids":
        return "#16184D";
      case "great_wall_of_china":
        return "#642828";
      case "petra":
        return "#444B9B";
      case "colosseum":
        return "#1E736D";
    }
  },
  fgColor: (id: string) => {
    switch (id) {
      case "pyramids":
        return "#444B9B";
      case "great_wall_of_china":
        return "#688750";
      case "petra":
        return "#1B1A65";
      case "colosseum":
        return "#4AA39D";
    }
  },
};
