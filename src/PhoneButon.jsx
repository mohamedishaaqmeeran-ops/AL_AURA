import React from "react";
import { Box } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function PhoneButton() {
  return (
    <Box
      component="a"
      href="tel:+919585778929"
      sx={{
        position: "fixed",
        bottom: 100,
        right: 20,
        bgcolor: "#ab049aff",
        width: 50,
        height: 50,
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0px 4px 14px rgba(0,0,0,0.35)",
        zIndex: 1000,
        cursor: "pointer",
        textDecoration: "none",

      

        "&:hover": {
          bgcolor:" #ab049aff",
          color: "#fff",
        },
      }}
    >
      <PhoneInTalkIcon sx={{ fontSize: 30,  animation: "phonePulse 1.5s infinite",
        "@keyframes phonePulse": {
          "0%": { transform: "scale(1)", boxShadow: "#ab049aff" },
          "70%": { transform: "scale(1.08)", boxShadow: "0 0 0 12px rgba(5,39,118,0)" },
          "100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(5,39,118,0)" },
        }, }} />
    </Box>
  );
}
