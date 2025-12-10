import React from "react";
import { IconButton, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Whatsapp = () => {
  const phoneNumber = "919585778929";
  const message = "Hello! I’d like to know more about your services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <IconButton
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: "#01ab2cff",
          color: "#fff",
          width: 50,
          height: 50,
          borderRadius: "20px",
          boxShadow: "0px 4px 14px rgba(0,0,0,0.35)",
        "&:hover": {
            bgcolor: "#01ab2cff",
            color: "#fff",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 35 ,  animation: "pulse 1.5s infinite",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)", boxShadow: "#01ab2cff" },
            "70%": { transform: "scale(1.08)", boxShadow: "0 0 0 12px rgba(8,214,59,0)" },
            "100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(8,214,59,0)" },
          },
          }} />
      </IconButton>
    </Box>
  );
};

export default Whatsapp;
