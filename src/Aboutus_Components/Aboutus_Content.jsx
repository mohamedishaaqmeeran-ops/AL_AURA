import React, { useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import img from "../assets/about.jpg";

// ⭐ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

  // ⭐ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>

      {/* Top Image */}
      <Box
        component="img"
        src={img}
        alt="Al Aura Freelance Work"
        data-aos="fade-down"
        sx={{
          width: "100vw",
          height: "768px",
          borderRadius: 2,
          mb: 4,
          mt: -1,
          ml: "calc(50% - 50vw)",
          mr: "calc(50% - 50vw)",
          objectFit: "cover",
          boxShadow: 3,
        }}
      />

      {/* Title */}
      <Typography
        variant="h3"
        data-aos="zoom-in"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 5,
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "XBNiloofar",
        }}
      >
        About AL-Aura
      </Typography>

      {/* Content Paragraphs */}
      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: 20 }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Welcome to Al Aura! I specialize in providing high-quality freelance services 
        that bring creativity and innovation to every project. From design and development 
        to digital solutions, my goal is to help businesses and individuals achieve 
        their vision with precision and style.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: 20 }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        With a strong passion for technology and design, Al Aura is committed to delivering 
        work that not only meets expectations but exceeds them. I believe in clear 
        communication, timely delivery, and creating solutions that truly make an impact.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ fontSize: 20 }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Whether you're looking for a custom website, a polished UI/UX design, or any other 
        digital service, Al Aura is here to turn your ideas into reality. Let's work 
        together to create something amazing!
      </Typography>
    </Container>
  );
}
