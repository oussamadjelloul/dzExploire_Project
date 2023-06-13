import marker from '../../assets/Place Detail/Marker.png'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';

const Map = ({place}) => {
    const customIcon = new Icon({
        iconUrl :marker , 
        iconSize : [75,75]
    })
    
    return (  
    
    <div className='w-full  shadow-md mt-6 p-4 bg-white '>
    <h3 className='text-[28px]  font-bold'>Card</h3>
   {place.lat && <div className='h-[300px]'>
        <MapContainer center={[place.lat, place.long]} zoom={15} className='my-4 '  >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[place.lat, place.long]} icon={customIcon}>
                <Popup>
                    <h3>The card creted by rami</h3>
                </Popup>
            </Marker>
        </MapContainer>
    </div>}
    {!place.lat && <div>is loading ....</div>}
   
</div> );
}
 
export default Map;