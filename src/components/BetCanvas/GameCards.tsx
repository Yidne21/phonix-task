import { Box, keyframes } from "@mui/material";
import { getCellStyles } from "./StyleUtils";

export interface ICardRowsProps {
  isReverse: boolean;
  keyPrefix: string;
  play: boolean;
  handlePlay: (play: boolean) => void;
}

// Card dimensions
const cardWidth = 60;
const cardGap = 1.5;
const numCards = 16;
const totalWidth = (cardWidth + cardGap) * numCards;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-${totalWidth}px); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-${totalWidth}px); }
  100% { transform: translateX(0); }
`;

export default function CardRows(props: ICardRowsProps) {
  const fireIndex = props.isReverse ? 3 : 10;

  const renderCards = (offsetKey: string) =>
    Array.from({ length: numCards }).map((_, i) => {
      const { background, border, circleColor, isFire } = getCellStyles(
        i,
        fireIndex,
        props.isReverse
      );

      return (
        <Box
          key={`${offsetKey}-${i}`}
          sx={{
            background,
            width: `${cardWidth}px`,
            height: "70px",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border,
            flexShrink: 0,
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
    });

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          gap: `${cardGap}px`,
          animation: props.play
            ? `${props.isReverse ? scrollRight : scrollLeft} 2s linear infinite`
            : "none",
          width: `${2 * totalWidth}px`,
        }}
        onAnimationIteration={() => {
          if (props.play) {
            props.handlePlay(false);
          }
        }}
      >
        {renderCards(`${props.keyPrefix}-1`)}
        {renderCards(`${props.keyPrefix}-2`)}
      </Box>
    </Box>
  );
}
