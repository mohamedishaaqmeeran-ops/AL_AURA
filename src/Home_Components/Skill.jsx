import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";


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
  { id: 1, image: i1,name:"React" },
  { id: 2, image: i2, name:"Node" },
  { id: 3, image: i3, name:"JS" },
  { id: 4, image: i4 , name:"HTML"},
  { id: 5, image: i5, name:"CSS" },
  { id: 6, image: i6, name:"Canva" },
  { id: 7, image: i7, name: "MySQL"},
  { id: 8, image: i8 , name:"Python"},
  { id: 9, image: i9, name: "MUI"},
  { id: 10, image: i10, name:"Bootstrap" },
  { id: 11, image: i11, name:"Tailwind" },
  { id: 12, image: i12, name:"Figma" },
];

// Skills.jsx
export default function Skill() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } ,display:{sm:"none",xs:"block"}}}>
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

      <Grid container spacing={4} justifyContent="center" sx={{ flexWrap: { xs: "wrap" },
    }}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "20px",
                bgcolor: "rgba(228, 221, 3, 0.7)",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  transition: "all 0.4s ease",
                    "&:hover": {
                transform: "scale(1.08)",
                boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
              },
                }}
              >
                {/* glowing background */}
              

                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    py: 4,
                  }}
                >
                  <Avatar
                    src={skill.image}
                    alt={skill.name}
                    sx={{
                      width: 90,
                      height: 90,
                      bgcolor: "#fff",
                      p: 1,
                    }}
                  />

                  <Typography variant="h6" sx={{ fontWeight: 600,color:"#2d013bff" }}>
                    {skill.name}
                  </Typography>

                
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
