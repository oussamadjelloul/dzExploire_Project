
    
import "leaflet/dist/leaflet.css";
import { useEditCardContext } from "../hooks/useEditCardContext";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useParams } from "react-router-dom";
import Nav from "../component/Dashboard/Nav";
import SideBar from "../component/Dashboard/SideBar";
const EditCard2 = () => {
    const  {EditCard} = useEditCardContext()
    const {id} = useParams();
    const [open, setOpen] = useState(false);
    const [lat, setLat] = useState(36.737232);
    const [long, setLong] = useState(3.086472);
    useEffect(async () => {
      const data = await fetch("http://localhost:5000/place/"+id)
      const result = await data.json()
      setLat(result.lat)
      setLong(result.long)
    })
    

  function MyComponent() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setLat(lat);
        setLong(lng);
      },
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
          <MapContainer
            center={[lat, long]}
            zoom={6}
            onClick={(e) => {
              setLat(e.latlng.lat);
              setLong(e.latlng.long);
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyComponent />
            <Marker position={[lat, long]}></Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default EditCard2;

