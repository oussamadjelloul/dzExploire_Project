import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import placeholder from "../../assets/Search/placeholder.png"

import { Icon, divIcon, point } from "leaflet";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const customIcon = new Icon({
  iconUrl: placeholder,
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

export const MapComponent = ({places,setMapRef}) => {

  
  return (
    <MapContainer 
      whenReady={({ target }) => setMapRef(target)}
      center={[36.737232,3.086472]}
      zoom={6}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {places.map((place) => (
          <Marker key={place.popUp} position={[place.lat,place.long]} icon={customIcon}>
            <Popup>
              <Link to={"/place/"+place._id}>
                <div className="flex h-20 justify-center">
                  <div className="aspect-square h-full">
                    <img className="object-cover h-full" src={place.images[0]} alt="" />
                  </div>
                  <div className="flex flex-col p-1">
                      <h5 className="font-medium text-xm text-[#222222]">{place.place_title}</h5>
                      <div className='flex gap-1 items-center'>
                        <MdLocationOn/>
                        <p className='text-[#5C727D] p-0 m-0'>{place.address}</p>
                      </div>
                  </div>
                </div>  
              </Link>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
