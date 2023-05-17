
import Hero from '../component/Place Detail/Hero'
import Adress from '../component/Place Detail/Adress'
import Description from '../component/Place Detail/Description'
import Detail from '../component/Place Detail/Detail';
import Map from '../component/Place Detail/Map';
import Events from '../component/Place Detail/Events';
import CommentCard from '../component/Place Detail/CommentCard';
import Comment from '../component/Place Detail/Comment';



const PlaceDetail = () => {


    return ( 
    <div>
        <Hero />
        <div className='flex flex-col  justify-center items-center bg-[#F8F8F8]  gap-4 xl:px-[200px] lg:px-[120px] px-[20px]' >
            <Adress />
            <Description />
            <Detail />
            <Map />
            <Events />
            <Comment />
            <div className='h-[750px] '>
                 
            </div>

        </div>
    </div> );
}
 
export default PlaceDetail;