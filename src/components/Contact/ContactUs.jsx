import React from "react";
import { TextField, Button, Typography, Container, Paper,Grid2 as Grid } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import shopImage from '../../assets/shop.jpg'

const ContactUsPage = () => {
  return (
    <Container className="my-8">
      <Grid container spacing={4} className="text-center">
        {/* Left Section: Form */}
        <Grid item xs={12} md={6}>
          <Paper className="p-8 shadow-lg rounded-lg bg-gray-50">
            <Typography variant="h5" className="mb-6 font-semibold">
              Get In Touch
            </Typography>
            <form className="space-y-4">
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email Address"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Right Section: Contact Info + Image */}
        <Grid item xs={12} md={6}>
          <Paper className="p-8 shadow-lg rounded-lg bg-gray-50" sx={{backgroundColor: 'black'}}>
            <Typography variant="h5" className="mb-6 font-semibold">
              Our Contact Info
            </Typography>

            {/* Contact Info */}
            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-2">
                <Phone color="primary" sx={{color: 'yellow'}} />
                <Typography>+91 9600561343</Typography>
              </div>
              <div className="flex items-center space-x-2">
                <Email color="primary" sx={{color: 'yellow'}}/>
                <Typography>info@company.com</Typography>
              </div>
              <div className="flex items-center space-x-2">
                <LocationOn color="primary" sx={{color: 'yellow'}}/>
                <Typography>Anaicut St, near vinayagar temple, Bharathi Nagar, Walajapet, Walajah, Tamil Nadu 632513</Typography>
              </div>
            </div>

            {/* Image */}
            <div className="mt-6">
              <img
                src={shopImage}
                alt="Contact Location"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;
