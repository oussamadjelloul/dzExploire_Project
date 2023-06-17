import  {  useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Comp from "./Comp";


// import required modules
import { Navigation, Autoplay } from "swiper";

const Swip = () => {
  const [nbr,setNbr]=useState(3)
  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      if (window.innerWidth <= 680) {
        setNbr(1);
      } else if (window.innerWidth <= 1100) {
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
  const [places,setPlaces] = useState(null) 
  useEffect(()=> {
    const fun = async () => {
       
       let response = await fetch("http://localhost:5000/getplaces");
       
       let data = await response.json();
       setPlaces(data.slice(0,6))
       
    }
    fun()
  },[])
    return ( 
      <div className='flex justify-center mb-5'>
    <div className='w-[90vw] '>
    <Swiper
        rewind={true}
        navigation={false}
     
      slidesPerView={nbr}
      modules={[Navigation,Autoplay]}
      spaceBetween={30}
        autoplay={{

          delay: 3000, 
          disableOnInteraction: false,
        }}

       
      >
        {/* <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide>
        <SwiperSlide><Comp/></SwiperSlide> */}
        {places && places.map((place,index)=> (
          <SwiperSlide key={index}><Comp place={place}/></SwiperSlide>
        ))}

      
    
        
   
      </Swiper>
        </div>
      </div>
    
     );
}
 
export default Swip;