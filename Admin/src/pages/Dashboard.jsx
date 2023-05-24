import React from "react";
import SideBar from "../component/Dashboard/SideBar";
// import { AiOutlineSearch } from "react-icons/ai";

import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

import Charts from "../component/Charts/Charts";
import Timing from "../assets/Icon.svg";
import Message from "../assets/comment 1.svg";
import Cards from "../assets/post 2.svg";
import Calendery from "../assets/calendar 2.svg";
import Nav from "../component/Dashboard/Nav";
export default function Home() {
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

        <Nav open={open} setOpen={setOpen} />
        <div className="pt-20 font-font relative">
          <div className="lg:w-8/12 w-full p-3  flex justify-between">
            <p className=" text-blu text-2xl font-semibold">Dashboard</p>
            <div
              className="w-[35%] md:w-[43%] flex rounded-lg h-14 justify-center items-center gap-[10%] p-1"
              style={{ boxShadow: "0px 0.5px 5px #e6e1e1" }}
            >
              <div className=" h-12 w-10 rounded-xl bg-blue-100 flex justify-center">
                <img src={Timing} />
              </div>
              <div className="w-[50%] md:w-[75%] flex flex-col">
                {/* <p className=" hidden  lg:flex ">Filter Periode</p> */}

                {/* <div className="md:flex lg:flex-row flex-col text-xs text-gray-400 lg:gap-[2px] h-10"> */}
                <div className="flex w-full h-full gap-[10%]">
                  <p className=" text-blu font-bold">to </p>
                  <input
                    type="date"
                    id="date1"
                    className="lg:w-[50%] w-[100%]"
                  />
                </div>
                <div className="flex w-full h-full gap-[10%]">
                  <p className=" text-blu font-bold">from </p>
                  <input
                    type="date"
                    id="date1"
                    className="lg:w-[50%] w-[100%]"
                  />
                </div>
                {/* </div> */}
              </div>
              {/* <button
                className="w-5"
                onClick={() => {
                  document.getElementById("date1").focus();
                  
                }}
              >
                <AiOutlineDown size="20px" className="text-gray-300" />
              </button> */}
            </div>
          </div>
          <div className=" w-full h-full flex flex-col lg:flex-row mt-2 ">
            {/* text cards  */}
            <div className="lg:w-8/12 w-full flex flex-col justify-center items-center order-2 lg:order-1 ">
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
            <div className="lg:w-4/12 w-full order-1 lg:order-2 pb-10 lg:pb-0 ">
              <div
                className="w-[90%] m-auto bg-gray-100 rounded-md text-center p-2"
                style={{ boxShadow: "0px 3px 2px #edebeb" }}
              >
                <p className="text-xl text-gray-700">Best-views events</p>
                <div className="mt-3 w-[90%] m-auto max-h-max">
                  <div className="flex p-2 justify-between text-base">
                    <p>Flotsam</p>
                    <p className=" text-sm text-gray-400">40+views</p>
                    <p className=" text-sm text-gray-400">05 July 2022</p>
                  </div>
                  <div className="flex p-2 justify-between text-base">
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
                className="w-[90%] m-auto bg-gray-100 rounded-md text-center p-2 mt-10"
                style={{ boxShadow: "0px 3px 2px #edebeb" }}
              >
                <p className="text-xl text-gray-700">Best-views cards</p>
                <div className="mt-3 w-[90%] m-auto max-h-max">
                  <div className="flex p-2 justify-between text-base">
                    <p>Flotsam</p>
                    <p className=" text-sm text-gray-400">40+views</p>
                    <p className=" text-sm text-gray-400">05 July 2022</p>
                  </div>
                  <div className="flex p-2 justify-between text-base">
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
