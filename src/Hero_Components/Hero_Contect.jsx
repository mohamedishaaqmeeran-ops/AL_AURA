import React, { useEffect, useState } from "react";
import { Box, Dialog, DialogContent, TextField, Button, Typography } from "@mui/material";

import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";
import C4 from "../assets/C4.jpg";

const slides = [
  { image: C1 },
  { image: C2 },
  { image: C3 },
  { image: C4 },
];

// Google Form action URL
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScOgO2sO5DsTWd1M-Wapff_jnuX8UK9jnqaEr2oyYcjeeOUKA/formResponse";

export default function MUICarousel() {
  const [index, setIndex] = useState(0);
  const [openQuote, setOpenQuote] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 2500);
    return () => clearInterval(timer);
  }, []);

  // Submit form to Google Form
  const handleSubmitToGoogleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Form
      body: formData,
    });

    alert("Submitted successfully!");
    setOpenQuote(false);
    form.reset();
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#2d013bff",
        
        position: "relative",
        ml: "calc(50% - 50vw)",
        mr: "calc(50% - 50vw)",
      }}
    >
      {/* Sliding Images */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          transform: `translateX(-${index * 100}%)`,
          transition: "0.7s",
        }}
      >
        {slides.map((item, i) => (
          <Box key={i} sx={{ minWidth: "100%", height: "100%" }}>
            <Box
              component="img"
              src={item.image}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          backdropFilter: "blur(6px)",
          background: "rgba(0,0,0,0.35)",
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 3 },
          borderRadius: "12px",
        }}
      >
        <Box
          component="h1"
          sx={{
            m: 0,
            fontSize: { xs: "1.7rem", sm: "2.4rem", md: "3rem" },
            fontWeight: "bold",
            fontFamily: "XBNiloofar",
          }}
        >
          AL-AURA DIGITAL FREELANCING
        </Box>

        <Box
          component="p"
          sx={{
            mt: 2,
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            maxWidth: "550px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          I deliver modern websites, branding and creative solutions that elevate your business
          and convert visitors into clients.
        </Box>

        {/* Buttons */}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
          <Box
            component="button"
            onClick={() => setOpenQuote(true)}
            style={{
              padding: "12px 26px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#e4dd03",
              color: "#2d013bff",
              fontWeight: "bold",
              boxShadow: "0 0 18px rgba(192, 195, 7, 0.7)",
            }}
          >
            GET A QUOTE
          </Box>

          <Box
            component="button"
            onClick={() => (window.location.href = "/contactus")}
            style={{
              padding: "12px 26px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "2px solid #e4dd03",
              background: "transparent",
              cursor: "pointer",
              color: "#e4dd03",
              fontWeight: "bold",
              boxShadow: "0 0 18px rgba(192, 195, 7, 0.7)",
            }}
          >
            Contact Us
          </Box>
        </Box>
      </Box>

      {/* QUOTE FORM DIALOG */}
      <Dialog open={openQuote} onClose={() => setOpenQuote(false)}>
        <DialogContent
          sx={{
            width: { xs: "90vw", sm: "400px" },
            maxWidth: "100%",
            boxSizing: "border-box",
            bgcolor: "#2d013b",
            color: "#fff",
            p: 3,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            Request a Quote
          </Typography>

          <form onSubmit={handleSubmitToGoogleForm}>
            <TextField
              fullWidth
              name="entry.188421843"
              label="Your Name"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <TextField
              fullWidth
              name="entry.213068606"
              label="Your Email"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <TextField
              fullWidth
              name="entry.421115027"
              label="Mobile Number"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              name="entry.1478379525"
              label="Details"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                 "& input, & textarea": { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#c0c307ff",
                color: "#2d013bff",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#e0e200" },
              }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
