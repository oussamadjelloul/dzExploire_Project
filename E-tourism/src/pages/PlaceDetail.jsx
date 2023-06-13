
import Hero from '../component/Place Detail/Hero'
import Adress from '../component/Place Detail/Adress'
import Description from '../component/Place Detail/Description'
import Detail from '../component/Place Detail/Detail';
import Map from '../component/Place Detail/Map';
import Events from '../component/Place Detail/Events';
import Comment from '../component/Place Detail/Comment';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



const PlaceDetail = () => {

    const {id} = useParams()
    const [place,setPlace]=useState('')
    const [events,setEvents]=useState([])
    const [comments,setComments]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/place/'+id)
        .then(res=>{ return( res.json())})
        .then(data =>{
            console.log(data);
            setPlace(data.place)
            setComments(data.comments)
            setEvents(data.events)
        })
    },[])
   

    console.log(id);
    return ( 
    <div>
        <Hero place={place} />
        <div className='flex flex-col  justify-center items-center bg-[#F8F8F8]  gap-4 xl:px-[200px] lg:px-[120px] px-[20px]' >
            <Adress place={place}/>
            <Description place={place}/>
            <Detail place={place}/>
            <Map place={place}/>
            <Events events={events} />
            <Comment comments={comments} id={id} func={setComments}/>

        </div>
    </div> );
}
 
export default PlaceDetail;