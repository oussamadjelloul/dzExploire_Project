// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

export default function Events() {

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
      <AddComment />
    </div>
  );
}
