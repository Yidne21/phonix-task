import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Modal,
  Button,
  Grid,
  ClickAwayListener,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

export default function InputControl() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [amountModalOpen, setAmountModalOpen] = useState(false);

  const handleOpenAmountModal = () => setAmountModalOpen(true);
  const handleCloseAmountModal = () => setAmountModalOpen(false);
  const handleSelectAmount = (amount: string) => {
    setValue(amount);
    setAmountModalOpen(false);
  };

  const handleNumberClick = (num: string) => {
    if (num === "⌫") {
      setValue((prev) => prev.slice(0, -1));
    } else {
      setValue((prev) => prev + num);
    }
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleIncrement = () => {
    const amount = parseFloat(value) + 1;
    setValue(amount.toFixed(2));
  };

  const handleDecreament = () => {
    const amount = parseFloat(value) - 1;
    setValue(amount.toFixed(2));
  };

  return (
    <>
      {/* input UI */}
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
            lineHeight: 1,
          }}
        >
          <Typography sx={{ fontSize: "14px", color: "#fff" }}>
            Bet USD
          </Typography>

          <TextField
            variant="outlined"
            type="text"
            value={value}
            placeholder="0.30"
            onClick={handleOpenModal}
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
                cursor: "pointer",
                width: "100px",
                height: "0px",
                color: "#fff",
              },
            }}
          />
        </Box>

        {/* control buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Box sx={controlButtonStyle} onClick={handleDecreament}>
            <RemoveIcon sx={{ color: "#fff" }} />
          </Box>
          <Box sx={controlButtonStyle} onClick={handleOpenAmountModal}>
            <img
              src="/assets/db.svg"
              alt="Hand Icon"
              style={{ width: 16, height: 16 }}
            />
          </Box>
          <Box sx={controlButtonStyle} onClick={handleIncrement}>
            <AddIcon sx={{ color: "#fff" }} />
          </Box>
        </Box>
      </Box>

      {/* modal with number pad */}
      <Modal open={open} onClose={handleCloseModal} hideBackdrop>
        <ClickAwayListener onClickAway={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              bottom: "80px",
              left: "40%",
              transform: "translateX(-50%)",
              width: "234px",
              bgcolor: "primary.main",
              borderRadius: "12px",
              p: "3px",
              borderColor: "#081930!important",
              border: "1px solid",
              boxShadow: "0 1rem 3rem #0000002d !important",
            }}
          >
            <Grid container spacing={0.1}>
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"].map(
                (num, idx) => (
                  <Grid size={{ xs: 4 }} key={idx}>
                    <Box
                      sx={{
                        backgroundColor: "#194eae!important",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        color: "#fff",
                        height: "34px",
                        fontSize: "22px",
                        cursor: "pointer",
                        border: "1px solid rgba(0,0,0,.5)",
                        boxShadow: "inset 1px 1px #fff1cd33",
                      }}
                      onClick={() => handleNumberClick(num)}
                    >
                      {num}
                    </Box>
                  </Grid>
                )
              )}
              <Grid size={{ xs: 12 }}>
                <Button
                  fullWidth
                  sx={{
                    mt: 1,
                    backgroundColor: "secondary.main",
                    color: "#fff",
                  }}
                  onClick={handleConfirm}
                >
                  <CheckIcon sx={{ color: "#fff" }} />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ClickAwayListener>
      </Modal>

      <Modal
        open={amountModalOpen}
        onClose={handleCloseAmountModal}
        hideBackdrop
      >
        <ClickAwayListener onClickAway={handleCloseAmountModal}>
          <Box
            sx={{
              position: "absolute",
              bottom: "80px",
              left: "40%",
              transform: "translateX(-50%)",
              bgcolor: "primary.main",
              borderRadius: "8px",
              p: 2,
              width: "300px",
              border: "1px solid #081930",
              boxShadow: "0 1rem 3rem #0000002d",
              background: "#142c5a",
              borderColor: "#081930",
              color: "#c6cfe0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#fff",
                mb: 1,
                textAlign: "center",
              }}
            >
              Bet USD
            </Typography>
            <Grid container spacing={1}>
              {[
                "0.10",
                "0.20",
                "0.30",
                "0.40",
                "0.50",
                "0.60",
                "0.70",
                "0.80",
                "1.20",
                "2.00",
                "4.00",
                "10.00",
                "20.00",
                "50.00",
                "100.00",
              ].map((amount, idx) => (
                <Grid size={{ xs: 6 }} key={idx}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleSelectAmount(amount)}
                    sx={{
                      backgroundColor: "#194eae",
                      color: "#fff",
                      borderRadius: "8px",
                      fontSize: "14px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#133c8f",
                      },
                    }}
                  >
                    {amount}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </ClickAwayListener>
      </Modal>
    </>
  );
}

const controlButtonStyle = {
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
  "&:active": {
    transform: "scale(0.96)",
  },
};
