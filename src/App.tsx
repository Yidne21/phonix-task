import { Box, Typography, Button, TextField, Fab } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Switch from "@mui/material/Switch";

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
        backgroundColor: "primary.main",
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

      {/* game card container */}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          // width: { xs: "100%", sm: "80%", md: "60%" },
          width: "100%",
          borderRadius: 2,
          gap: 2,
          alignItems: "center",
          py: 10,
        }}
      >
        {/* Game cards */}
        <Box
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
          ></Box>
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
        <Box>Hand</Box>

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
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          padding: 2,
          gap: 2,
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
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              border: "2px solid #FD3A5B",
              borderRadius: 4,
              px: 2,
              "&:hover": {
                backgroundColor: "#FD3A5B",
              },
            }}
          >
            RED X2
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "yellow",
              border: "2px solid #FD3A5B",
              borderRadius: 4,
              px: 2,
            }}
          >
            Fire X32
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              border: "2px solid #FD3A5B",
              borderRadius: 4,
              px: 2,
            }}
          >
            Black X2
          </Button>
        </Box>

        {/* Bet amount input and +/- buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "primary.main",
            padding: 2,
            borderRadius: 2,
            gap: 2,
            order: { xs: 1, sm: 0 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Bet USD
            </Typography>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                type="number"
                placeholder="0.30"
                sx={{
                  textAlign: "center",
                  backgroundColor: "secondary.main",
                  height: "25px",
                  borderRadius: 5,
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    "& fieldset": {
                      borderColor: "primary.main",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.dark",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "10px 12px",
                    fontSize: "16px",
                    color: "white",
                    textAlign: "center",
                  },
                }}
              />
            </Box>
          </Box>

          {/* button controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Fab
              size="medium"
              color="primary"
              sx={{
                border: "2px solid #000",
                borderRadius: "100%",
                width: "30px",
                minHeight: "30px",
                height: "30px",
              }}
            >
              -
            </Fab>
            <Fab
              size="medium"
              color="primary"
              sx={{
                border: "2px solid #000",
                borderRadius: "100%",
                width: "30px",
                minHeight: "30px",
                height: "30px",
              }}
            >
              db
            </Fab>
            <Fab
              size="medium"
              color="primary"
              sx={{
                border: "2px solid #000",
                borderRadius: "100%",
                width: "30px",
                minHeight: "30px",
                height: "30px",
              }}
            >
              +
            </Fab>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
