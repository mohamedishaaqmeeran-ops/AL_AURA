import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import JL from "../assets/JL.jpg"
import JP from "../assets/JP.jpg"
import JV from "../assets/JV.jpg"
import MW from "../assets/modern.png"
import FW from "../assets/FW.png"
import ZP from "../assets/ZP.png"

const projects = [
  { id: 1, title: "LOGO", description: "We have designed logo for Jotech Technical Service, Dubai, UAE", image: JL },
  { id: 2, title: "COMPANY PROFILE", description: "We have designed company profile document for Jotech Technical Service, Dubai, UAE", image: JP },
  { id: 3, title: "VISITING CARD", description: "We have designed company visiting card for Jotech Technical Service, Dubai, UAE", image: JV },
  { id: 4, title: "NEW MODERN WEBSITE", description: "Hosted live website for New Modern Computers", image: MW },
  { id: 5, title: "SOCIAL MEDIA POST", description: "Designed a post for Zain Homemade cakes.", image: ZP },
  { id: 6, title: "FORTURA TECH WEBSITE", description: "Hosted website for Fortura tech", image: FW },
];

const Portfolio = () => {

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box padding={{ sm: 3, xs: 0 }} sx={{ mb: 10, mt: 10 }}>
      
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "XBNiloofar",
        }}
        data-aos="fade-down"
      >
        My Projects
      </Typography>

      <Grid container columnSpacing={{ xs: 11, sm: 5, md: 26, lg: 11 }} rowSpacing={{ xs: 5, sm: 8 }} mt={10}>
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            data-aos="fade-up"
          >
            <Card
              sx={{
                width: { md: 350, xs: "100%", sm: "40vw" },
                height: "50vh",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                sx={{ objectFit: "contain" }}
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#2d013bff" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#2d013bff" }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
