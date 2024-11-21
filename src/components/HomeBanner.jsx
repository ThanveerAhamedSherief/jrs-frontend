import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import image1 from '../assets/4384439.jpg';
import image2 from '../assets/8338565.jpg'
import image3 from '../assets/woman-celebrating-indian-republic-day.jpg'

// const BannerSection = () => {
//   return (
//     // <section className="relative w-full h-[600px] bg-cover bg-center" 
//     //          style={{ backgroundImage: image3 }}>
//     //   <div className="absolute inset-0 bg-black opacity-40"></div>
//     //   <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
//     //     <Typography variant="h3" className="text-4xl font-bold mb-4">
//     //       Explore the Timeless Elegance of Sarees
//     //     </Typography>
//     //     <Typography variant="h5" className="text-xl mb-6">
//     //       Discover premium collections from the finest weavers across India. Shop your perfect saree today!
//     //     </Typography>
//     //     <Button variant="contained" color="primary" size="large" className="rounded-full py-2 px-6 text-lg">
//     //       Shop Now
//     //     </Button>
//     //   </div>
//     // </section>
//   );
// };

// export default BannerSection;

import AliceCarousel from 'react-alice-carousel';

const BannerSection = () => {
  // List of banner images
  const bannerImages = [
    image1,
   image2,
   image3,
  ];
  const items = [
  <div className="relative w-full h-[70vh]">
  {/* First Banner Slide */}
  <img
    src={image1}
    alt="Banner 1"
    className="object-cover sm:object-cover object-contain w-full h-full" // Use object-contain on smaller screens
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8 lg:px-10">
    <Typography variant="h3" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
      Welcome to Our Website
    </Typography>
    <Typography variant="body1" className="mt-4 text-lg sm:text-xl text-center">
      Discover amazing features and services that will help you achieve your goals.
    </Typography>
    <Button variant="contained" color="primary" className="mt-6">
      Learn More
    </Button>
  </div>
</div>,
<div className="relative w-full h-[70vh]">
  {/* Second Banner Slide */}
  <img
    src={image2}
    alt="Banner 2"
    className="object-cover sm:object-cover object-contain w-full h-full" // Use object-contain on smaller screens
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8 lg:px-10">
    <Typography variant="h3" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
      Explore Our Services
    </Typography>
    <Typography variant="body1" className="mt-4 text-lg sm:text-xl text-center">
      Check out the wide range of solutions we offer to help you succeed.
    </Typography>
    <Button variant="contained" color="primary" className="mt-6">
      Get Started
    </Button>
  </div>
</div>,
<div className="relative w-full h-[70vh]">
  {/* Third Banner Slide */}
  <img
    src={image3}
    alt="Banner 3"
    className="object-cover sm:object-cover object-contain w-full h-full" // Use object-contain on smaller screens
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8 lg:px-10">
    <Typography variant="h3" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
      Join Us Today
    </Typography>
    <Typography variant="body1" className="mt-4 text-lg sm:text-xl text-center">
      Become part of a growing community of innovators and thinkers.
    </Typography>
    <Button variant="contained" color="primary" className="mt-6">
      Sign Up
    </Button>
  </div>
</div>,
];

return (
<div className="w-full relative">
  {/* Alice Carousel Component */}
  <AliceCarousel
    mouseTracking
    infinite
    autoPlay
    autoPlayInterval={3000}  // Auto-rotate every 3 seconds
    disableDotsControls
    disableButtonsControls
    items={items}
    responsive={{
      0: {
        items: 1,  // Show 1 item on mobile screens
      },
      600: {
        items: 1,  // Show 1 item on tablet screens
      },
      1024: {
        items: 1,  // Show 1 item on larger screens
      },
    }}
  />
</div>
);
};

export default BannerSection;

