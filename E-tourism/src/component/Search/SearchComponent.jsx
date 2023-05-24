import { useRef, useState } from "react";
import { Card } from "./Card";
import { MapComponent } from "./MapComponent";
import { SearchField } from "./SearchField";



export const SearchComponent = () => {
  const places = [
    {
      place_title: "place_title 9 ",
      address:"oued semmar ",
      state: "alger",
      category: "historic",
      opening_hour: "08:00",
      closing_hour: "21:00",
      transport: ["transport1","transport2"],
      city: "el harrach",
      theme: "theme",
      description: "description of the place",
      images : ["https://lh3.googleusercontent.com/p/AF1QipPSnQBgvZmepl2zrh0WsrGvbKFtXSYHSyedn-Gc=s1360-w1360-h1020","imageUrl2"] ,
      lat : 36.670226 ,
      long: 3.083123,
      view : 0 
    },
    {
      place_title: "place_title 9 ",
      address:"oued semmar ",
      state: "alger",
      category: "historic",
      opening_hour: "08:00",
      closing_hour: "21:00",
      transport: ["transport1","transport2"],
      city: "el harrach",
      theme: "theme",
      description: "description of the place",
      images : ["https://lh3.googleusercontent.com/p/AF1QipPSnQBgvZmepl2zrh0WsrGvbKFtXSYHSyedn-Gc=s1360-w1360-h1020","imageUrl2"] ,
      lat : 36.669153 ,
      long: 2.818261,
      view : 0 
    },
    {
      place_title: "place_title 9 ",
      address:"oued semmar ",
      state: "alger",
      category: "historic",
      opening_hour: "08:00",
      closing_hour: "21:00",
      transport: ["transport1","transport2"],
      city: "el harrach",
      theme: "theme",
      description: "description of the place",
      images : ["https://lh3.googleusercontent.com/p/AF1QipPSnQBgvZmepl2zrh0WsrGvbKFtXSYHSyedn-Gc=s1360-w1360-h1020","imageUrl2"] ,
      lat : 35.642417 ,
      long: -0.547739,
      view : 0 
    },

  ]
  const themes = places.map(place => place.theme);
  const categories = places.map(place => place.category);
  const mapRef = useRef();
  function handleOnSetView(coordinates) {
    mapRef.current.setView(coordinates, 14);
  }
  const [click,setClick] = useState(true)
  return (
    <>
    <div className="hidden sm:flex sm:flex-row flex-col-reverse h-[85vh] w-full">
        <div className="flex-1 flex flex-col overflow-y-scroll">
        <SearchField themes={themes} categories={categories} />
        <div className="h-full flex-1 ">
            <h1 className="text-3xl px-8 mt-4 font-bold text-[#222222] pb-2">Search</h1>
            <div className="grid p-4 pb-0 lg:grid-cols-2 ite">
              {places.map((place,index) => (
                <Card detail={place} key={index} handleOnSetView={()=>handleOnSetView([place.lat,place.long])} />
              ))}
            </div>
        </div>
        </div>
        <div className="flex-1">
          <MapComponent places={places} mapRef={mapRef} />
        </div>
    </div>
    <div className="sm:hidden h-[85vh] w-full relative">
        <div className={click ? "h-full flex flex-col overflow-y-scroll":"hidden h-full flex-col overflow-y-scroll"}>
          <SearchField themes={themes} categories={categories} />
          <div className="h-full flex-1 ">
            <h1 className="text-3xl px-8 mt-4 font-bold text-[#222222] pb-2">Search</h1>
            <div className="p-4 pb-0">
              {places.map((place,index) => (
                <Card detail={place} key={index} handleOnSetView={()=>handleOnSetView([place.lat,place.long])} />
              ))}
            </div>
          </div>
        </div>
        <div className={click ? "hidden": "h-full w-full"}>
          <MapComponent places={places} mapRef={mapRef} />
        </div>
        <div className="bottom-1 right-1 absolute text-white z-50">
          <button onClick={()=>setClick(false)} className='px-3 py-2 rounded bg-red-600 mr-2'>Map</button>
          <button onClick={()=>setClick(true)} className='px-3 py-2 rounded bg-red-600 mr-2'>Search</button>
        </div>
    </div>
    </>

  )
}
