import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeCarousel from './HomeCarousel';
import HomeSectionCard from './HomeSectionCard';
import {Button} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../data/mens_kurta';
import ProductCarousel from './ProductsCarousel';
const HomeCarosuseSection = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(prevIndex => prevIndex - 1);
  const slideNext = () => setActiveIndex(prevIndex => prevIndex + 1);
  

  const syncActiveIndex = ({item}) => setActiveIndex(item)
    const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5},
};
let items = data.slice(0,10).map((item,i)=> <HomeSectionCard key={i} product={item} />);
console.log("items", items,activeIndex)
  return (
    <div className='border'>
      <div className='flex justify-between items-center'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>

      </div>
      <div className='relative p-5'>
      {/* <AliceCarousel
            // mouseTracking
            items={items}
            responsive={responsive}
            disableButtonsControls
            // autoPlay
            // autoPlayInterval={2000}
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
            infinite
            disableDotsControls
        /> */}
        <ProductCarousel/>
       {activeIndex < items.length - 1 && <Button onClick={slideNext} variant='contained' className='z-50 bg-white' sx={{position: 'absolute', top: '8rem', right: '0rem', rotate: '90%', transform: 'translateX(50%) rotate(90deg)', bgcolor:'white'}} aria-label='next'>
          <KeyboardArrowLeftIcon sx={{transform: 'rotate(90deg)',color: 'black'}}/>
        </Button>}
       {activeIndex > 0 && <Button onClick={slidePrev} variant='contained' className='z-50' sx={{position: 'absolute', top: '8rem', left: '0rem', rotate: '90%', transform: 'translateX(-50%) rotate(90deg)', bgcolor:'white'}} aria-label='prev'>
          <KeyboardArrowLeftIcon sx={{transform: 'rotate(-90deg)',color: 'black'}}/>
        </Button>}
      </div>
      
    </div>
  )

}

export default HomeCarosuseSection