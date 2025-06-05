import { Box, Typography, Button, TextField, Fab } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Switch from "@mui/material/Switch";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ArrowIcon = ({ direction = "up" }) => {
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
        zIndex: 10,
        lineHeight: 1,
      }}
    />
  );
};

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSetChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "center" },
        height: "100vh",
        padding: 2,
        background: "radial-gradient(circle at 50% 62%, #004dc0, #3b5097 88%)",
        gap: 2,
      }}
    >
      {/* bet history*/}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", sm: "80%", md: "60%" },
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

      {/* canvas */}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          width: "100%",
          borderRadius: 2,
          gap: "1px",
          alignItems: "center",
          aspectRatio: "auto 10003 / 494",
          overflow: "clip",
          overflowClipMargin: "content-box",
          cursor: "inherit",
          border: "1px solid #4D659B",
          position: "relative",
          height: { xs: "200px", sm: "250px" },
        }}
      >
        <ArrowIcon direction="down" />
        <ArrowIcon direction="up" />

        {/* Game cards */}
        {[0, 9].map((_, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "#E20732",
              width: "80px",
              height: "80px",
              borderRadius: 2,
              border: "2px solid #FD3A5B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 4px 6px #A6023D",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "#FD3A5B",
                borderRadius: "50%",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* risk toggle */}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          width: { xs: "70%", sm: "50%", md: "30%" },
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: 2,
          position: { xs: "fixed", sm: "static" },
          bottom: { xs: 240, sm: "auto" },
          zIndex: { xs: 1201, sm: "auto" },
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
            src="src/assets/hand.svg"
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
            checked={isChecked}
            onChange={handleSetChecked}
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

      {/* Footer */}
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
            }}
          >
            <span>RED</span>
            <span>X2</span>
          </Box>
          <Box
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
            }}
          >
            <img
              src="src/assets/fire.svg"
              alt="Hand Icon"
              style={{ width: 22, height: 22 }}
            />
            <span>X32</span>
          </Box>
          <Box
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
            }}
          >
            <span>Black</span>
            <span>X2</span>
          </Box>
        </Box>

        {/* Bet amount input and +/- buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#194eae!important",
            borderRadius: "30px",
            order: { xs: 1, sm: 0 },
            width: "100%",
            maxWidth: "300px",
            border: "1px solid rgba(0,0,0,.53)",
            boxShadow: "inset 1px 1px #fff1cd33",
            mr: "4px",
            padding: "10px",
          }}
        >
          {/* bet spinner */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              fontSize: "14px",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            <Typography
            // sx={{
            //   color: "white",
            //   fontWeight: "bold",
            //   fontSize: "16px",
            // }}
            >
              Bet USD
            </Typography>

            <TextField
              variant="outlined"
              type="text"
              placeholder="0.30"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "solid 1px rgba(0, 0, 0, .6)",
                    background: "#0000004d",
                    borderRadius: "11px",
                    height: "32px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                  textAlign: "center",
                  cursor: "text",
                  width: "100px",
                  height: "0px",
                  color: "#fff",
                },
              }}
            />
          </Box>

          {/* button controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center !important",
              justifyContent: "center !important",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px rgba(0, 0, 0, .6)",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: 1.15,
                textTransform: "none",
                cursor: "pointer",
              }}
            >
              <RemoveIcon sx={{ color: "#fff" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px rgba(0, 0, 0, .6)",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: 1.15,
                textTransform: "none",
                cursor: "pointer",
              }}
            >
              <img
                src="src/assets/db.svg"
                alt="Hand Icon"
                style={{ width: 16, height: 16 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px rgba(0, 0, 0, .6)",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: 1.15,
                textTransform: "none",
                cursor: "pointer",
              }}
            >
              <AddIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
