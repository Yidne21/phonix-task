import { Box } from "@mui/material";
import { useState } from "react";

import BetHistory from "./components/BetHistory";
import BetCanavas from "./components/BetCanvas";
import RiskToggle from "./components/RiskToggle";
import Footer from "./components/Footer";

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSetChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "flex-start" },
        minHeight: "100vh",
        padding: 0,
        background: "radial-gradient(circle at 50% 62%, #004dc0, #3b5097 88%)",
        gap: 2,
        position: "relative",
      }}
    >
      <BetHistory />
      <BetCanavas isRiskChecked={isChecked} />
      <RiskToggle isChecked={isChecked} onChange={handleSetChecked} />
      <Footer />
    </Box>
  );
}

export default App;
