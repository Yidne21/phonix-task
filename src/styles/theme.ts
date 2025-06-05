import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A4FA2",
    },
    secondary: {
      main: "#1B3E86",
    },
    warning: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
