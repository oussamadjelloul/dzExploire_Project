import React from "react";
import SideBar from "../component/Dashboard/SideBar";
import { Link, useNavigate } from "react-router-dom";

import Filter from "../assets/filter-search.png";
import { BiSearch } from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";
import PaginatedItems from "../component/Pagination/Pagination";
import "../assets/css/Pagination.css";
import Nav from "../component/Dashboard/Nav";
import { DeleteCard, Cards, nbPl, SerchePlaces } from '../api/api'
import { useAuthContext } from "../hooks/useAuthContext";
// import Charts from "../component/Charts/Charts";
// import Timing from "../assets/Icon.svg";
// import Message from "../assets/comment 1.svg";
// import Cards from "../assets/post 2.svg";
// import Calendery from "../assets/calendar 2.svg";
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [total, setTotale] = React.useState(0);
  const { user } = useAuthContext();
  const [reload, setReload] = React.useState(false)
  const [search, setSearch] = React.useState("");
  async function Serch(value) {
    if (value !== "") {
      await axios(`${SerchePlaces} / /${value}`, {
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        },
      }).then((e) => {
        setData([...e.data])
        // setReload(!reload)
      })
    } else { setReload(!reload) }
  }

  async function handlerDelete(id) {
    let headersList = {
      "Accept": "*/*",
      "accestoken": user.token,
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "id": id
    });

    let response = await fetch(DeleteCard, {
      method: "DELETE",
      body: bodyContent,
      headers: headersList
    });
    let data = await response.text();
    if (response.status == 200) {
      setReload(!reload);
    }
  }

  React.useEffect(() => {
    async function FetchData() {
      var response = await fetch(`${Cards}/${page}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      setData([...jsonData]);
    }
    FetchData();
    // nomber total of Event :
    async function getTotal() {
      var response = await fetch(nbPl, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      console.log(jsonData.length)
      setTotale(jsonData.length)
    }
    getTotal();
  }, [page, reload])


const navigate = useNavigate()
const handlerUpdate=(id)=>{
  navigate('/edit/card/'+id)
}
  return (
    <div className="flex max-h-max">
      <Nav open={open} setOpen={setOpen} />
      <SideBar
        open={open}
        setOpen={() => {
          setOpen(!open);
        }}
      />

      <div className="w-full lg:w-4/5 p-3 pt-0 lg:ml-[20%] ">
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
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); Serch(e.target.value) }}
                />
                <button>
                  <BiSearch
                    size="20px"
                    className=" absolute right-0 top-0 mt-3"
                  />
                </button>
              </div>
              {/* <button className="border h-12  mt-3 rounded-md border-gray-300 p-2 w-3/12 flex justify-center items-center">
                <img src={Filter} />
                <p className="text-gray-400 text-base ">Filter</p>
              </button> */}
            </div>
            {/* add cards  */}

            <Link to='/new/card'>
              <button className=" h-12 mt-3 p-3 bg-[#183BB7] rounded-md text-white text-base font-semibold">
                <p className="hidden sm:flex">+ New card</p>
                <p className="sm:hidden ">+</p>
              </button>
            </Link>
          </div>
          <div
            className="border-gray-200 w-full rounded-lg mt-5 overflow-y-auto"
            style={{
              boxShadow: "0px 0px 3px #d6d2d2",
              borderRadius: "3px",
            }}
          >
            <table
              className="table-auto border  w-full text-center pb-10 "
              style={{ borderRadius: "16px", minWidth: "700px" }}
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
                {data.length > 0 &&
                  data.map((item) => {
                    return (
                      <tr
                        key={item._id}
                        className=""
                      >
                        <td className="pt-5 pb-5 text-base">{item.place_title} </td>
                        <td className="pt-5 pb-5 text-base">{item.city}</td>
                        <td className="pt-5 pb-5 text-base">
                          {item.address}
                        </td>
                        <td className="pt-5 pb-5 text-base flex gap-3 justify-center ">
                          <button className=" text-xs text-white bg-blue-500 p-1 rounded-md" onClick={() => {
                            handlerUpdate(item._id);
                          }}>
                            modify
                          </button>
                          <button className=" text-xs text-white bg-red-500 p-1 rounded-md"
                            onClick={() => {
                              console.log(item._id);
                              handlerDelete(item._id);
                            }}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          <div className="w-[88%] m-auto sm:ml-0 sm:mr-0 md:w-[50%] h-10 mt-5">
            <PaginatedItems
              currentItems={page}
              handlePageClick={(e) => { setPage(e.selected) }}
              pageCount={Math.ceil(total / 9)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
