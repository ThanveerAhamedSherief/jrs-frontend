import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import image from '../../assets/woman-celebrating-indian-republic-day.jpg';
import image1 from '../../assets/gridImage4.jpg';
import image2 from '../../assets/beautiful-young-woman-wearing-sari.jpg';
import { Button, Typography } from '@mui/material';
// import React from 'react';


const GridBanner = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));
      let bannerArray = [
        {
            id: 1,
            imageUrl: image,
            topic: 'Work Sarees',
            title: 'Effortless Elegance EveryDay'
        },
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
  return (
   
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {bannerArray.map((_, index) => (
    <Grid key={index} size={{ xs: 12, sm: 12, md: 4 }}>
      {/* <Item>{index + 1}</Item> */}
      {/* <img src={image}/> */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[300px]">
      {/* Background Image */}
      <img
        src={_.imageUrl}
        alt="Example"
        className="object-cover w-full h-full"
      />

      {/* Overlay Text */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className='flex flex-col'>
        <Typography variant="h6" component="div" color="white" className="text-center sm:text-lg md:text-sm">
          {_.title}
        </Typography>
        <Typography variant="h5" component="div" color="white" className="text-center sm:text-lg md:text-xl">
         {_.topic}
        </Typography>
        <Button variant="contained" color="primary" size="small" sx={{background: 'red'}}>
  Shop Now
</Button>
        </div>
      </div> */}
       <div className="absolute bottom-0 left-0 w-full py-4 px-6 bg-black bg-opacity-50 flex flex-col items-center">
        <Typography
          variant="h6"
          color="white"
          className="text-center text-very-small sm:text-base md:text-xl lg:text-3xl xl:text-4xl italic"
        >
         {_.title}
        </Typography>
        <Typography
          variant="h5"
          color="white"
          className="text-center text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl"
        >
         {_.topic}
        </Typography>
        <Button variant="contained" color="primary" size="small" sx={{background: 'red', width:'6rem', marginTop: '3px'}}>
  Shop Now
</Button>      </div>
    </div>
    </Grid>
  ))}
</Grid>
    </Box>

  )
}

export default GridBanner


// import React from "react";
// import { Paper } from "@mui/material";


// const GridBanner = () => {
//   return (
//     <Grid container spacing={2} className="w-full">
//       {/* Large screens: 3 columns, Medium screens: 2 columns, Small screens: 1 column */}
//       <Grid item xs={12} sm={6} md={4} lg={4}>
//         <Paper className="p-4 h-full bg-gray-200 flex items-center justify-center">Item 1</Paper>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={4}>
//         <Paper className="p-4 h-full bg-gray-300 flex items-center justify-center">Item 2</Paper>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4} lg={4}>
//         <Paper className="p-4 h-full bg-gray-400 flex items-center justify-center">Item 3</Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default GridBanner;



