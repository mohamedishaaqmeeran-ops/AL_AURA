import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import DescriptionIcon from "@mui/icons-material/Description";
import logo from "../assets/ALAura.png";
import { Link as RouterLink } from "react-router-dom";

const Footer_Content = () => {
  return (
  <Box
  sx={{
    backdropFilter: "blur(12px)",
    background: "linear-gradient(90deg, #e4dd03, #3c0160ff)",
    mt: 4,
    mb: -4,
    borderRadius: "15px",
    color: "#e4dd03",
    py: { xs: 3, md: 4 },
    px: { xs: 2, md: 3, lg: 4 },   // 🔥 ADD THIS padding
    width:{lg: "95.5vw",md:"95.5vw",sm:"95.8vw",xs:"92vw",xl:"96.5vw",},
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw", 
  }}
>




     <Box
  sx={{
    background: "#2d013bff",
    borderRadius: "10px",
    width: {lg:"94%",md:"91.5%"},          // ← full width
    p: { xs: 3, md: 5 },
  }}
>


        <Grid container spacing={{ xs: 4, md: 8, lg:25,xl:29,sm:8 }}>
          {/* Logo & Brand */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" >
              <img src={logo} alt="Al Aura Logo" style={{ width: 80, marginRight: 10 }} />
              <Typography fontWeight="bold" sx={{ fontSize: { xs: 30, md: 42 },fontFamily: "XBNiloofar" }}>
                Al-Aura
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" mb={2} fontWeight="bold" textAlign={"left"}>Quick Links</Typography>
            {[
              { text: "Home", icon: <HomeIcon />, link: "/" },
              { text: "About", icon: <InfoIcon />, link: "/Aboutus" },
              { text: "Services", icon: <BuildIcon />, link: "/Services" },
              { text: "Portfolio", icon: <WorkIcon />, link: "/Portfolio" },
              { text: "Contact", icon: <PhoneIcon />, link: "/Contactus" },
            ].map((item, i) => (
             <Link
  key={i}
  component={RouterLink}
  to={item.link}
  sx={{
    textDecoration: "none",
    "&:hover": { color: "#fff" },
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#e4dd03",
    mb: .7
  }}
>
  {item.icon} {item.text}
</Link>
            ))}
          </Grid>

          {/* Customer Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" mb={2} fontWeight="bold" textAlign={"left"}>Customer Support</Typography>
            {[
              { text: "alaura.web@gmail.com", icon: <EmailIcon />, href:"mailto:alaura.web@gmail.com" },
              { text: "+91 95857 78929", icon: <PhoneIcon />,  href:"tel:+919585778929" },
          
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
               
                sx={{textDecoration: "none",
      "&:hover": { color: "#fff" }, display: "flex", alignItems: "center", gap: 1, color: "#e4dd03", mb: .7 }}
              >
                {item.icon} {item.text}
              </Link>
            ))}
          </Grid>

          {/* Legal */}
         <Grid item xs={12} sm={6} md={3}>
  <Typography variant="h6" mb={2} fontWeight="bold" textAlign={"left"}>Legal</Typography>

  <Link
    component={RouterLink}
    to="/PrivacyPolicy"
    sx={{ display: "flex", alignItems: "center", gap: 1, mb: .7, color:"#e4dd03", textDecoration: "none",
          "&:hover": { color: "#fff" }}}
  >
    <PrivacyTipIcon fontSize="small" /> Privacy Policy
  </Link>

  <Link
    component={RouterLink}
    to="/DisclaimerPolicy"
    sx={{ display: "flex", alignItems: "center", gap: 1, color:"#e4dd03", textDecoration: "none",
          "&:hover": { color: "#fff" }}}
  >
    <DescriptionIcon fontSize="small" /> Disclaimer
  </Link>
</Grid>
        </Grid>

        {/* Social Icons */}
        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          <IconButton component="a" href="https://www.instagram.com/_al_aura_?igsh=MXVmZmNzemN1d21wMg==" target="_blank" sx={{ color: "#cb02adff", "&:hover":{color:"#fff"} }}>
            <InstagramIcon />
          </IconButton>
          <IconButton component="a" href="https://www.facebook.com/profile.php?id=61584851582666" target="_blank" sx={{ color: "#4813ceff", "&:hover":{color:"#fff"} }}>
            <FacebookIcon />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/al-aura-al-aura-5547943a0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" sx={{ color: "#0669ccff", "&:hover":{color:"#fff"} }}>
            <LinkedInIcon />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography align="center" mt={3} sx={{ color: "#e4dd03", fontSize: { xs: 13, md: 15 } }}>
          © {new Date().getFullYear()} AL-Aura. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer_Content;
