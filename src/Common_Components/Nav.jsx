import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/ALAura.png";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";

const pages = [
  { title: "Home", icon: <HomeIcon fontSize="small" />, link: "/" },
  { title: "About us", icon: <InfoIcon fontSize="small" />, link: "/Aboutus" },
  { title: "Services", icon: <BuildIcon fontSize="small" />, link: "/Services" },
  { title: "Portfolio", icon: <WorkIcon fontSize="small" />, link: "/Portfolio" },
  { title: "Contact us", icon: <CallIcon fontSize="small" />, link: "/Contactus" },
];

// Google Form action URL
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScOgO2sO5DsTWd1M-Wapff_jnuX8UK9jnqaEr2oyYcjeeOUKA/formResponse";

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openQuote, setOpenQuote] = React.useState(false);
  const location = useLocation();

  // Submit form to Google Form
  const handleSubmitToGoogleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Form
      body: formData,
    });

    alert("Submitted successfully!");
    setOpenQuote(false);
    form.reset();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100vw",
          bgcolor: "rgba(45, 1, 59, 0.55)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.13)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.45)",
          transition: "all 0.3s ease-in-out", overflowX:"hidden"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1.5,
                mr: 4,
                ml: { xl: 2 },
              }}
            >
              <Box component="img" src={logo} alt="Logo" sx={{ width: 45, borderRadius: "6px" }} />
              <Typography sx={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: 1, fontFamily: "XBNiloofar" }}>
                AL-AURA
              </Typography>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>

              {/* Mobile Menu */}
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  sx: { backgroundColor: "#2d013bff", color: "#fff" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    component={Link}
                    to={page.link}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: location.pathname === page.link ? "#c0c307ff" : "#fff",
                      transition: "0.25s",
                      "&:hover": { color: "#c0c307ff" },
                    }}
                  >
                    {page.icon} &nbsp; {page.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1, flexGrow: 1 }}>
              <Box component="img" src={logo} sx={{ width: 40, borderRadius: "6px" }} />
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: 1, fontFamily: "XBNiloofar" }}>
                AL-AURA
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                ml: "auto",
                display: { xs: "none", md: "flex" },
                gap: { lg: 5, md: 3 },
                alignItems: "center",
                mr: { xl: 5, lg: 3 },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={Link}
                  to={page.link}
                  sx={{
                    color: location.pathname === page.link ? "#c0c307ff" : "#e5e5e5",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    gap: 1,
                    paddingBottom: "6px",
                    borderBottom:
                      location.pathname === page.link ? "3px solid #c0c307ff" : "3px solid transparent",
                    transition: "0.35s",
                    "&:hover": {
                      color: "#c0c307ff",
                      borderBottom: "3px solid #c0c307ff",
                      transform: "translateY(-3px)"
                    },
                  }}
                >
                  {page.icon}
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* GET A QUOTE Button */}
            <Button
              variant="contained"
              onClick={() => setOpenQuote(true)}
              sx={{
                bgcolor: "#2d013bff",
                color: "#c0c307ff",
                border: "2px solid #c0c307ff",
                borderRadius: "8px",
                px: { xs: 2, sm: 3 },
                height: 40,
                fontWeight: 600,
                ml: { md: 2 },
                boxShadow: "0 0 18 rgba(192, 195, 7, 0.3)",
                transition: "0.35s",
                "&:hover": {
                  bgcolor: "#c0c307ff",
                  color: "#2d013bff",border:"none",
                  boxShadow: "0 0 18px rgba(192, 195, 7, 0.7)",
                },
              }}
            >
              GET A QUOTE
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* QUOTE POPUP */}
      <Dialog open={openQuote} onClose={() => setOpenQuote(false)}>
       <DialogContent
  sx={{
    width: { xs: "90vw", sm: "400px" },
    maxWidth: "100%",
    boxSizing: "border-box",
    bgcolor: "#2d013b",
    color: "#fff",
    p: 3,
    borderRadius: "10px",
  }}
>

          <Typography variant="h6" fontWeight={700} mb={2}>
            Request a Quote
          </Typography>

          <form onSubmit={handleSubmitToGoogleForm}>
            <TextField
              fullWidth
              name="entry.188421843"
              label="Your Name"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <TextField
              fullWidth
              name="entry.213068606"
              label="Your Email"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <TextField
              fullWidth
              name="entry.421115027"
              label="Mobile Number"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              name="entry.1478379525"
              label="Details"
              margin="normal"
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                 "& input, & textarea": { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#c0c307ff" },
                  "&:hover fieldset": { borderColor: "#e0e200" },
                  "&.Mui-focused fieldset": { borderColor: "#c0c307ff" },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#c0c307ff",
                color: "#2d013bff",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#e0e200" },
              }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Nav;
