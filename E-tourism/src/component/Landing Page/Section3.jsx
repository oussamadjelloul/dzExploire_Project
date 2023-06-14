import uu from '../../assets/Landing Page/user.png'
import Swi from './Swi';

const Section3 = () => {
    return ( 
      <div>
        <div className='px-20 hidden md:block'>
              <div className="text-[#142361] text-3xl font-bold flex justify-center pt-4">LATEST COMMENTS</div>
              <div className='felx justify-center'>
              <div className="py-20 flex justify-between">

           
                <div className='w-[20vw]'>

                   <div className='font-bold text-[#142361] p-4 border-4 border-black mb-4'>6 Days in Tokyo Itinerary:Complete Guide for First-,Timers</div>
                  <div className='flex '>
                          <div className='w-[4vw] '><img src={uu} alt='uu' /></div>
                              <div className='pl-4'>
                                   <div className='font-bold'>Steve Mark</div>
                                    <div className='text-[#142361] text-sm'>Designer</div>
                              </div>
                   </div>
                </div>


                <div className='w-[20vw]'>

<div className='font-bold text-[#142361] p-4 border-4 border-black mb-4'>6 Days in Tokyo Itinerary:Complete Guide for First-,Timers</div>
<div className='flex '>
       <div className='w-[4vw] '><img src={uu} alt='uu' /></div>
           <div className='pl-4'>
                <div className='font-bold'>Steve Mark</div>
                 <div className='text-[#142361] text-sm'>Designer</div>
           </div>
</div>
               </div>


               <div className='w-[20vw]'>

<div className='font-bold text-[#142361] p-4 border-4 border-black mb-4'>6 Days in Tokyo Itinerary:Complete Guide for First-,Timers</div>
<div className='flex '>
       <div className='w-[4vw] '><img src={uu} alt='uu' /></div>
           <div className='pl-4'>
                <div className='font-bold'>Steve Mark</div>
                 <div className='text-[#142361] text-sm'>Designer</div>
           </div>
</div>
              </div>


                 </div>
              </div>
        </div>




        <div className='px-10 block md:hidden'>
              <div className="text-[#142361] text-2xl font-bold flex justify-center pt-4">LATEST COMMENTS</div>
              <div className='py-10'>
                 <Swi/>
              </div>
        </div>




        </div>
     );
}
 
export default Section3;