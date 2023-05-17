import Event from '../../assets/Place Detail/Event.jpg'
import cld from '../../assets/Place Detail/cld.png'
const EventCard = () => {
    return ( 
    <div className="shadow-md rounded-md bg-white w-[350px]">
        <div className="h-1/2 relative">
            <img src={Event} alt="event" className='w-full rounded-t-md'/>
            <div className='text-[#142361] p-2 font-bold bg-white rounded-md absolute top-2 left-2 '>Comming</div>
        </div>
        <div className='flex pl-4 items-center justify-start gap-8'>
            <div className='flex flex-col justify-center items-center mt-4 '>
                <img src={cld} alt='schudle' className='w-[35px]'/>
                <h3 className='text-[#1E2EB7] text-[16px] font-extrabold mt-1 text-center'>05 July </h3>
                <h3 className='text-[#1E2EB7] text-[16px] font-extrabold text-center'>09:00</h3>
            </div>
            <div className='self-start mt-2 mb-4 '>
                <h1 className='text-[22px] font-bold text-left mb-2'>Indepandency Day</h1>
                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lobortis augue, at tincidunt purus. Donec et nibh eget neque tristique accumsan eu eget dolor.</p>
            </div>
        </div>
        

    </div> );
}
 
export default EventCard;