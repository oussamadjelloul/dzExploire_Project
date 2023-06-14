/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { DropItem } from "./DropItem";

export const SearchField = ({places,trigger,data,setPlaces,themes,categories}) => {
  const [adress,setAdress] = useState('')
  const [theme,setTheme] = useState(null)
  const [category,setCategory] = useState(null)
  useEffect(()=>{
    setAdress('')
    setCategory(null)
    setTheme(null)
  },[trigger])
  useEffect(() => {
    let result = data;
    if (adress) {
      result = result.filter(place => place.address.startsWith(adress))
      console.log(adress);
    }
    if (theme) {
      result = result.filter(place => place.theme === theme) 
      console.log(theme);

    }
    if (category) {
      result = result.filter(place => place.categorie === category)
      console.log(category);

    }
    setPlaces(result)
  }, [adress,category,theme])
  
  return (
    <div className="px-8 py-4 bg-[#f3f3f3] text-[#8593a9] text-xs">
      <div className="mb-1 relative">
        <input
          type="text"
          id="geolocation_search"
          className="w-full px-3 py-2 focus:outline-0 bg-white"
          name="geolocation_search"
          placeholder="Adresse"
          value={adress}
          onChange={(e)=>{setAdress(e.target.value);}}
          autoComplete="on"
        ></input>
        <MdLocationOn className="absolute text-[#ff0033] w-5 h-5 right-1 top-1/4" />
      </div>
      <div className="flex justify-between gap-3">
        <DropItem trigger={trigger} data={data} setSelected={setTheme} items={themes} title={"Theme"} />
        <DropItem places={places} trigger={trigger} data={data} setSelected={setCategory} items={categories} title={"Category"}/>
      </div>
    </div>
  );
};
