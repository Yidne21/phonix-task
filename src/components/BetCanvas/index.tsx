import { Box } from "@mui/material";
import ArrowIcon from "./ArrowIcon";
import CardRows from "./GameCards";
export interface IBetCanavasProps {
  isRiskChecked: boolean;
  play: boolean;
  handlePlay: (val: boolean) => void;
}

export default function BetCanavas({
  isRiskChecked,
  play,
  handlePlay,
}: IBetCanavasProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#1B3E86",
        width: { xs: "100%", sm: "60%" },
        borderRadius: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "12px",
        height: "200px",
        overflow: "clip",
      }}
    >
      <ArrowIcon direction="down" />
      <CardRows
        isReverse={false}
        keyPrefix="row1"
        play={play}
        handlePlay={handlePlay}
      />
      {isRiskChecked && (
        <CardRows
          isReverse={true}
          keyPrefix="row2"
          play={play}
          handlePlay={handlePlay}
        />
      )}
      <ArrowIcon direction="up" />
    </Box>
  );
}
