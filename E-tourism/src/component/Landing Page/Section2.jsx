
import Swip from './Swip';
import Swipp from './Swipp';
import ff from '../../assets/Landing Page/leaf.svg.png'
const Section2 = () => {
    return (  
     <div id="section2" className='relative'>
         <div className='w-[10vw] absolute top-[-8] left-0 z-50'><img src={ff} href='ff'/></div> 
         <div className='py-20 sm:px-20 px-10 '>
          
              <div className='flex justify-center pb-20'>
                   <div className=' flex md:text-2xl text-xl lg:text-3xl font-bold '><p className='text-[#D9D9D9]'>Discover </p><p className=' md:text-2xl text-xl lg:text-3xl text-[#F0860C] pl-2 pr-2'>Tranding Attractions</p></div>
              </div>
              <Swip/>
         </div>

         {/* <div className='py-20 px-10 block md:hidden '>
              <div className='flex justify-center pb-20'>
                   <div className=' flex text-2xl font-semi-bold '><p className='text-[#D9D9D9]'>Discover </p><p className='text-[#F0860C] pl-1'>Tranding Attractions</p></div>
              </div>
              <Swipp/>
         </div> */}

     </div>
    );20
}

export default Section2;