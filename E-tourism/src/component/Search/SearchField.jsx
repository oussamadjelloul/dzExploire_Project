/* eslint-disable react/prop-types */

import { MdLocationOn } from "react-icons/md";
import { DropItem } from "./DropItem";

export const SearchField = ({themes,categories}) => {

  return (
    <div className="px-8 py-4 bg-[#f3f3f3] text-[#8593a9] text-xs">
      <div className="mb-1 relative">
        <input
          type="text"
          id="geolocation_search"
          className="w-full px-3 py-2 focus:outline-0 bg-white"
          name="geolocation_search"
          placeholder="Adresse"
          value=""
          autoComplete="on"
        ></input>
        <MdLocationOn className="absolute text-[#ff0033] w-5 h-5 right-1 top-1/4" />
      </div>
      <div className="flex justify-between gap-3">
        <DropItem items={themes} title={"Theme"} />
        <DropItem items={categories} title={"Category"}/>
      </div>
    </div>
  );
};
