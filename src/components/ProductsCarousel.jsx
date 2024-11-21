import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { mens_kurta } from '../data/mens_kurta';
import HomeSectionCard from './HomeSectionCard';
import { tempData } from '../data/tempData';

const ProductCarousel = () => {

let carouselItems = tempData.map((item,i)=> <HomeSectionCard key={i} product={item} />);


  return (
    <div className="container mx-auto px-12">
      <AliceCarousel
        items={carouselItems}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1024: {
            items: 5, // Show 5 products on large screens
          },
        }}
      />
    </div>
//     <div className="w-full overflow-hidden px-4 py-12">
//   <div className="max-w-full w-full">
//     <AliceCarousel
//       items={carouselItems}
//       autoPlay
//       autoPlayInterval={3000}
//       infinite
//       disableDotsControls
//       disableButtonsControls
//       responsive={{
//         0: {
//           items: 1,
//         },
//         600: {
//           items: 2,
//         },
//         1024: {
//           items: 5, // Show 5 products on large screens
//         },
//       }}
//     />
//   </div>
// </div>

  );
};

export default ProductCarousel;
