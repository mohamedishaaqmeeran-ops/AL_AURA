import React, { useEffect } from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ background: "#200428", py: 8 , overflowX:"hidden"}}>
      <Container maxWidth="lg">
        
        {/* Vision Heading */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h3"
            data-aos="fade-down"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "XBNiloofar"
            }}
          >
            Our Vision
          </Typography>
        </Box>

        {/* Vision Card */}
        <Grid container justifyContent="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={10}>
            <Paper
              data-aos="fade-up"
              data-aos-delay="150"
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "20px",
                background: "rgba(228, 221, 3, 0.7)",
                backdropFilter: "blur(12px)",
                textAlign: "center",
                transition: "0.4s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 0 25px rgba(228,221,3,0.25)",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 18, lineHeight: 1.8, color: "#fff" }}
              >
                To build a creative digital space where innovation, design, and
                technology empower brands and individuals to grow confidently in the
                digital world. Al Aura envisions becoming a trusted partner that
                delivers meaningful, impactful and inspiring digital experiences globally.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Mission Heading */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h3"
            data-aos="fade-down"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "XBNiloofar"
            }}
          >
            Our Mission
          </Typography>
        </Box>

        {/* Mission Card */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <Paper
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "20px",
                background: "rgba(228, 221, 3, 0.7)",
                backdropFilter: "blur(12px)",
                textAlign: "center",
                transition: "0.4s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 0 25px rgba(228,221,3,0.25)",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#fff",
                  textAlign: "left",
                }}
              >
                ✔ Deliver powerful digital solutions blending creative design and
                technology. <br />
                ✔ Provide fast, modern, and user-centered results for every client. <br />
                ✔ Build long-term partnerships through trust, transparency, and reliability. <br />
                ✔ Offer premium digital services at accessible and transparent pricing. <br />
                ✔ Ensure every project has purpose, value, and lasting impact.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
