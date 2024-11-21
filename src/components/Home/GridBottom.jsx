import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
import image1 from '../../assets/gridImage4.jpg';
import image2 from '../../assets/gridImage2.jpg';``
let bannerArray = [
    {
        id: 2,
        imageUrl: image2,
        topic: 'Georgette Sarees',
        title: 'Shine bright at Celebrations'
      
    },
    {
        id: 3,
        imageUrl: image1,
        topic: 'Kanchipuram Pattu',
        title: 'Double the Joy and Style'
    }
  ]
const GridBottom = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-10">
    //   {/* Left Grid - Image Section */}
    //   <div className="relative w-full h-[400px] ">
    //     <img
    //       src={image1}
    //       alt="Example"
    //       className="object-cover w-full h-full rounded-lg shadow-lg"
    //     />
    //   </div>

    //   {/* Right Grid - Text Section */}
    //   <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12">
    //     <Typography
    //       variant="h4"
    //       color="textPrimary"
    //       className="text-center sm:text-left text-2xl sm:text-3xl font-semibold mb-4"
    //     >
    //       Kanchipuram pattu
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       color="textSecondary"
    //       className="text-center sm:text-left text-lg sm:text-xl leading-relaxed"
    //     >
    //       These sarees have borders and pallu in a contrasting colour with heavy gold weaving. Kanchipuram sarees traditionally had designs representing simple gold lines or gold dots. The designs on these sarees were inspired by the designs in South Indian temples or natural elements like birds, leaves, etc.
          
    //     </Typography>
        
    //     {/* Learn More Link */}
    //     {/* <a
    //       href="#learn-more" // Add your link here
    //       className="mt-6 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:text-blue-400 transition-colors duration-300"
    //     >
    //       Learn More
    //     </a> */}
    //   </div>
    // </div>
    <div className='container py-12 sm:py-0'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
        <div>
            <h2 className='font-bold text-5xl'>Kanchipuram Pattu</h2>
            <p className='py-8'>
            These sarees have borders and pallu in a contrasting colour with heavy gold weaving. Kanchipuram sarees traditionally had designs representing simple gold lines or gold dots. The designs on these sarees were inspired by the designs in South Indian temples or natural elements like birds, leaves, etc.
            </p>
        </div>
        <div data-aos="zoom-in">
        <img
          src={image2}
          alt=""
          className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
        />
      </div>
    </div>
</div>
  )
}

export default GridBottom