import { Box } from "@mui/material";

export interface IBetTypeProps {
  handlePlay: (play: boolean) => void;
}

export default function BetType(props: IBetTypeProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        order: { xs: 0, sm: 1 },
        width: { xs: "100%", sm: "auto" },
        justifyContent: { xs: "center", sm: "flex-start" },
        mb: { xs: 2, sm: 0 },
      }}
    >
      <Box
        component="button"
        sx={{
          borderRadius: "20px",
          width: "78px",
          height: "50px",
          fontSize: "13px",
          color: "white",
          textShadow: "0 1px 0 rgba(0, 0, 0, .5)",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ee0011, #b3000c 94%)",
          border: "2px solid rgba(0, 0, 0, .9)",
          boxShadow:
            "3px 3px 6px #020b1a80, inset -1px -1px #00000052, inset 1px 1px #fff1cd33",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          textAlign: "center",
          "&:active": {
            transform: "scale(0.96)",
          },
        }}
        onClick={() => props.handlePlay(true)}
      >
        <span>RED</span>
        <span>X2</span>
      </Box>
      <Box
        component="button"
        sx={{
          borderRadius: "20px",
          width: "78px",
          height: "50px",
          fontSize: "13px",
          color: "white",
          backgroundImage:
            "radial-gradient(44% 44% at 49.36% 52%, #dba355 0%, #c4872e 100%)",
          border: "2px solid rgba(0, 0, 0, .9)",
          boxShadow:
            "3px 3px 6px #020b1a80, inset -1px -1px #00000052, inset 1px 1px #fff1cd33",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          textAlign: "center",
          "&:active": {
            transform: "scale(0.96)",
          },
        }}
        onClick={() => props.handlePlay(true)}
      >
        <img
          src="src/assets/fire.svg"
          alt="Hand Icon"
          style={{ width: 22, height: 22 }}
        />
        <span>X32</span>
      </Box>
      <Box
        component="button"
        sx={{
          borderRadius: "20px",
          width: "78px",
          height: "50px",
          fontSize: "13px",
          color: "white",
          textShadow: "0 1px 0 rgba(0, 0, 0, .5)",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #191818, #000000 74%)",
          border: "2px solid rgba(0, 0, 0, .9)",
          boxShadow:
            "3px 3px 6px #020b1a80, inset -1px -1px #00000052, inset 1px 1px #fff1cd33",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          textAlign: "center",
          "&:active": {
            transform: "scale(0.96)",
          },
        }}
        onClick={() => props.handlePlay(true)}
      >
        <span>Black</span>
        <span>X2</span>
      </Box>
    </Box>
  );
}
