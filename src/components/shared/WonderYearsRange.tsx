const WonderYearsRange = ({
  startYear,
  endYear,
}: {
  startYear: number;
  endYear: number;
}) => {
  function getWonderYearsText() {
    const formatYear = (yr: number) => {
      if (yr < 0) return `${-yr} BCE`;
      else return `${yr} CE`;
    };

    return `${formatYear(startYear)} to ${formatYear(endYear)}`;
  }

  return (
    <p className="text-white text-sm font-bold mt-5">{getWonderYearsText()}</p>
  );
};

export default WonderYearsRange;
