import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact_Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [status, setStatus] = useState(null);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSduoDBaWccwX1Y2MFjWGvnEZfQ4kUnOL5U8kQTsFQ8Z_mWGXA/formResponse";

  const ENTRY_NAME = "entry.1796588522";
  const ENTRY_EMAIL = "entry.14196458";
  const ENTRY_PHONE = "entry.216845173";
  const ENTRY_MESSAGE = "entry.1198640764";

  const handleFocus = (field) => setFocus({ ...focus, [field]: true });
  const handleBlur = (field, value) =>
    setFocus({ ...focus, [field]: !!value });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    const formBody = new FormData();
    formBody.append(ENTRY_NAME, formData.name);
    formBody.append(ENTRY_EMAIL, formData.email);
    formBody.append(ENTRY_PHONE, formData.phone);
    formBody.append(ENTRY_MESSAGE, formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFocus({ name: false, email: false, phone: false, message: false });
    } catch {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <Box padding={{sm:3,xs:0}} maxWidth="700px" margin="auto" sx={{ mt: 10, mb: 10 }}>
      
      {/* Heading */}
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
        Contact Us
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        data-aos="fade-up"
        sx={{ color: "#fff", mt: 8 }}
      >
        Have a project in mind? Let's talk! Fill out the form below and I'll get back to you.
      </Typography>

      {/* FORM */}
    <Box
  component="form"
  onSubmit={handleSubmit}
  data-aos="zoom-in"
  sx={{
    width: { sm: "50%", xs: "90%" }, // wider on iPhone
    flex: 1,
    mt: { xs: 4, sm: 2 },
    boxShadow: "0 10px 25px rgba(192, 195, 7, 0.3)",
    background: "rgba(228, 221, 3, 0.7)",
    backdropFilter: "blur(12px)",
    p: { xs: 2, sm: 5 }, // smaller padding on iPhone
    mx: "auto",
    borderRadius: "10px",
    border: "2px solid #2d013bff",
  }}
>
  <Typography
    sx={{
      textAlign: "left",
      mb: 2,
      color: "#2d013bff",
      fontWeight: 500,
      fontSize: { lg: 30, xs: 22 }, // smaller font on iPhone
    }}
  >
    <b>Get in Touch</b>
  </Typography>

  {["name", "email", "phone", "message"].map((field, index) => (
    <Box
      key={field}
      data-aos="fade-up"
      data-aos-delay={index * 120}
      sx={{ position: "relative", mb: { xs: 3, sm: 4 } }} // smaller margin on iPhone
    >
      {field === "message" ? (
        <textarea
          name={field}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => handleFocus(field)}
          onBlur={(e) => handleBlur(field, e.target.value)}
          rows={4}
          style={{
            width: "80%", // full width on iPhone
            padding: "12px 25px",
            borderRadius: "8px",
            background: "#fff",
            color: "#2d013bff",
            border: "2px solid #2d013bff",
            fontSize: "15px",
            outline: "none",
            transition: "0.3s",
          }}
        />
      ) : (
        <input
          type={field === "email" ? "email" : "text"}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          onFocus={() => handleFocus(field)}
          onBlur={(e) => handleBlur(field, e.target.value)}
          style={{
            width: "80%", // full width on iPhone
            padding: "12px 25px",
            borderRadius: "8px",
            background: "#fff",
            color: "#2d013bff",
            border: "2px solid #2d013bff",
            fontSize: "15px",
            outline: "none",
            transition: "0.3s",
          }}
        />
      )}

      {/* Floating Label */}
      <label
        style={{
          position: "absolute",
          left: focus[field] ? "12px" : "14px", // adjust for small screens
          top: focus[field] ? "-12px" : "12px",
          fontSize: focus[field] ? "12px" : "15px",
          color: "#2d013bff",
          padding: focus[field] ? "0 6px" : "0",
          transition: "0.3s",
          pointerEvents: "none",
          lineHeight: "18px",
        }}
      >
        {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
        {field !== "message" ? "*" : ""}
      </label>
    </Box>
  ))}

  {/* Submit Button */}
  <Button
    type="submit"
    data-aos="fade-up"
    data-aos-delay="550"
    variant="contained"
    sx={{
      bgcolor: "#2d013bff",
      color: "#c0c307ff",
      border: "2px solid #c0c307ff",
      borderRadius: "8px",
      textTransform: "none",
      px: 4,
      py: 1.2,
      mt: { xs: 2, sm: 0 },
      width: { xs: "100%", sm: "auto" }, // full width on iPhone
      "&:hover": {
        bgcolor: "#c0c307ff",
        color: "#2d013bff",
        boxShadow: "0 0 18px rgba(192, 195, 7, 0.7)",
        border: "none",
      },
    }}
  >
    Submit
  </Button>
</Box>


      {/* Status Message */}
      {status && (
        <Typography
          mt={2}
          align="center"
          data-aos="fade-in"
          sx={{ color: "#00ff62", fontWeight: 600 }}
        >
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default Contact_Content;
