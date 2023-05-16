import Makam from '../assets/Place Detail/Makam.png'
import Position from '../assets/Place Detail/position.png'

const PlaceDetail = () => {
    return ( 
    <div>
    <div className="carousel w-full h-fit">
        <div id="slide1" className="carousel-item relative w-full">
            <div className='relative w-full '>
                <img src={Makam} className="w-full" />
                <div className='absolute top-2/3 left-1/4' >
                    <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] font-bold'>Makam El chahid</h3>
                    <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                        <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                    <h3 className='lg:text-[18px] sm:text-[14px] text-[11px]'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
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
                    <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] font-bold'>Makam El chahid</h3>
                    <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                        <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                    <h3 className='lg:text-[18px] sm:text-[14px] text-[11px]'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
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
                    <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] font-bold'>Makam El chahid</h3>
                    <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                        <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                    <h3 className='lg:text-[18px] sm:text-[14px] text-[11px]'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
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
                    <h3 className='lg:text-[64px] md:text-[48px] sm:text-[36px] text-[24px] font-bold'>Makam El chahid</h3>
                    <div className='flex justify-start items-center sm:gap-3 gap-1 sm:mt-2'>
                        <img src={Position} alt='position' className='lg:w-[20px] lg:h-[20px] sm:w-[18px] sm:h-[18px] w-[12px] h-[12px]'/>
                    <h3 className='lg:text-[18px] sm:text-[14px] text-[11px]'>Chemin Omar kechkar, El Madania, Algiers, Algeria</h3>
                    </div>
                </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
    </div> );
}
 
export default PlaceDetail;