import React from 'react';
import { Container, Grid2, Typography, Link, Button } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
   
    <div className="bg-black text-white py-8 mt-16">
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="space-between">
          {/* Left Section: Company Info */}
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" className="font-semibold mb-4">
              Jansi Rani Silks
            </Typography>
            <Typography variant="body2" className="text-gray-400 mb-4">
              Since 1998, Pattu Sarees has been crafting traditional handwoven sarees that combine heritage with elegance. Our creations reflect the rich history of Indian textiles with modern designs.
              Since 1998, Pattu Sarees has been crafting traditional handwoven sarees that combine heritage with elegance. Our creations reflect the rich history of Indian textiles with modern designs.
              Since 1998, Pattu Sarees has been crafting traditional handwoven sarees that combine heritage with elegance. Our creations reflect the rich history of Indian textiles with modern designs.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              href="/about-us"
              className="text-white border-white hover:bg-white hover:text-gray-800"
            >
              Learn More
            </Button>
          </Grid2>

          {/* Center Section: Quick Links */}
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" className="font-semibold mb-4">
              Quick Links
            </Typography>
            <ul className="list-none space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid2>

          {/* Right Section: Social Media Links */}
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" className="font-semibold mb-4">
              Follow Us
            </Typography>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="text-gray-400 hover:text-white text-2xl" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="text-gray-400 hover:text-white text-2xl" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="text-gray-400 hover:text-white text-2xl" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <YouTube className="text-gray-400 hover:text-white text-2xl" />
              </Link>
            </div>
          </Grid2>
        </Grid2>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Pattu Sarees. All rights reserved.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
