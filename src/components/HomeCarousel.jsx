import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner1 from '../assets/HomeBanners/banner1.jpg';
import banner2 from '../assets/HomeBanners/banner2.jpg';
import banner3 from '../assets/HomeBanners/banner3.jpg';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

let items = [
   {
    id: 1,
    url:banner1
   },
   {
    id: 2,
    url: banner2
   },
   {
    id: 3,
    url:banner3
   }
];


const HomeCarousel = () => {
   let  newItems = items.map(item => <img className='cursor-pointer'  role='presentation' src={item.url} key={item.id} alt='No found'/>)

    return (
        <AliceCarousel
            mouseTracking
            items={newItems}
            // responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    )
};

export default HomeCarousel


