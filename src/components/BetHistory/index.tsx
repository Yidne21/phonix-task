import { Box, Fab, Button, Typography } from "@mui/material";
import * as React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const BetHistory: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        justifyContent: "space-between",
        width: { xs: "100%", sm: "80%", md: "30%" },
        borderRadius: 2,
        alignItems: "center",
        px: 2,
        py: 1,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Fab
          size="small"
          sx={{
            backgroundColor: "#E20732",
            borderRadius: "100%",
            width: "30px",
            minHeight: "30px",
            height: "30px",
          }}
        ></Fab>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          position: "relative",
        }}
      >
        <Button
          onClick={handleMenuClick}
          sx={{
            minWidth: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            color: "#FFF",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <RestoreIcon sx={{ color: "#FFF" }} />
          <KeyboardArrowDownIcon sx={{ color: "#FFF" }} />
        </Button>
      </Box>

      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "primary.main",
            borderRadius: 2,
            boxShadow: 3,
            mt: 1,
            zIndex: 10,
            p: 2,
          }}
        >
          <Typography sx={{ color: "#fff", mb: 1 }}>Latest result</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <Fab
              size="small"
              sx={{
                backgroundColor: "#E20732",
                borderRadius: "100%",
                width: "30px",
                minHeight: "30px",
                height: "30px",
              }}
            ></Fab>
            {/* Add more result items here if needed */}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BetHistory;
