import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const principles = [
  {
    title: "Clarity First",
    text: "We communicate clearly on goals, expectations and timelines — no confusion, no surprises."
  },
  {
    title: "Quality Over Quantity",
    text: "Every project is crafted with detail, precision and originality — nothing rushed, nothing copied."
  },
  {
    title: "User-Focused Approach",
    text: "Every design and technical decision is made with the end-user in mind for smooth experiences."
  },
  {
    title: "Timely Delivery",
    text: "Deadlines are respected. Projects are completed on time without reducing quality."
  },
  {
    title: "Transparent Process",
    text: "Pricing, communication and development remain honest and visible throughout the project."
  },
  {
    title: "Long-Term Trust",
    text: "We aim to build reliable and long-lasting partnerships — not just one-time projects."
  },
];

export default function Principles() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Box sx={{ background: "#200428", py: 8, mb: 10, overflowX:"hidden" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 5,
            background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "XBNiloofar",
            fontSize: { xs: 26, sm: 32, md: 40 },
          }}
          data-aos="fade-down"
        >
          Principles of Working
        </Typography>

        {/* Cards */}
        <Grid container spacing={{ xs: 5, md: 10 }} justifyContent="center">
          {principles.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              display="flex"
              justifyContent="center"
            >
              <Paper
                sx={{
                  width: { xs: "90%", sm: "85%", md: "100%" },
                  p: 4,
                  minHeight: 220, // same height for all cards
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 3,
                  background: "rgba(228, 221, 3, 0.7)",
                  backdropFilter: "blur(12px)",
                  transition: "0.35s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 25px rgba(228,221,3,0.25)",
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#2d013bff" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#fff", flexGrow: 1 }}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
