import { MdOutlineWatchLater } from "react-icons/md";
import { BiBus } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Card = ({ handleOnSetView, detail }) => {
  const [description, setDescription] = useState(null);
  useEffect(() => {
    let displayText = detail.description.slice(0, 200); // Get the first 200 characters

    if (detail.description.length > 200) {
      displayText += "..."; // Append ellipsis if the text exceeds 200 characters
    } else {
      displayText += " ".repeat(200 - text.length); // Fill with spaces if the text is less than 200 characters
    }
    setDescription(displayText);
  }, []);

  return (
    <Link to={"/place/" + detail._id}>
      <div onMouseEnter={handleOnSetView} className="px-4 mb-8">
        <div className="bg-white border border-gray-200 rounded shadow">
          <a href="#">
            <img
              className="rounded-t w-full aspect-video"
              src={detail.images[0]}
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-xl leading-7 font-medium text-[#222222]">
                {detail.place_title.length > 20
                  ? `${detail.place_title.slice(0, 20)}...`
                  : detail.place_title}
              </h5>
            </a>
            <p className="mb-2 text-sm leading-5 text-[#5C727D]">
              {description}
            </p>
            <div className="flex items-center text-2xl">
              <div className="p-2 flex gap-1 items-center">
                <MdOutlineWatchLater />
                <p className="text-xs leading-4 text-[#5C727D]">
                  {detail.opening_hour == "Accessible 24 heures sur 24"
                    ? detail.opening_hour
                    : detail.opening_hour + " - " + detail.closing_hour}
                </p>
              </div>
              <div className="p-2 flex gap-1 items-center">
                <BiBus />
                <p className="text-xs leading-4 text-[#5C727D]">
                  {detail.transport.filter(item => item === 'Available').length}
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="p-2 flex gap-1 items-center text-md">
                <MdLocationOn />
                <p className="text-xs leading-4 text-[#5C727D]">
                  {detail.address.length > 21
                  ? `${detail.address.slice(0, 21)}...`
                  : detail.address}
                </p>
              </div>
              <div className="p-2 flex gap-1 items-center">
                <BsFillEyeFill />
                <p className="text-xs leading-4 text-[#5C727D]">
                  {detail.view}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
