import { Box } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export interface IBetCanavasProps {
  isRiskChecked: boolean;
}

const ArrowIcon = ({ direction = "up" }: { direction?: "up" | "down" }) => {
  const isUp = direction === "up";
  const Icon = isUp ? ArrowDropUpIcon : ArrowDropDownIcon;

  return (
    <Icon
      sx={{
        position: "absolute",
        [isUp ? "bottom" : "top"]: -15,
        fontSize: 40,
        color: "white",
        left: "50%",
        transform: "translateX(-50%)",
        // zIndex: 10,
        lineHeight: 1,
      }}
    />
  );
};

const getCellStyles = (
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

const renderRow = (keyPrefix: string, isReversed: boolean) => {
  const fireIndex = isReversed ? 3 : 10;

  return (
    <Box sx={{ display: "flex", gap: "4px", justifyContent: "center" }}>
      {Array.from({ length: 14 }).map((_, i) => {
        const { background, border, circleColor, isFire } = getCellStyles(
          i,
          fireIndex,
          isReversed
        );

        return (
          <Box
            key={`${keyPrefix}-${i}`}
            sx={{
              background,
              width: "60px",
              height: "70px",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border,
            }}
          >
            {isFire ? (
              <img
                src="src/assets/fire.svg"
                alt="Fire"
                style={{ width: 24, height: 24 }}
              />
            ) : (
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: circleColor,
                  borderRadius: "50%",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default function BetCanavas({ isRiskChecked }: IBetCanavasProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#1B3E86",
        width: { xs: "100%", sm: "60%" },
        borderRadius: 2,
        position: "relative",
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        height: "200px",
        overflow: "clip",
      }}
    >
      <ArrowIcon direction="down" />
      {renderRow("row1", false)}
      {isRiskChecked && renderRow("row2", true)}
      <ArrowIcon direction="up" />
    </Box>
  );
}
