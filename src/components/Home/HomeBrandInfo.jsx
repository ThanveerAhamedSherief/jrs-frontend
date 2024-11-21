import React from 'react';
import image1 from '../../assets/backgroundSaree.jpg';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom'; 



const HomeBrandInfo = () => {
  return (
    <div className="relative w-full h-[300px]">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image1})`, // Dynamically load the image
        }}
      >
        {/* If using <img> tag for better scaling on mobile */}
        {/* <img
          src={image1}
          alt="Example"
          className="object-cover w-full h-full"
        /> */}
      </div>

      {/* Overlay Text Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <Typography
          variant="h4"
          color="white"
          className="text-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 text-sm sm:text-lg md:text-3xl lg:text-4xl font-semibold"
        >
          The Brand
        </Typography>
        <Typography
          variant="body1"
          color="white"
          className="mt-4 px-6 sm:px-8 md:px-10 lg:px-12 text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed"
        >
          This is a short description or detail about the image and what it's representing. The text size adjusts based on screen size.
          This is a short description or detail about the image and what it's representing. The text size adjusts based on screen size...
          <Link
          to="/about" // Change to your desired route, or use a simple anchor tag if linking to an external page
          className="mt-6 text-red-600 font-semibold hover:text-red-300 transition-colors duration-300"
        >
          Learn More
        </Link>
        </Typography>
       
      </div>
    </div>
  )
}

export default HomeBrandInfo