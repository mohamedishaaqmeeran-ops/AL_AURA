import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PaletteIcon from "@mui/icons-material/Palette";
import BrushIcon from "@mui/icons-material/Brush";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShareIcon from "@mui/icons-material/Share";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import DescriptionIcon from "@mui/icons-material/Description";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MailIcon from "@mui/icons-material/Mail";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

import { useNavigate } from "react-router-dom";

// ⭐ AOS IMPORTS
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const services = [
  { title: "Website / Web App Development", icon: <ComputerIcon fontSize="large" />, desc: "Responsive and custom-built business websites, portfolios, and web applications." },
  { title: "Poster Design", icon: <DesignServicesIcon fontSize="large" />, desc: "Eye-catching posters for events, promotions and marketing alerts." },
  { title: "Banner Design", icon: <PaletteIcon fontSize="large" />, desc: "Professional banners for websites, ads, YouTube, and printing." },
  { title: "Logo Design", icon: <BrushIcon fontSize="large" />, desc: "Brand-focused logo designs that leave a strong impression." },
  { title: "Invitation Design", icon: <CelebrationIcon fontSize="large" />, desc: "Creative digital and printable invitations for weddings, birthdays, events, etc." },
  { title: "Visiting Card Design", icon: <CreditCardIcon fontSize="large" />, desc: "Modern and professional business card designs that reflect your brand identity." },
  { title: "Social Media Post Design", icon: <ShareIcon fontSize="large" />, desc: "Premium posts for Facebook, Instagram, LinkedIn & more to boost brand engagement." },
  { title: "Business Portfolio Website", icon: <BusinessCenterIcon fontSize="large" />, desc: "Portfolio websites for agencies, freelancers and corporate businesses." },
  { title: "E-Commerce Website", icon: <StorefrontIcon fontSize="large" />, desc: "Online store setup with product upload support and payment gateway integration." },
  { title: "UI / UX Wireframing", icon: <ViewQuiltIcon fontSize="large" />, desc: "User-centered wireframes and mockups for websites and mobile apps." },
  { title: "Brochure / Flyer Design", icon: <DescriptionIcon fontSize="large" />, desc: "Digital and printable brochures to promote products and services." },
  { title: "Menu Card Design", icon: <RestaurantMenuIcon fontSize="large" />, desc: "Menu cards for restaurants, cafés, bakeries and hotels." },
  { title: "Resume / CV Design", icon: <AssignmentIndIcon fontSize="large" />, desc: "Professional resume layouts for job seekers and students." },
  { title: "Letterhead & Envelope Design", icon: <MailIcon fontSize="large" />, desc: "Corporate stationery that reflects strong brand identity." },
  { title: "Brand Identity Pack", icon: <BrandingWatermarkIcon fontSize="large" />, desc: "Logo + Business Card + Letterhead + Social Media Kit + Brand Guidelines." },
  { title: "Social Media Management", icon: <GroupWorkIcon fontSize="large" />, desc: "Monthly posting, scheduling & engagement support for business profiles." },
];

export default function Service_Contents() {
  const navigate = useNavigate();

  // ⭐ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Box sx={{ py: 6, maxWidth: "1200px", mx: "auto", px: 2, mt: 10, mb: 10 }}>

      {/* ⭐ Heading Animation */}
      <Typography
        variant="h3"
        data-aos="fade-down"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "XBNiloofar",
        }}
      >
        Our Services — Turning Ideas Into Digital Reality
      </Typography>

     <Grid container rowSpacing={0} columnSpacing={{ xs: 3, sm: 5, xl: 26,lg:25 }}>
  {services.map((service, index) => (
    <Grid
      item
      xs={12}  // full width on iPhone
      sm={6}
      md={4}
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 80}
      sx={{ display: "flex", justifyContent: "center" }} // center card on iPhone
    >
      <Card
        sx={{
          height:{xs:"30vh"},
          mt: { xs: 5, sm: 10 }, // smaller margin top on iPhone
          p: 2,
          width: {
            xs: "90%", // responsive width for iPhone
            sm: "80vw",
            md: "87.5vw",
            lg: "32.5vw",
            xl: "30vw",
          },
          textAlign: "center",
          borderRadius: "20px",
          background: "rgba(228, 221, 3, 0.7)",
          backdropFilter: "blur(12px)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            border: "none",
            boxShadow: "0 0 25px rgba(228,221,3,0.25)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              color: "#2d013bff",
              width: 70,
              height: 70,
              mx: "auto",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              background: "linear-gradient(0deg, #2d013bff, #c0c307ff)",
              boxShadow: "0 0 12px rgba(228,221,3,0.45)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            {service.icon}
          </Box>

          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mt: 1, mb: 1, color: "#2d013bff", fontSize: { xs: "1rem", sm: "1.1rem" } }}
          >
            {service.title}
          </Typography>

          <Typography sx={{ color: "#fff", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            {service.desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

{/* ⭐ Button */}
<Box sx={{ textAlign: "center", mt: { xs: 4, sm: 5 } }} data-aos="zoom-in">
  <Button
    variant="contained"
    size="large"
    sx={{
      fontSize: { xs: "16px", sm: "18px" },
      bgcolor: "#2d013bff",
      color: "#c0c307ff",
      border: "2px solid #c0c307ff",
      borderRadius: "8px",
      px: { xs: 2, sm: 3 },
      height: 40,
      fontWeight: 600,
      boxShadow: "0 0 8px rgba(192, 195, 7, 0.3)",
      transition: "0.35s",
      "&:hover": {
        bgcolor: "#c0c307ff",
        color: "#2d013bff",
        boxShadow: "0 0 18px rgba(192, 195, 7, 0.7)",
        border: "none",
      },
    }}
    onClick={() => navigate("/Contactus")}
  >
    Contact Us
  </Button>
</Box>

    </Box>
  );
}
