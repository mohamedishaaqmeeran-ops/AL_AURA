import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  TextField,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// carousel images
import img1 from "../assets/C1.jpg";
import img2 from "../assets/C2.jpg";
import img3 from "../assets/C3.jpg";
import img4 from "../assets/C4.jpg";
const images = [img1, img2, img3, img4];

// 🔴 REPLACE with your Google Form action URL
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScOgO2sO5DsTWd1M-Wapff_jnuX8UK9jnqaEr2oyYcjeeOUKA/formResponse";

export default function Hero_mob() {
  const [index, setIndex] = useState(0);
  const [openQuote, setOpenQuote] = useState(false);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Google Form submit handler
  const handleSubmitToGoogleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setOpenQuote(false);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background carousel */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: 2,
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            mb: 1.5,
            fontFamily: "XBNILOOFAR",
            fontSize: "2.5rem",
            letterSpacing: "1px",
          }}
        >
          AL AURA
        </Typography>

        <Typography sx={{ mb: 2, fontSize: "1.1rem", }}>
          Creative Web Solutions for Modern Brands
        </Typography>

        <Typography sx={{ mb: 4, lineHeight: 1.6 }}>
          I help businesses and startups build fast, responsive, and visually
          stunning websites that convert visitors into customers.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            onClick={() => setOpenQuote(true)}
            sx={{
              px: 3,
              py: 1.4,
              borderRadius: "10px",
              background: "#e4dd03",
              color: "#2d013b",
              fontWeight: "bold",
              boxShadow: "0 0 18px rgba(192,195,7,0.7)",
            }}
          >
            GET A QUOTE
          </Button>

          <Button
            onClick={() => (window.location.href = "/Contactus")}
            variant="outlined"
            sx={{
              px: 3,
              py: 1.4,
              borderRadius: "10px",
              border: "2px solid #e4dd03",
              color: "#e4dd03",
              fontWeight: "bold",
              "&:hover":{border:"2px solid #e4dd03"},
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Quote Dialog */}
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
