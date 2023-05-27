import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Comp from "./Comp";


// import required modules
import { Navigation, Autoplay } from "swiper";

const Swipp = () => {
    return ( 
      <div className='flex justify-center '>
                <div className='w-[90vw] '>
    <Swiper
        rewind={true}
        navigation={false}
        modules={[Navigation,Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
  
      >
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>

      
    
        
   
      </Swiper>
        </div>
      </div>
    
     );
}
 
export default Swipp;