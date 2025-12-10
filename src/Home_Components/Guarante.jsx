import { Box, Typography, Grid } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const guarantees = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 40, color: "#2d013bff" }} />,
    title: "100% Satisfaction",
    desc: "I ensure the final product matches your vision and exceeds expectations.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#2d013bff" }} />,
    title: "Secure & Reliable",
    desc: "All projects are built with best practices in security and stability.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#2d013bff" }} />,
    title: "Ongoing Support",
    desc: "Even after launch, I provide support and guidance to keep your project thriving.",
  },
];

export default function Guarantee() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ mt: 10, mb: 10, px: { xs: 3, sm: 6, md: 12 }, textAlign: "center" }}>
      
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 8,
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "XBNiloofar",
        }}
        data-aos="fade-down"
      >
        My Guarantee
      </Typography>

      <Grid container spacing={{ lg: 15, xs: 8 }} justifyContent="center">
        {guarantees.map((g, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ height: "auto" }}
            data-aos="fade-up"
            data-aos-delay={i * 200} // 0ms, 200ms, 400ms
          >
            <Box
              sx={{
                width: { lg: 200, xs: "72%", sm: "55vw" },
                p: 5,
                borderRadius: 3,
                background: "rgba(228, 221, 3, 0.7)",
                backdropFilter: "blur(12px)",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 15px 35px rgba(228,221,3,0.3)",
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
                {g.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 3,
                  mb: 2,
                  color: "#2d013bff",
                }}
              >
                {g.title}
              </Typography>

              <Typography sx={{ color: "#fff", fontSize: "1rem" }}>
                {g.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
