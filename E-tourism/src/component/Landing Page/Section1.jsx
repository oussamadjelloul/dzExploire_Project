import dd from '../../assets/Landing Page/div.images.png';
import React, { useRef, useState,useEffect } from "react";

import f from '../../assets/Landing Page/icon.svg.png'
import img1 from '../../assets/Landing Page/img1.png'
import img2 from '../../assets/Landing Page/img2.png'
import img3 from '../../assets/Landing Page/img3.png'
import img4 from '../../assets/Landing Page/img4.png'
import img5 from '../../assets/Landing Page/img5.png'
import img6 from '../../assets/Landing Page/img6.png'

import '../../index.css';
const Section1 = () => {
    
    ////////////////////////////////////////////
    const [nbr1,setNbr1]=useState(1)
    const [nbr2,setNbr2]=useState(2)
  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
        if ((window.innerWidth >=1250) && (window.innerWidth <=1350)){
            setNbr1(1); 
            setNbr2(2);
        }
        if ((window.innerWidth >= 1186) && (window.innerWidth <1250)){
            setNbr1(1); 
            setNbr2(2);
        }
        if ((window.innerWidth >=1102) && (window.innerWidth <1186)){
            setNbr1(4); 
            setNbr2(1);
        }
        if ((window.innerWidth >= 1024) && (window.innerWidth < 1102)){
            setNbr1(14); 
            setNbr2(2);
        }
        if ((window.innerWidth >900) && (window.innerWidth < 1024)){
            setNbr1(20); 
            setNbr2(1);
        }
        if ((window.innerWidth >=768) && (window.innerWidth < 900)){
            setNbr1(4); 
            setNbr2(1);
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
    ////////////////////////////////////////////
    return ( 
        
     <div id="section1" className='h-full pb-20 w-full' >

        <div className='h-full px-20 hidden md:block pt-[70px]'  >
        <div className="text-[#142361] font-semibold pt-2 text-4xl">Discover New</div> 
            <div className="h-full pt-10 flex justify-between">
                <div className="py-5">
                
                    <div className='pt-10'>
                        <p className="text-[#142361] font-bold">Want memories for yourself, try</p>
                        <p className="text-[#142361] font-bold">TRAVELLING.</p>
                        <p className="text-[#142361] font-bold">A Big World is waiting for you!!</p>
                        <p className="text-[#142361]">Discover, we bet you'll love it.</p>
                    </div>
                    <div className='relative flex justify-between py-10 w-[25vw]'>
                        {/* <div className={`absolute -top-${nbr2} -right-${nbr1}`}><img className='w-[8vw]' src={f} alt="f" /></div> */}


                        <button className='flex font-bold bg-[#142361] px-10 py-2 rounded-xl absolute button-0 '>
                            <p className='text-[#FFFFFF]'>Discover </p>
                            <p className='text-[#FFFFFF] pl-2'>New </p>
                            <p className='text-[#F2870C] pl-2'>Locations</p>
                        </button>
                    </div>
                    <div className='pt-10'> 
                        <p  className='text-[#142361] font-bold'>“I am not the same, having seen the moon</p>
                        <p className='text-[#142361] font-bold'>shine on the other side of the world”</p>
                       <p className='text-[#F2870C] font-bold pl-20'>– Mary Anne Radmacher</p>
                    </div>
                </div>
                <div className='md:h-[40vh]  md:w-[40vw]   lg:h-[50vh]  lg:w-[50vw] grid grid-cols-3 grid-rows-3 gap-2 ' >
                     <div className='col-span-2 row-span-1 hover:scale-110 hover:delay-100' ><img src={img1} href='img1' className='w-full h-full' ></img></div>
                     <div className='col-span-1w-[400px] row-span-1 hover:scale-110'><img src={img6} href='img6' className='w-full h-full'></img></div>
                     <div className='col-span-1 row-span-2 hover:scale-110'><img src={img2} href='img2' className='w-full h-full' ></img></div>
                     <div className='col-span-1 row-span-1 hover:scale-110'><img src={img3} href='img3' className='w-full h-full' ></img></div>
                     <div className='col-span-1 row-span-1 hover:scale-110'><img src={img4} href='img4' className='w-full h-full' ></img></div>
                     <div className='col-span-2 row-span-1 hover:scale-110'><img src={img5} href='img5' className='w-full h-full' ></img></div>
                   
                </div>
            </div>
        </div>


        <div className='h-full px-10 flex flex-col justify-center items-center pt-[70px]  md:hidden'>
            <div className="text-[#142361] font-semibold pt-2 text-3xl">Discover New</div> 
            <div className="pt-5 flex flex-col justify-center items-center ">
                <div className="py-5 pl-10 ">
                    <div className='pt-10'>
                        <p className="text-[#14hidden2361] font-bold">Want memories for yourself, try</p>
                        <p className="text-[#142361] font-bold">TRAVELLING.</p>
                        <p className="text-[#142361] font-bold">A Big World is waiting for you!!</p>
                        <p className="text-[#142361]">Discover, we bet you'll love it.</p>
                    </div>
                    <div className='relative py-10 w-[30vw]'>
                        {/* <div className='absolute -top-10 -right-40 '><img className='w-[20vw]' src={f} href="f"/></div> */}
                        <button className='flex font-bold bg-[#142361] px-10 py-2 rounded-xl absolute button-0 '>
                            <p className='text-[#FFFFFF] '>Discover </p>
                            <p className='text-[#FFFFFF] pl-2'>New </p>
                            <p className='text-[#F2870C]  pl-2'>Locations</p>
                        </button>
                    </div>
                    <div className='pt-10'> 
                        <p className='text-[#142361] font-bold'>“I am not the same, having seen the moon</p>
                        <p className='text-[#142361] font-bold'>shine on the other side of the world”</p>
                        <p className='text-[#F2870C] font-bold pl-0'>– Mary Anne Radmacher</p>
                    </div>
                </div>
                <div className=' grid grid-cols-3 grid-rows-3 gap-2 sm:w-[500px]' >
                     <div className='col-span-2 row-span-1 hover:scale-110' ><img src={img1} href='img1' className='w-full h-full' ></img></div>
                     <div className='col-span-1 row-span-1 hover:scale-110'><img src={img6} href='img6' className='w-full h-full'></img></div>
                     <div className='col-span-1 row-span-2 hover:scale-110'><img src={img2} href='img2' className='w-full h-full' ></img></div>
                     <div className='col-span-1 row-span-1 hover:scale-110'><img src={img3} href='img3' className='w-full h-full' ></img></div>
                     <div className='col-span-1 row-span-1 hover:scale-110'><img src={img4} href='img4' className='w-full h-full' ></img></div>
                     <div className='col-span-2 row-span-1 hover:scale-110'><img src={img5} href='img5' className='w-full h-full' ></img></div>
                   
                </div>
                        
                </div>
            </div>
        </div>






        
    );
}

export default Section1;
