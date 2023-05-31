import marker from '../../assets/Place Detail/Marker.png'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import '../../assets/css/place.css'

const Map = () => {
    const customIcon = new Icon({
        iconUrl :marker , 
        iconSize : [100,100]
    })
    return (  
    
    <div className='w-full  shadow-md mt-6 p-4 bg-white '>
    <h3 className='text-[28px]  font-bold'>Card</h3>
    <MapContainer center={[51.505, -0.09]} zoom={15} className='my-4 ' >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[51.505,-0.09]} icon={customIcon}>
            <Popup>
                <h3>The card creted by rami</h3>
            </Popup>
        </Marker>
    </MapContainer>
</div> );
}
 
export default Map;