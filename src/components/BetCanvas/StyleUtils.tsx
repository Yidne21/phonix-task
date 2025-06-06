export const getCellStyles = (
  index: number,
  fireIndex: number,
  isReversed: boolean
) => {
  const isEven = index % 2 === 0;
  const isFire = index === fireIndex;

  if (isFire) {
    return {
      background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
      border: "2px solid #FFF700",
      circleColor: "#FFA500",
      isFire: true,
    };
  }

  const background = isReversed
    ? isEven
      ? "#E20732"
      : "#000000"
    : isEven
    ? "#000000"
    : "#E20732";

  const border = isReversed
    ? isEven
      ? "1px solid #FD3A5B"
      : "1px solid #1a1a1a"
    : isEven
    ? "1px solid #1a1a1a"
    : "1px solid #FD3A5B";

  const circleColor = isReversed
    ? isEven
      ? "#FD3A5B"
      : "#1a1a1a"
    : isEven
    ? "#1a1a1a"
    : "#FD3A5B";

  return { background, border, circleColor, isFire: false };
};
