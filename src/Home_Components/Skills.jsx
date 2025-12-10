import React, { useEffect } from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import i1 from "../assets/react.jpg";
import i2 from "../assets/node.jpg";
import i3 from "../assets/js.jpg";
import i4 from "../assets/html.jpg";
import i5 from "../assets/css.jpg";
import i6 from "../assets/canva.jpg";
import i7 from "../assets/sql.jpg";
import i8 from "../assets/python.jpg";
import i9 from "../assets/mui.png";
import i10 from "../assets/bootsrtap.jpg";
import i11 from "../assets/tailwind.jpg";
import i12 from "../assets/figma.jpg";

const skills = [
  { id: 1, image: i1 },
  { id: 2, image: i2 },
  { id: 3, image: i3 },
  { id: 4, image: i4 },
  { id: 5, image: i5 },
  { id: 6, image: i6 },
  { id: 7, image: i7 },
  { id: 8, image: i8 },
  { id: 9, image: i9 },
  { id: 10, image: i10 },
  { id: 11, image: i11 },
  { id: 12, image: i12 },
];

// Duplicate list for infinite scroll
const slidingList = [...skills, ...skills];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        mt: 10,
        mb: 10,
        overflow: "hidden",
        ml: "calc(50% - 50vw)",
        mr: "calc(50% - 50vw)",
        width: "100vw",
      }}
      data-aos="fade-up"
    >
      <Typography
        variant="h3"
        data-aos="zoom-in"
        data-aos-delay="200"
        sx={{
          fontFamily: "XBNiloofar",
          textAlign: "center",
          mb: 10,
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        My Skills
      </Typography>

      <Box
        data-aos="fade-up"
        data-aos-delay="400"
        sx={{
          display: "flex",
          width: "max-content",
          py: 3,
          animation: "slide 20s linear infinite",
          gap: 3,
        }}
      >
        {slidingList.map((skill, index) => (
          <Card
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 50}
            sx={{
              width: { lg: 170, xs: 70, sm: 150 },
              height: { lg: 170, xs: 70, sm: 150 },
              borderRadius: 3,
              overflow: "hidden",
              flexShrink: 0,
              background: "rgba(228, 221, 3, 0.7)",
              backdropFilter: "blur(10px)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.08)",
                boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={skill.image}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        ))}
      </Box>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
}
