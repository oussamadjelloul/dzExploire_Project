
    
import "leaflet/dist/leaflet.css";
import { useEditCardContext } from "../hooks/useEditCardContext";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Nav from "../component/Dashboard/Nav";
import SideBar from "../component/Dashboard/SideBar";
import { useAuthContext } from "../hooks/useAuthContext";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const EditCard2 = () => {
    const  {EditCard} = useEditCardContext()
    const [open, setOpen] = useState(false);
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const {user} = useAuthContext()
    const navigate = useNavigate();
    useEffect(()=>{
      setLat(EditCard.lat)
    setLong(EditCard.long)
    })
    // setLat(EditCard.lat)
    // setLong(EditCard.long)
    const handleClick = async (e) => {
      console.log(user);
      e.preventDefault()
      let headersList = {
        "Accept": "*/*",
        "accestoken": user.token,
        "Content-Type": "application/json"
       }
       EditCard.lat = lat
       EditCard.long = long
       let bodyContent = JSON.stringify(EditCard);
       console.log(EditCard);
       
       let response = await fetch("http://localhost:5000/updatePlace", { 
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
         toast.success('Place Modified Succefully')
         navigate('/', { replace: true });
       }
      }
       
    }
    

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
        <div className="w-full lg:w-4/5 h-[80vh] flex flex-col items-end relative mt-[92px] lg:ml-[20%]">
          <MapContainer
            center={[lat, long]}
            zoom={6}
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

export default EditCard2;

