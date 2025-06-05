import { Box, Typography, Button, TextField, Fab } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Switch from "@mui/material/Switch";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
        justifyContent: { xs: "space-between", sm: "flex-start" },
        minHeight: "100vh",
        padding: 0,
        background: "radial-gradient(circle at 50% 62%, #004dc0, #3b5097 88%)",
        gap: 2,
        position: "relative",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          backgroundColor: "#1B3E86",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            sx={{
              minWidth: 0,
              color: "white",
              backgroundColor: "#2A4FA2",
              borderRadius: "4px",
              padding: "4px 8px",
              "&:hover": { backgroundColor: "#2A4FA2" },
            }}
          >
            HOTLINE
            <KeyboardArrowDownIcon />
          </Button>
          <Button
            sx={{
              minWidth: 0,
              color: "white",
              padding: "4px 8px",
              gap: 0.5,
            }}
          >
            <HelpOutlineIcon sx={{ fontSize: 20 }} />
            How to Play?
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            sx={{
              backgroundColor: "#FF8E00",
              color: "white",
              borderRadius: "4px",
              padding: "4px 16px",
              "&:hover": { backgroundColor: "#FF8E00" },
            }}
          >
            FUN MODE
          </Button>
          <Typography sx={{ color: "white" }}>2,969.50 USD</Typography>
          <MenuIcon sx={{ color: "white", cursor: "pointer" }} />
        </Box>
      </Box>

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
          mt: 2,
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
            </Box>
          </Box>
        )}
      </Box>

      {/* Game board */}
      <Box
        sx={{
          backgroundColor: "#1B3E86",
          width: "100%",
          maxWidth: { xs: "100%", sm: "80%", md: "60%" },
          borderRadius: 2,
          padding: 2,
          position: "relative",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "4px",
            justifyContent: "center",
            padding: "20px 0",
            position: "relative",
          }}
        >
          <ArrowIcon direction="down" />
          <ArrowIcon direction="up" />
          
          {Array(13).fill(null).map((_, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: i % 2 === 0 ? "#000000" : "#E20732",
                width: "60px",
                height: "60px",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: i % 2 === 0 ? "1px solid #1a1a1a" : "1px solid #FD3A5B",
              }}
            >
              {i === 10 && (
                <img
                  src="src/assets/fire.svg"
                  alt="Fire"
                  style={{ width: 24, height: 24 }}
                />
              )}
              {i !== 10 && (
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: i % 2 === 0 ? "#1a1a1a" : "#FD3A5B",
                    borderRadius: "50%",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
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
        }}
      >
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
            <Typography>Bet USD</Typography>
            <TextField
              variant="outlined"
              type="text"
              value="0.30"
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
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Button
              sx={{
                minWidth: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "solid 1px rgba(0, 0, 0, .6)",
                padding: 0,
              }}
            >
              <RemoveIcon sx={{ color: "#fff" }} />
            </Button>
            <Button
              sx={{
                minWidth: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "solid 1px rgba(0, 0, 0, .6)",
                padding: 0,
              }}
            >
              <img
                src="src/assets/db.svg"
                alt="Double"
                style={{ width: 16, height: 16 }}
              />
            </Button>
            <Button
              sx={{
                minWidth: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "solid 1px rgba(0, 0, 0, .6)",
                padding: 0,
              }}
            >
              <AddIcon sx={{ color: "#fff" }} />
            </Button>
          </Box>
        </Box>

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
          <Button
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
          </Button>
          <Button
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
              alt="Fire"
              style={{ width: 22, height: 22 }}
            />
            <span>X32</span>
          </Button>
          <Button
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
            <span>BLACK</span>
            <span>X2</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;