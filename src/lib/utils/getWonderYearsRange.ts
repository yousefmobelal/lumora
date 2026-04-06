export function getWonderYearsRange(startYear: number, endYear: number) {
  const formatYear = (yr: number) => {
    if (yr < 0) return `${-yr} BCE`;
    else return `${yr} CE`;
  };

  return `${formatYear(startYear)} to ${formatYear(endYear)}`;
}
