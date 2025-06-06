import { Box, Switch, Typography } from "@mui/material";

export interface IRiskToggleProps {
  isChecked: boolean;
  onChange: () => void;
}

export default function RiskToggle(props: IRiskToggleProps) {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        width: { xs: "70%", sm: "50%", md: "20%" },
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: 2,
        py: "2px",
        px: "5px",
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/hand.svg"
          alt="Hand Icon"
          style={{ width: 32, height: 32 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Switch
          checked={props.isChecked}
          onChange={props.onChange}
          color="success"
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "green",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "green",
            },
          }}
        />
        <Typography
          sx={{
            color: "white",
          }}
        >
          High risk mode
        </Typography>
      </Box>
    </Box>
  );
}
