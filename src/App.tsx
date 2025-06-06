import { Box } from "@mui/material";
import { useState } from "react";

import BetHistory from "./components/BetHistory";
import BetCanavas from "./components/BetCanvas";
import RiskToggle from "./components/RiskToggle";
import Footer from "./components/Footer";

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);

  const handleSetChecked = () => {
    setIsChecked(!isChecked);
  };

  const handlePlay = (play: boolean) => {
    setPlay(play);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "center" },
        minHeight: "100vh",
        padding: 0,
        background: "radial-gradient(circle at 50% 62%, #004dc0, #3b5097 88%)",
        gap: 2,
      }}
    >
      <BetHistory />
      <BetCanavas
        isRiskChecked={isChecked}
        play={play}
        handlePlay={handlePlay}
      />
      <RiskToggle isChecked={isChecked} onChange={handleSetChecked} />
      <Footer handlePlay={handlePlay} />
    </Box>
  );
}

export default App;
