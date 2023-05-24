import React from "react";
import SideBar from "../component/Dashboard/SideBar";
import { useLocation } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Charts from "../component/Charts/Charts";
import Timing from "../assets/Icon.svg";
import Message from "../assets/comment 1.svg";
import Cards from "../assets/post 2.svg";
import Calendery from "../assets/calendar 2.svg";
export default function Home() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex max-h-max">
      <SideBar
        open={open}
        setOpen={() => {
          setOpen(!open);
        }}
      />

      <div className="w-full lg:w-4/5 p-3 pt-0 lg:ml-[20%] ">
        <div className="flex w-full lg:w-10/12 lg:justify-end gap-2 pt-2 items-center justify-between p-1 fixed z-40 backdrop-filter backdrop-blur-md backdrop-brightness-100 pb-3">
          <div className="w-1/12 lg:hidden">
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FaBars size="25px" />
            </button>
          </div>
          <div className="w-4/12 h-full flex justify-center items-center gap-[5%] ">
            <img src="" alt="admin" />
            <div className=" flex flex-col">
              <p>OUSSAMA DJELLOUL</p>
              <p>admin</p>
            </div>
          </div>
        </div>
        <div className="pt-20 font-font relative">
          <div className="lg:w-8/12 w-full p-3  flex justify-between">
            <p className=" text-blu text-2xl font-semibold">Dashboard</p>
            <div
              className="w-4/12 flex rounded-lg h-14 justify-center items-center gap-[10%]"
              style={{ boxShadow: "0px 0.5px 3px #bdb9b9" }}
            >
              <div className=" h-10 w-10 rounded-xl bg-blue-100 flex justify-center">
                <img src={Timing} />
              </div>
              <div>
                <p>Filter Periode</p>
                <label id="date">adfasdfa</label>
                {/* <input htmlFor="date" type="date" className=" "/> */}
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col sm:flex-row mt-2 ">
            {/* text cards  */}
            <div className="lg:w-8/12 w-full flex flex-col justify-center items-center ">
              {/* cards  */}
              <div className="w-full max-h-max flex flex-wrap gap-[6%]">
                {/* cards 1  */}
                <div className=" lg:w-[29%] sm:w-[27%] w-[80%] h-28 mt-3 m-auto sm:m-0 sm:mt-0 border border-blu rounded-lg flex items-center justify-center gap-4">
                  {/* img */}
                  <div
                    className="w-[30%] h-14 bg-gray-300 border border-blu flex items-center justify-center"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={Cards} alt="img" />
                  </div>
                  {/* text */}
                  <div className="flex w-[50%] h-20 flex-col mt-4">
                    <p className=" text-2xl font-bold text-blu">3000</p>
                    <p className="text-md text-blu font-semibold">
                      card posted
                    </p>
                  </div>
                </div>

                {/* cards 2  */}
                <div className=" lg:w-[29%] sm:w-[27%] w-[80%] h-28 mt-3 m-auto sm:m-0 sm:mt-0 border  border-blu rounded-lg flex items-center justify-center gap-4">
                  {/* img */}
                  <div
                    className="w-[30%] h-14 bg-gray-300 border border-blu flex items-center justify-center"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={Calendery} alt="img" />
                  </div>
                  {/* text */}
                  <div className="flex w-[50%] h-20 flex-col mt-4">
                    <p className=" text-2xl font-bold text-blu">3000</p>
                    <p className="text-md text-blu font-semibold">
                      card posted
                    </p>
                  </div>
                </div>

                {/* cards 3  */}
                <div className=" lg:w-[29%] sm:w-[27%] w-[80%] h-28 mt-3 m-auto sm:m-0 sm:mt-0 border  border-blu rounded-lg flex items-center justify-center gap-4">
                  {/* img */}
                  <div
                    className="w-[30%] h-14 bg-gray-300 border border-blu flex items-center justify-center"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={Message} alt="img" />
                  </div>
                  {/* text */}
                  <div className="flex w-[50%] h-20 flex-col mt-4">
                    <p className=" text-2xl font-bold text-blu">3000</p>
                    <p className="text-md text-blu font-semibold">
                      card posted
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full rounded-lg p-3 max-h-max mt-3"
                style={{ boxShadow: "0px 1px 3px #c9c5c5" }}
              >
                <Charts />
              </div>
              <div className="w-full max-h-max mt-3">
                <p className="text-blu font-bold text-2xl">Customer Review</p>
                alkskdjflkjs d
              </div>
            </div>
            {/* views  */}
            <div className="lg:w-4/12 w-full flex flex-col justify-start gap-[1%]">
              <div
                className="w-[90%] m-auto bg-gray-200 rounded-md text-center p-2"
                style={{ boxShadow: "0px 3px 2px #c9c5c5" }}
              >
                <p className="text-xl text-gray-700">Best-views events</p>
                <div className="mt-3 w-[90%] m-auto max-h-max">
                  <div className="flex p-3 justify-between text-base">
                    <p>Flotsam</p>
                    <p className=" text-sm text-gray-400">40+views</p>
                    <p className=" text-sm text-gray-400">05 July 2022</p>
                  </div>
                  <div className="flex p-3 justify-between text-base">
                    <p>Flotsam</p>
                    <p className=" text-sm text-gray-400">40+views</p>
                    <p className=" text-sm text-gray-400">05 July 2022</p>
                  </div>
                  <button className="p-2 bg-[#183BB7] rounded-md text-white text-base">
                    View All Events
                  </button>
                </div>
              </div>
              <div
                className="w-[90%] m-auto bg-gray-200 rounded-md text-center p-2"
                style={{ boxShadow: "0px 3px 2px #c9c5c5" }}
              >
                <p className="text-xl text-gray-700">Best-views cards</p>
                <div className="mt-3 w-[90%] m-auto max-h-max">
                  <div className="flex p-3 justify-between text-base">
                    <p>Flotsam</p>
                    <p className=" text-sm text-gray-400">40+views</p>
                    <p className=" text-sm text-gray-400">05 July 2022</p>
                  </div>
                  <div className="flex p-3 justify-between text-base">
                    <p>Flotsam</p>
                    <p className=" text-sm text-gray-400">40+views</p>
                    <p className=" text-sm text-gray-400">05 July 2022</p>
                  </div>
                  <button className="p-2 bg-[#183BB7] rounded-md text-white text-base">
                    View All Cards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
