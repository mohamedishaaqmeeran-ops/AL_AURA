import React, { useEffect } from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const cards = [
  {
    id: 1,
    title: "Idea & Consultation",
    description:
      "We start by understanding your vision.\nWe discuss your goals, budget, and timeline to tailor the perfect solution.",
    icon: <LightbulbIcon />
  },
  {
    id: 2,
    title: "Design & Planning",
    description:
      "Your project comes to life with careful planning.\nWe create clear designs, wireframes, and a roadmap to execute smoothly.",
    icon: <DesignServicesIcon />
  },
  {
    id: 3,
    title: "Development & Implementation",
    description:
      "We build high-quality, scalable solutions.\nWhether it’s a website, app, or custom tool, we ensure functionality and performance.",
    icon: <RocketLaunchIcon />
  },
  {
    id: 4,
    title: "Delivery & Support",
    description:
      "We deliver your project on time and provide ongoing support.\nOur goal is your satisfaction and your project’s success.",
    icon: <HandshakeIcon />
  },
];

function Start() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 

  return (
    <Box sx={{ mt: { xs: 8 }, width: "100%", overflow: "hidden", position: "relative", pb: { xs: 5, sm: 5, md: 5 } }}>
      <Typography
        variant="h3"
        sx={{
          ml: { lg: 9, md: 6, sm: 2, xl: 9 },
          mb: 3,
          textAlign: "center",fontFamily: "XBNiloofar",
           background: "linear-gradient(90deg, #e4dd03, #9d00ff)", WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent", fontWeight: "bold",
        }}
        data-aos="fade-up"
      >
        How It Was Started
        
      </Typography>

      <Grid container spacing={{ lg: 10, sm: 7.5, xs: 8, md: 12.5 }} px={3} mt={10}>
  {cards.map((item) => (
    <Grid
      key={item.id}
      item
      xs={12} // make it full width on very small screens like iPhone
      sm={6}
      md={3}
      xl={3}
      data-aos="fade-up"
      sx={{
        display: "flex",
        justifyContent: "center", // center card on iPhone
      }}
    >
      <Card
        sx={{
          p: 3,
          width: { lg: 200, sm: 250, md: 350, xs: "90%" }, // change xs width for iPhone
          maxWidth: 350,
          bgcolor: "rgba(228, 221, 3, 0.7)",
          color: "#fff",
          minHeight: 300,
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
          },
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            mb: 2,
            mx: "auto",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(0deg, #2d013bff, #c0c307ff)",
            color: "#000",
            fontSize: 24,
          }}
        >
          {item.icon}
        </Box>

        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 1,
              background: "#2d013bff",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center", // center title on small screens
            }}
          >
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ whiteSpace: "pre-line", fontSize: 15, color: "#fff", textAlign: "center" }}
          >
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </Box>
  );
}

export default Start;
