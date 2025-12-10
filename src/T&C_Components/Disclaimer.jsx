import React from 'react';
import Nav from '../Common_Components/Nav';
import Footer from '../Footer';
import { Box, Typography, Container, Divider } from '@mui/material';

function Disclaimer() {
  return (
    <>
      <Nav />

      <Container maxWidth="md" sx={{ py: 5,mt:10 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{fontWeight:700,
            background: "linear-gradient(90deg, #e4dd03, #9d00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 4,fontFamily: "XBNiloofar"
          }}
        >
          Disclaimer
        </Typography>

        {/* Section 1 */}
        <Box mb={10} mt={10}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left", color: "#e4dd03" }}>
            1. General Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            The content provided on this website and by Al Aura is for general informational purposes only. 
            While we strive for accuracy, we make no warranties regarding the correctness or reliability of any information.
          </Typography>
        </Box>

        {/* Section 2 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left", color: "#e4dd03" }}>
            2. No Professional Advice
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            Any information, guidance, or services provided should not be considered professional advice 
            (legal, financial, medical, or otherwise). Clients should consult appropriate professionals for specific advice.
          </Typography>
        </Box>

        {/* Section 3 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left", color: "#e4dd03" }}>
            3. External Links
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            Our website may contain links to third-party websites. Al Aura is not responsible for the content or practices of these external sites.
          </Typography>
        </Box>

        {/* Section 4 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left", color: "#e4dd03" }}>
            4. Use at Your Own Risk
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            Clients and users use Al Aura’s website, services, and delivered work at their own risk. 
            We are not liable for any direct or indirect damages arising from the use of our services or website.
          </Typography>
        </Box>

        {/* Section 5 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left", color: "#e4dd03" }}>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
            Al Aura’s liability is limited to the amount paid by the client for the specific services delivered.
          </Typography>
        </Box>

        
      </Container>

      <Footer />
    </>
  );
}

export default Disclaimer;
