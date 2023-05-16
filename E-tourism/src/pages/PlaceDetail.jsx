import Makam from '../assets/Place Detail/Makam.png'
import Position from '../assets/Place Detail/position.png'
import Hour from '../assets/Place Detail/Hour.png'
import bus from '../assets/Place Detail/bus.png'
import CableCar from '../assets/Place Detail/CableCar.png'
import Metro from '../assets/Place Detail/Metro.png'
import Train from '../assets/Place Detail/Train.png'
import Tram from '../assets/Place Detail/Tram.png'


const PlaceDetail = () => {
    return ( 
    <div>
        <div className="carousel w-full h-fit">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='relative w-full '>
                    <img src={Makam} className="w-full" />
                    <div className='absolute top-2/3 left-1/4' >
                        <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] text-white font-bold'>Makam El chahid</h3>
                        <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                            <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                        <h3 className='lg:text-[18px] sm:text-[14px] text-[11px] text-white'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Makam} className="w-full" />
                <div className='absolute top-2/3 left-1/4' >
                        <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] text-white font-bold'>Makam El chahid</h3>
                        <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                            <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                        <h3 className='lg:text-[18px] sm:text-[14px] text-[11px] text-white'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Makam} className="w-full" />
                <div className='absolute top-2/3 left-1/4' >
                        <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] text-white font-bold'>Makam El chahid</h3>
                        <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                            <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                        <h3 className='lg:text-[18px] sm:text-[14px] text-[11px] text-white'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Makam} className="w-full" />
                <div className='absolute top-2/3 left-1/4' >
                        <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] text-white font-bold'>Makam El chahid</h3>
                        <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                            <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                        <h3 className='lg:text-[18px] sm:text-[14px] text-[11px] text-white'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        <div className='flex flex-col  justify-center items-center bg-[#F8F8F8]  gap-4 px-[200px]' >

            <div className='w-full  shadow-md mt-6 p-4 bg-white'>
                <h3 className='text-[28px]  font-bold'>Adresse</h3>
                <div className='flex justify-center items-center gap-60 my-4'>
                    <p className='text-[16px] font-semibold'>Adress : <span className='text-[#5C727D] font-normal'>Chemin Omar Kechkar , El Madania</span> </p>
                    <p className='text-[16px] font-semibold'>City : <span className='text-[#5C727D] font-normal'>El Madania</span> </p>
                    <p className='text-[16px] font-semibold'>State : <span className='text-[#5C727D] font-normal'>Algiers </span> </p>
                </div>
            </div>

            <div className='w-full  shadow-md mt-6 p-4 bg-white '>
                <h3 className='text-[28px]  font-bold'>Description</h3>
                <p className='mt-4 text-[16px] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta nisl sed urna euismod vehicula dictum sed erat. Mauris nec molestie metus. Praesent ut hendrerit ipsum. Fusce arcu urna, ultricies ut elit eget, porttitor rhoncus ante. Sed scelerisque magna at sodales finibus. Sed consequat, dolor id eleifend tincidunt, diam felis cursus felis, sit amet tincidunt mauris ligula id nisi. Morbi a ligula laoreet, fermentum est id, rhoncus nisi. Cras pretium arcu eu urna eleifend, sit amet dictum nibh pretium. Integer eu nisl lacus. Vivamus elementum urna nec velit scelerisque sagittis. Cras malesuada tempor tortor nec tristique. Suspendisse rutrum ante tellus, molestie imperdiet odio malesuada sed. Nunc a dolor nec sapien egestas tristique. Donec pretium neque libero, eget suscipit sapien interdum vehicula. Cras mi ex, hendrerit eget dolor vitae, euismod facilisis tortor. Proin scelerisque vitae eros vel dignissim. Donec commodo quam ut dui commodo, nec placerat libero dignissim. Morbi sit amet metus hendrerit, posuere ipsum eu, malesuada risus. Suspendisse vestibulum cursus ullamcorper. 
                </p>
            </div>

            <div className='w-full  shadow-md mt-6 p-4 bg-white'>
                <h3 className='text-[28px]  font-bold'>Details</h3>

                <h3 className='text-[20px]  text-[#121797] font-bold ml-3 mt-3'>Acess Hours</h3>
                <div className='flex justify-start items-center gap-60 ml-6 mt-3 '>
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
                <div className='flex justify-start items-center gap-60 ml-6 mt-3'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={CableCar} alt='CableCar' className='w-[23px]'/>
                        <p className='text-[16px] text-[#5C727D] '>Cable Car (<span className='text-[#2AD71B]'>Available</span>) </p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Metro} alt='Metro' className='w-[23px]'/>
                        <p className='text-[16px] text-[#5C727D] '>Metro (<span className='text-[#2AD71B]'>Avilable</span>) </p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={bus} alt='Bus' className='w-[23px]'/>
                        <p className='text-[16px] text-[#5C727D] '>Bus (<span className='text-[#2AD71B]'>Available</span>) </p>
                    </div>
                </div>

                <div className='flex justify-start items-center gap-60  mt-10 mb-6 ml-6'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Tram} alt='CableCar' className='w-[23px]'/>
                        <p className='text-[16px] text-[#5C727D] '>Tramway (<span className='text-[#2AD71B]'>Available</span>) </p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Train} alt='Metro' className='w-[23px]'/>
                        <p className='text-[16px] text-[#5C727D] '>Train (<span className='text-[#F10B42]'>Not Avilable</span>) </p>
                    </div>
                </div>

            </div>

            <div className='h-[750px] '>

            </div>

        </div>
    </div> );
}
 
export default PlaceDetail;