// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

export default function Events() {
const [nbr,setNbr]=useState(3)
useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setNbr(1);
      } else if (window.innerWidth <= 1000) {
        setNbr(2);
      }
        else if (window.innerWidth <= 1200 && window.innerWidth >= 1024 ) {
      setNbr(2);
    }
       else {
        setNbr(3);
      }
    };
    window.addEventListener('resize', handleResize);

    // Call the handleResize function once on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (

    <div className='w-full   mt-6 p-4 '>
    <h3 className='text-[28px]  font-bold'>Comments </h3>
    <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><CommentCard/></SwiperSlide>
        <SwiperSlide><CommentCard/></SwiperSlide>
        <SwiperSlide><CommentCard/></SwiperSlide>
        <SwiperSlide><CommentCard/></SwiperSlide>
      </Swiper>
    </div>
  );
}
