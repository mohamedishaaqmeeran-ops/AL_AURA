import { Box, Typography, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const reasons = [
  {
    icon: <StarIcon fontSize="large" />,
    title: "Business-Focused Creative Work",
    desc: "I turn ideas into digital solutions that actually increase leads, revenue, and brand value.",
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: "Smart Decisions, Not Guesswork",
    desc: "Every decision — layout, color, automation — is backed by UX strategy and user psychology.",
  },
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: "I Work With You, Not For You",
    desc: "You get clear updates every week with visuals, prototypes, and progress — no surprises.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "Continued Guidance & Support",
    desc: "After launch, I remain available for improvements, new ideas, and future business growth.",
  },
];

export default function Choose() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ mt: 14, px: { xs: 3, sm: 6, md: 12 }, overflowX:"hidden" }} data-aos="fade-up">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 8,
          fontFamily: "XBNiloofar",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Why Clients Prefer Working With Me
      </Typography>

     <Stack spacing={6} sx={{ position: "relative", mt: 10 }}>
  {reasons.map((r, i) => (
    <Box
      key={i}
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "flex-start",
        position: "relative",
        flexDirection: { xs: "column", sm: "row" }, // stack vertically on iPhone
        alignItems: { xs: "center", sm: "flex-start" },
      }}
      data-aos="fade-up"
      data-aos-delay={150 + i * 150}
    >
      {/* Timeline vertical line */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "50%", sm: 26 }, // center line on iPhone
          top: 0,
          bottom: i !== reasons.length - 1 ? "-48px" : "0",
          width: "2px",
          background: i !== reasons.length - 1 ? "#c0c307ff" : "transparent",
          transform: { xs: "translateX(-50%)", sm: "none" }, // center line properly
        }}
      />

      {/* Icon circle */}
      <Box
        sx={{
          zIndex: 20,
          minWidth: 52,
          height: 52,
          borderRadius: "50%",
          background: "#c0c307ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2d013bff",
          boxShadow: "0 0 12px rgba(228,221,3,0.6)",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.12)",
            boxShadow: "0 0 18px rgba(228,221,3,0.9)",
          },
          mb: { xs: 2, sm: 0 }, // spacing below icon on iPhone
        }}
      >
        {r.icon}
      </Box>

      {/* Text */}
      <Box
        sx={{
          background: "rgba(228, 221, 3, 0.7)",
          border: "1px solid rgba(228,221,3,0.2)",
          p: 3,
          borderRadius: 3,
          flex: 1,
          backdropFilter: "blur(6px)",
          transition: "0.3s",
          textAlign: { xs: "center", sm: "left" }, // center text on iPhone
          width: { xs: "90%", sm: "auto" }, // make text box narrower on iPhone
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
          },
        }}
      >
        <Typography variant="h6" sx={{ color: "#2d013bff", fontWeight: "bold", mb: 1 }}>
          {r.title}
        </Typography>
        <Typography sx={{ color: "#fff" }}>{r.desc}</Typography>
      </Box>
    </Box>
  ))}
</Stack>

    </Box>
  );
}
