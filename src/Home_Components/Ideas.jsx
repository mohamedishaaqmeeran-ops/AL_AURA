import React, { useEffect } from "react";
import { Box, Grid, Typography, Card, CardContent, Chip } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const ideas = [
  {
    id: 1,
    title: "Web Development Services",
    description: "Build responsive websites with modern technologies like React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "Web"],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Create intuitive and attractive interfaces with Figma and design best practices.",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: 3,
    title: "Freelance Consultation",
    description: "Guide clients on tech solutions, workflows, and project planning for their business needs.",
    tags: ["Consulting", "Business", "Freelance"],
  },
  {
    id: 4,
    title: "Custom Web Applications",
    description: "Develop tailor-made web apps for startups and businesses to enhance efficiency and engagement.",
    tags: ["Web App", "React", "Node.js"],
  },
];


function Ideas() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ mt: 10, mb: 10, px: { xs: 3, sm: 6, md: 12 } }}>
      <Typography
        variant="h3"  data-aos="fade-up"
        sx={{
          mb: 10,
          textAlign: "center", background: "linear-gradient(90deg, #e4dd03, #9d00ff)", WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          color: "#fff",fontFamily: "XBNiloofar",
        }}
      >
      Solutions I Deliver
      </Typography>

     <Grid container columnSpacing={15} rowSpacing={5} justifyContent={"center"}>
  {ideas.map((idea) => (
    <Grid 
      key={idea.id} 
      item 
      xs={12}   // 1 card per row on xs
      sm={12}   // 1 card per row on sm
      md={6}    // 2 cards per row on md and above
      lg={6} 
      xl={6} 
      data-aos="fade-up"
    >
      <Card sx={{ backgroundColor:  "rgba(228, 221, 3, 0.7)", borderRadius: 3, p: 2, height: {xs:250,sm:200} ,width:{lg:450,xs:"90%",sm:"54vw"},  backdropFilter: "blur(10px)", // blur effect
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
                },}}>
        <CardContent>
          <Typography variant="h6" sx={{ color: "#2d013bff", fontWeight: "bold", mb: 1 }}>
            {idea.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff", mb: 2 }}>
            {idea.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1,pt:5 }}>
            {idea.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" sx={{ backgroundColor: "#2d013bff", color: "#fff" }} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
}

export default Ideas;
