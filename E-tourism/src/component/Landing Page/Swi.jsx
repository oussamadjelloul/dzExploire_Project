import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";import Comp from "./Comp";
import Comentaire from "./Comentaire";


// import required modules
import { Navigation, Autoplay } from "swiper";
const Swi = () => {
    return (  
        <div>
              <div className='flex justify-center '>
                <div className='w-[90vw] pl-32 '>
    <Swiper
        rewind={true}
        navigation={false}
        modules={[Navigation,Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 6000, 
          disableOnInteraction: false,
        }}
  
      >
        <SwiperSlide><Comentaire/></SwiperSlide>
        <SwiperSlide><Comentaire/></SwiperSlide>
        <SwiperSlide><Comentaire/></SwiperSlide>
      

      
    
        
   
      </Swiper>
        </div>
      </div>
        </div>
     );
}
 
export default Swi;