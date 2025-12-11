import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    q: "How long does it take to build a website",
    a: "Most business websites take 5–10 days. Custom apps take 2–6 weeks depending on features and integrations.",
  },
  {
    q: "Do you provide support after delivery",
    a: "Yes. Every project includes free post-launch support + affordable maintenance plans for long-term growth.",
  },
  {
    q: "Can you work with international clients",
    a: "Absolutely. I work with clients around the world using WhatsApp, Zoom, and Google Meet for seamless coordination.",
  },
  {
    q: "Do you require full payment upfront",
    a: "No. I follow a transparent milestone-payment system so you pay only when each part of the project is completed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Box
      sx={{ mt: 16, px: { xs: 0, sm: 6, md: 12 }, textAlign: "center", overflowX:"hidden" }}
      data-aos="fade-up"
    >
      <Typography
        variant="h3"
        data-aos="zoom-in"
        sx={{
          fontWeight: "bold",
          mb: 10,
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "XBNiloofar",
        }}
      >
        Have Questions? I’ve Got Answers
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <Box
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              onClick={() => setOpen(isOpen ? null : i)}
              sx={{
                cursor: "pointer",
                p: 3,
                borderRadius: "14px",
                border: "2px solid transparent",
                background: "rgba(255,255,255,0.05)",
                position: "relative",
                transition: "0.4s",
                "&:hover": {
                  borderColor: "#e4dd03",
                  boxShadow: "0 0 20px rgba(228,221,3,0.35)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  color: "#e4dd03",
                }}
              >
                {item.q} {isOpen ? "💬" : "❓"}
              </Typography>

              {/* ANSWER */}
              <Box
                sx={{
                  mt: isOpen ? 2 : 0,
                  maxHeight: isOpen ? "200px" : "0px",
                  overflow: "hidden",
                  opacity: isOpen ? 1 : 0,
                  transition: "0.45s ease",
                }}
              >
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    background: "rgba(228,221,3,0.15)",
                    borderLeft: "4px solid #e4dd03",
                    borderRadius: "12px",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "0.97rem",
                    lineHeight: 1.55,
                    textAlign: "left",
                  }}
                >
                  {item.a}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Typography sx={{ mt: 7, color: "#ccc", fontSize: "0.92rem" }}>
        Didn’t find your answer? Text me — I love helping 💛
      </Typography>
    </Box>
  );
}
