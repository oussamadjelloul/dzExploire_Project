import React from "react";
import SideBar from "../component/Dashboard/SideBar";
import { useLocation } from "react-router-dom";
import Filter from "../assets/filter-search.png";
import { BiSearch } from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import PaginatedItems from "../component/Pagination/Pagination";
// import Charts from "../component/Charts/Charts";
// import Timing from "../assets/Icon.svg";
// import Message from "../assets/comment 1.svg";
// import Cards from "../assets/post 2.svg";
// import Calendery from "../assets/calendar 2.svg";
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
        <div className="pt-24 font-font relative">
          <div className="">
            <p className=" text-blu text-2xl font-semibold">Table of Cards</p>
          </div>
          <div className=" w-full h-16 flex justify-between">
            {/* search and filter  */}
            <div className="lg:w-5/12 w-9/12 h-full flex  justify-between">
              <div className="w-7/12 h-12 mt-3 border border-gray-300 relative rounded-md">
                <input
                  type="text"
                  className="w-full h-full p-1 outline-none pr-5 rounded-md "
                  placeholder="Search content.."
                />
                <button>
                  <BiSearch
                    size="20px"
                    className=" absolute right-0 top-0 mt-3"
                  />
                </button>
              </div>
              <button className="border h-12  mt-3 rounded-md border-gray-300 p-2 w-3/12 flex justify-center items-center">
                <img src={Filter} />
                <p className="text-gray-400 text-base ">Filter</p>
              </button>
            </div>
            {/* add cards  */}
            <button className=" h-12 mt-3 p-3 bg-[#183BB7] rounded-md text-white text-base font-semibold">
              <p className="hidden sm:flex">+ New card</p>
              <p className="sm:hidden ">+</p>
            </button>
          </div>
          <div
            className="overflow-auto border-gray-200 w-full rounded-lg mt-5"
            style={{
              boxShadow: "0px 0px 3px #d6d2d2",
              borderRadius: "3px",
              minWidth: "400px",
            }}
          >
            <table
              className="table-auto border  w-full text-center pb-10"
              style={{ borderRadius: "16px" }}
            >
              <thead className="border-b-[1px] border-b-gray-200 text-gray-400 ">
                <tr className="text-gray-700 bg-gray-200">
                  <th className="pb-5 pt-5 font-medium">Places/Monuments </th>
                  <th className="pb-5 pt-5 font-medium">City </th>
                  <th className="pb-5 pt-5 font-medium">Street </th>
                  <th className="pb-5 pt-5 pr-3 font-medium">Action </th>
                </tr>
              </thead>
              <tbody className=" rounded-lg">
                {/* {data.length > 0 &&
                  data.map((item, index) => {
                    return ( */}
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr
                  //   key={index}
                  className=""
                  //   style={{
                  //     background:
                  //       index % 2 === 0 ? "rgb(245, 245, 245,0.7)" : "white",
                  //   }}
                >
                  <td className="pt-3 pb-3 text-base">Mkam El chahid </td>
                  <td className="pt-3 pb-3 text-base">Alger</td>
                  <td className="pt-3 pb-3 text-base">
                    Chemin Omar kechkar, El Madania
                  </td>
                  <td className="pt- pb-3 text-base flex gap-3 justify-center items-center ">
                    <button className=" text-xs text-white bg-blue-500 p-1 rounded-md mt-2">
                      modify
                    </button>
                    <button className=" mt-2 text-xs text-white bg-red-500 p-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>

                {/* );
                  })} */}
              </tbody>
            </table>
          </div>
          <div className="w-full sm:w-[50%] h-10 mt-5">
            <PaginatedItems
              currentItems={1}
              handlePageClick={() => {}}
              pageCount={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
