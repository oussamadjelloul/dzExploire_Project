import Hour from '../../assets/Place Detail/Hour.png'
import bus from '../../assets/Place Detail/bus.png'
import CableCar from '../../assets/Place Detail/CableCar.png'
import Metro from '../../assets/Place Detail/Metro.png'
import Train from '../../assets/Place Detail/Train.png'
import Tram from '../../assets/Place Detail/Tram.png'

const Detail = () => {
    return ( <div className='w-full  shadow-md mt-6 p-4 bg-white '>
    <h3 className='text-[28px]  font-bold'>Details</h3>

    <h3 className='text-[20px]  text-[#121797] font-bold ml-3 mt-3'>Acess Hours</h3>
    <div className='flex sm:flex-row flex-col justify-start sm:items-center  items-start lg:gap-60 md:gap-48 sm:gap-36 ml-6 gap-3   mt-3 '>
        <div className='flex justify-center items-center gap-2'>
            <img src={Hour} alt='hour' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Open At 9:00</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <img src={Hour} alt='hour' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Close At 17:00</p>
        </div>
    </div>

    <h3 className='text-[20px]  text-[#121797] font-bold ml-3 mt-3'>Transport</h3>
    <div className='flex justify-start items-center lg:gap-60 md:gap-48 sm:gap-36 gap-10  ml-6 mt-3'>
        <div className='flex justify-center items-center gap-2'>
            <img src={CableCar} alt='CableCar' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Cable Car (<span className='text-[#2AD71B]'>Available</span>) </p>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <img src={Metro} alt='Metro' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Metro (<span className='text-[#2AD71B]'>Avilable</span>) </p>
        </div>
        <div className='sm:flex justify-center items-center gap-2  hidden'>
            <img src={bus} alt='Bus' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Bus (<span className='text-[#2AD71B]'>Available</span>) </p>
        </div>
    </div>

    <div className='flex justify-start items-center lg:gap-60 md:gap-48 sm:gap-36 gap-10 mt-10 mb-6 ml-6'>
        <div className='flex justify-center items-center gap-2'>
            <img src={Tram} alt='CableCar' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Tramway (<span className='text-[#2AD71B]'>Available</span>) </p>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <img src={Train} alt='Metro' className='w-[23px]'/>
            <p className='text-[16px] text-[#5C727D] '>Train (<span className='text-[#F10B42]'>Not Avilable</span>) </p>
        </div>
    </div>

    <div className=' ml-6 mt-[40px] sm:hidden flex items-center gap-2'>
        <img src={bus} alt='Bus' className='w-[23px]'/>
        <p className='text-[16px] text-[#5C727D] '>Bus (<span className='text-[#2AD71B]'>Available</span>) </p>
    </div>

</div> );
}
 
export default Detail;