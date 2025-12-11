import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScKfwESA2_Qn2eZ1ZBRoslb0vZhLT4hCXr-xGMq7E-QXReVyQ/formResponse";
  const EMAIL_ENTRY_ID = "entry.1835974324";

  const handleSubscribe = async () => {
    if (!email.includes("@")) return setStatus("invalid");

    const formData = new FormData();
    formData.append(EMAIL_ENTRY_ID, email);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Box
      sx={{
        mt: 14, 
        textAlign: "center",
        px: { xs: 3, sm: 6, md: 12 },
        py: 8,
        borderRadius: 5,
        mb: 10,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
      }}
      data-aos="fade-up"
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "XBNiloofar",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Subscribe for Free Web Tips
      </Typography>

      <Typography sx={{ color: "#fff", mb: 4 }} data-aos="fade-up" data-aos-delay="200">
        Get weekly tips on websites, design, business growth & freelancing.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "330px" },
            background: "#fff",
            borderRadius: "8px",
          }}
        />

        <Button
          onClick={handleSubscribe}
          sx={{
            px: 4,
            borderRadius: "8px",
            bgcolor: "#2d013bff",
            color: "#c0c307ff",
            border: "2px solid #c0c307ff",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#c0c307ff",
              color: "#2d013bff",
              boxShadow: "0 0 18px rgba(192, 195, 7, 0.7)",
              border: "none",
            },
          }}
        >
          Subscribe <SendRoundedIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

      {status === "success" && (
        <Typography sx={{ mt: 3, color: "#98ff98" }} data-aos="fade-up" data-aos-delay="400">
          🎉 You're subscribed!
        </Typography>
      )}

      {status === "invalid" && (
        <Typography sx={{ mt: 3, color: "#ff6b6b" }} data-aos="fade-up" data-aos-delay="400">
          ⚠ Enter a valid email address.
        </Typography>
      )}

      {status === "error" && (
        <Typography sx={{ mt: 3, color: "#ff6b6b" }} data-aos="fade-up" data-aos-delay="400">
          ❌ Something went wrong. Try again.
        </Typography>
      )}
    </Box>
  );
}
