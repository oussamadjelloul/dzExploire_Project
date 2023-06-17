import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Nav from "../component/Dashboard/Nav";
import SideBar from "../component/Dashboard/SideBar";
import { useEffect } from "react";
import { useNewCardContext } from "../hooks/useNewCardContext";
const NewCard2 = () => {
  const [open, setOpen] = useState(false);
  const [lat, setLat] = useState(36.737232);
  const [long, setLong] = useState(3.086472);
   const  {NewCard} = useNewCardContext()

useEffect(()=>{
    console.log(NewCard);

},[])

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setLat(lat)
        setLong(lng)
      }
    });
    return null;
  }

  return (
    <>
      <div className="w-screen h-screen flex">
      <Nav open={open} setOpen={setOpen} />
      <SideBar
        open={open}
        setOpen={() => {
          setOpen(!open);
        }}
      />
      <div className="w-full lg:w-4/5 relative mt-[92px] lg:ml-[20%]">
        <MapContainer center={[lat,long]} zoom={6}  onClick={(e)=>{setLat(e.latlng.lat);setLong(e.latlng.long)}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyComponent/>
            <Marker position={[lat,long]}></Marker>

        </MapContainer>
      </div>
      </div>
    </>
  );
};

