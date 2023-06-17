import Event from '../../assets/Place Detail/Event.jpg'
import cld from '../../assets/Place Detail/cld.png'
const EventCard = ({event}) => {
    return ( 
    <div className="shadow-md rounded-md bg-white w-[350px]">
        <div className="h-1/2 relative">
            <img src={Event} alt="event" className='w-full rounded-t-md'/>
            <div className='text-[#142361] p-2 font-bold bg-white rounded-md absolute top-2 left-2 '>{event.status}</div>
        </div>
        <div className='flex pl-4 items-center justify-start gap-8'>
            <div className='flex flex-col justify-center items-center mt-4 '>
                <img src={cld} alt='schudle' className='max-w-[35px]'/>
                <h3 className='text-[#1E2EB7] text-[16px] font-extrabold mt-1 text-center'>{event.date} </h3>
                <h3 className='text-[#1E2EB7] text-[16px] font-extrabold text-center'>{event.time}</h3>
            </div>
            <div className='self-start mt-2 mb-4 '>
                <h1 className='text-[22px] font-bold text-left mb-2'>{event.event_title}</h1>
                <p className='text-[16px]'>{event.description}</p>
            </div>
        </div>
        

    </div> );
}
 
export default EventCard;