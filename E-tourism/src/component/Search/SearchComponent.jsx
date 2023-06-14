import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { Card } from "./Card";
import { MapComponent } from "./MapComponent";
import { SearchField } from "./SearchField";



export const SearchComponent = () => {
  const [places,setPlaces] = useState(null)
  const [trigger,setTrigger] = useState(true)
  const fun = (data) => {
    setPlaces(data)
    setTrigger(!trigger)
  }
  const { data,isLoading } = useQuery("places", async () => {
    const data = await fetch("http://localhost:5000/getPlaces/");
    return data.json();
  }, {onSuccess: fun});
  const [click,setClick] = useState(true);
  const [mapRef, setMapRef] = useState(null);
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  const themes = [...new Set(data.map(place => place.theme))];
  const categories = [...new Set(data.map(place => place.category))];
  function handleOnSetView(coordinates) {
    mapRef.setView(coordinates, 14);
  }
  return (
    <>
    <div className="hidden sm:flex sm:flex-row flex-col-reverse h-[85vh] w-full">
        <div className="flex-1 flex flex-col overflow-y-scroll">
          <SearchField places={places} trigger={trigger} data={data} setPlaces={setPlaces} themes={themes} categories={categories} />
        <div className="h-full flex-1 ">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl px-8 mt-4 font-bold text-[#222222] pb-2">Search</h1>
              <button onClick={()=>{setPlaces(data);setTrigger(!trigger);}} className="py-1 px-2 mr-8 bg-red-600 rounded text-white">Reset</button>
            </div>
            <div className="grid p-4 pb-0 lg:grid-cols-2 ite">
              {places.map((place,index) => (
                <Card detail={place} key={index} handleOnSetView={()=>handleOnSetView([place.lat,place.long])} />
              ))}
            </div>
        </div>
        </div>
        <div className="flex-1">
          <MapComponent places={places} setMapRef={setMapRef} />
        </div>
    </div>
    <div className="sm:hidden h-[85vh] w-full relative">
        <div className={click ? "h-full flex flex-col overflow-y-scroll":"hidden h-full flex-col overflow-y-scroll"}>
          <SearchField trigger={trigger} data={data} setPlaces={setPlaces} themes={themes} categories={categories}  />
          <div className="h-full flex-1 ">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl px-8 mt-4 font-bold text-[#222222] pb-2">Search</h1>
              <button onClick={()=>{setPlaces(data);setTrigger(!trigger);}} className="py-1 px-2 mr-8 bg-red-600 rounded text-white">Reset</button>
            </div>
            <div className="p-4 pb-0">
              {places.map((place,index) => (
                <Card detail={place} key={index} handleOnSetView={()=>handleOnSetView([place.lat,place.long])} />
              ))}
            </div>
          </div>
        </div>
        <div className={click ? "hidden": "h-full w-full"}>
          <MapComponent places={places} setMapRef={setMapRef} />
        </div>
        <div className="bottom-1 right-1 absolute text-white z-50">
          <button disabled={!click} onClick={()=>setClick(false)} className='px-3 disabled:grayscale disabled:opacity-50 py-2 rounded bg-red-600 mr-2'>Map</button>
          <button disabled={click} onClick={()=>setClick(true)} className='px-3 py-2 rounded disabled:grayscale disabled:opacity-50 bg-red-600 mr-2'>Search</button>
        </div>
    </div>
    </>

  )
}
