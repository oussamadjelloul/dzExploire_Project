import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Nav from "../component/Dashboard/Nav";
import SideBar from "../component/Dashboard/SideBar";
import { useEffect } from "react";
import { useNewCardContext } from "../hooks/useNewCardContext";
import { useAuthContext } from "../hooks/useAuthContext";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const NewCard2 = () => {
  const [open, setOpen] = useState(false);
  const [lat, setLat] = useState(36.737232);
  const [long, setLong] = useState(3.086472);
  const { NewCard } = useNewCardContext();
  const navigate = useNavigate();
  const {user} = useAuthContext()

  useEffect(() => {
    console.log(NewCard);
  }, []);

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setLat(lat);
        setLong(lng);
      },
    });
    return null;
  }
  const handleClick = async (e) => {
    console.log(user);
    e.preventDefault()
    let headersList = {
      "Accept": "*/*",
      "accestoken": user.token,
      "Content-Type": "application/json"
     }
     Object.assign(NewCard, {lat: lat});
     Object.assign(NewCard, {long: long});
     Object.assign(NewCard, {view: 0});
     let bodyContent = JSON.stringify(NewCard);
     console.log(NewCard);
     
     let response = await fetch("http://localhost:5000/newPlace", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     if (!response.ok) {
      toast.error('Error')
     } else {
     let data = await response.text();
     console.log(data);
     if (data) {
       toast.success('Place Added Succefully')
       navigate('/', { replace: true });
     }
    }
     
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
        <div className="w-full lg:w-4/5 h-[80vh] flex flex-col items-end relative mt-[92px] lg:ml-[20%]">
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
          <button onClick={(e)=>handleClick(e)} className="py-1 px-2 bg-blue-400 m-2 rounded">Submit</button>
        </div>
      </div>
    </>
  );
};

export default NewCard2;
