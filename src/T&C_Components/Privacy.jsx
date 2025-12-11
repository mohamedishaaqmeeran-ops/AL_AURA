import React from 'react';
import Nav from '../Common_Components/Nav';
import Footer from '../Footer';
import { Box, Typography, Container, Divider } from '@mui/material';

function Privacy() {
  return (
    <>
      <Nav />
      
      <Container maxWidth="md" sx={{ py: 5,mt:10,mb:10 }}>
        <Typography variant="h3" gutterBottom sx={{fontWeight:700,background: "linear-gradient(90deg, #e4dd03, #9d00ff)", WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",fontFamily: "XBNiloofar"}}>
          Privacy Policy
        </Typography>
       

        {/* Section 1 */}
        <Box mb={3} mt={10}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            We may collect personal information from clients or visitors, including:
          </Typography>
          <ul  style={{textAlign:"left"}}>
            <li >Name and contact details (email, phone number)</li>
            <li>Project details or messages submitted via forms</li>
            <li>Payment information (if applicable)</li>
          </ul>
        </Box>

        {/* Section 2 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            Your information is used for:
          </Typography>
          <ul style={{textAlign:"left"}}>
            <li>Communicating about services, projects, or inquiries</li>
            <li>Project management and delivery</li>
            <li>Sending updates, newsletters, or promotions (if subscribed)</li>
          </ul>
        </Box>

        {/* Section 3 */}
        <Box mb={10}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            3. Sharing Your Information
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            We do not sell or rent your personal information. Information may be shared only with trusted partners for project purposes (e.g., payment processors, hosting providers).
          </Typography>
        </Box>

        {/* Section 4 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            We implement reasonable security measures to protect your data from unauthorized access, alteration, or disclosure.
          </Typography>
        </Box>

        {/* Section 5 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            You can request to:
          </Typography>
          <ul style={{textAlign:"left"}}>
            <li>Access or update your personal information</li>
            <li>Opt out of newsletters or marketing communications</li>
            <li>Request deletion of your personal data</li>
          </ul>
        </Box>

        {/* Section 6 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            6. Cookies
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            We may use cookies for website functionality or analytics. These do not store personal identifying information.
          </Typography>
        </Box>

        {/* Section 7 */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom sx={{textAlign:"left",color: "#e4dd03"}}>
            7. Changes to Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:"left"}}>
            Al Aura may update this policy from time to time. Updates will be posted on this page.
          </Typography>
        </Box>

        
      </Container>

      <Footer />
    </>
  );
}

export default Privacy;
