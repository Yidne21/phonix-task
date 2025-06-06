import { Box } from "@mui/material";
import BetType from "./BetType";
import InputControl from "./InputControl";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Box
      sx={{
        position: { sm: "fixed", xs: "static" },
        bottom: { sm: 0 },
        left: { sm: 0 },
        width: "100%",
        backgroundColor: "secondary.main",
        textShadow: "0 1px 0 rgba(0, 0, 0, .5)",
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        padding: 2,
        gap: 2,
        borderRadius: "10px",
      }}
    >
      {/* Bet type choice toggle buttons */}
      <BetType />

      {/* Bet amount input and +/- buttons */}
      <InputControl />
    </Box>
  );
}
