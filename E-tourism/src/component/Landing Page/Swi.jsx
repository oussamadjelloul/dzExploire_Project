// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Comentaire from "./Comentaire";


// import required modules
import { Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
const Swi = () => {
  const [comments,setComments] = useState(null)
  useEffect(()=> {
    const fun = async () => {
       
       let response = await fetch("http://localhost:5000/getComments");
       let data = await response.json();
       setComments(data)
       console.log(data);
       
    }
    fun()
  },[])
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
        {/* <SwiperSlide><Comentaire/></SwiperSlide>
        <SwiperSlide><Comentaire/></SwiperSlide>
        <SwiperSlide><Comentaire/></SwiperSlide> */}
        {comments && comments.map((index,comment)=>(
          <SwiperSlide key={index}><Comentaire/></SwiperSlide>
        ))}
      

      
    
        
   
      </Swiper>
        </div>
      </div>
        </div>
     );
}
 
export default Swi;