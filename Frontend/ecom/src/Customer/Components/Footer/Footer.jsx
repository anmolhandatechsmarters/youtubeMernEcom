import { Grid2, Typography, Button, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 5, px: { xs: 3, md: 10 } }}>
      <Grid2 container spacing={4} justifyContent="space-around">
        {/* Column 1 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
       <div>   <Button color="inherit">About</Button></div>
          <div><Button color="inherit">Careers</Button></div>
          <div> <Button color="inherit">Press</Button></div>
          <div> <Button color="inherit">Blog</Button></div>
        </Grid2>

        {/* Column 2 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <div>    <Button color="inherit">Help Center</Button></div>
          <div>  <Button color="inherit">Contact Us</Button></div>
          <div> <Button color="inherit">Privacy Policy</Button></div>
          <div>  <Button color="inherit">Terms & Conditions</Button></div>
        </Grid2>

        {/* Column 3 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          <div><Button color="inherit">Guides</Button></div>
          <div>     <Button color="inherit">Documentation</Button></div>
          <div>     <Button color="inherit">API Reference</Button></div>
          <div>  <Button color="inherit">Community</Button></div>
        </Grid2>

        {/* Social Media Icons */}
        <Grid2 item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid2>
      </Grid2>

      {/* Bottom Section */}
      <Box textAlign="center" mt={5} pt={2} borderTop="1px solid gray">
        <Typography variant="body2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
