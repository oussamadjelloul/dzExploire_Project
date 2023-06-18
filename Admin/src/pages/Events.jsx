import React from "react";
import SideBar from "../component/Dashboard/SideBar";
import Filter from "../assets/filter-search.png";
import { BiSearch } from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";
import "../assets/css/Pagination.css";
import PaginatedItems from "../component/Pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../component/Dashboard/Nav";
import { EventData, nbEv, DeletEvent, Serche } from "../api/api";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { comma } from "postcss/lib/list";
// import Charts from "../component/Charts/Charts";
// import Timing from "../assets/Icon.svg";
// import Message from "../assets/comment 1.svg";
// import Cards from "../assets/post 2.svg";
// import Calendery from "../assets/calendar 2.svg";
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [openFil, setOpenFil] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [total, setTotale] = React.useState(0);
  const { user } = useAuthContext();
  const [reload, setReload] = React.useState(false)
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState("");
  const [dating, setDating] = React.useState("");
  async function Serch(value) {
    if (value !== "") {
      await axios(`${Serche} / /${value}`, {
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

  // async function Filtring() {
  //   console.log(`${dating.split("-")[0]} juin ${dating.split("-")[1]}`);
  //   const str = `${dating.split("-")[0]} juin ${dating.split("-")[1]}`; 
  //   const reversedStr =[...str].reverse().join('');
  //   console.log(reversedStr)
  //   const fe = data.filter((e) => { e => e.date ===reversedStr })
  //   setData([...fe])
    // let headersList = {
    //   "Accept": "*/*",
    //   "accestoken": user.token
    // }

    // let response = await fetch("http://localhost:5000/eventsFilter/ /2023 July 21/ ", {
    //   method: "GET",
    //   headers: headersList
    // });
    // if (response.status == 200) {
    //   let data = await response.text();
    //   console.log(data)
    //   setData([...data])
    //   setReload(!reload)
    // }







    // if (dating !== "" && type == "") {
    //   const date = new Date();
    //   date.setMonth(parseInt(dating.split("-")[1]));
    //   // Get the month name using the toLocaleString method
    //   const monthName = date.toLocaleString('default', { month: 'long' });

    //   await axios(`${Serche} /${dating.split("-")[0] + " " + monthName + " " + dating.split("-")[2]}/ `, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       'accestoken': user.token,
    //     },
    //   }).then((e) => {
    //     setData([...e.data])
    //     setReload(!reload)
    //   })
    // }
    // else if (type !== "" && dating == "") {
    //   await axios(`${Serche}${type.trim()}/ / `, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       'accestoken': user.token,
    //     },
    //   }).then((e) => {
    //     setData([...e.data])
    //     // setReload(!reload)
    //   })
    // } else if (type !== "" && dating !== "") {
    //   await axios(`${Serche}${type}/${dating.split("-")[0] + " " + monthName + " " + dating.split("-")[2]}/ `, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       'accestoken': user.token,
    //     },
    //   }).then((e) => {
    //     setData([...e.data])
    //     // setReload(!reload)
    //   })
    // } else { setReload(!reload) }
  // }


  async function handlerDelete(id) {
    // axios.delete(DeletEvent, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     'accestoken': user.token,
    //   },
    //   body: {
    //     id: id,
    //   }
    // }).then((e) => {
    //   setReload(!reload);
    // }).catch((e) => { console.log(e) })
    let headersList = {
      "Accept": "*/*",
      "accestoken": user.token,
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "id": id
    });

    let response = await fetch(DeletEvent, {
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
      var response = await fetch(`${EventData}/${page}`, {
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
      var response = await fetch(nbEv, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      setTotale(jsonData.count)
    }
    getTotal();
  }, [page, reload])

  const navigate = useNavigate()
  const handlerUpdate=(id)=>{
    navigate('/edit/event/'+id)
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
            <p className=" text-blu text-2xl font-semibold">Table of Events</p>
          </div>
          <div className=" w-full h-16 flex justify-between">
            {/* search and filter  */}
            <div className="lg:w-5/12 w-9/12 h-full flex  justify-between relative ">
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
              {/* <button onClick={() => { setOpenFil(!openFil) }} className="border h-12  mt-3 rounded-md border-gray-300 p-2 w-3/12 flex justify-center items-center">
                <img src={Filter} />
                <p className="text-gray-400 text-base ">Filter</p>
              </button>
              {openFil &&
                <div className=" w-[40%] bg-white p-4 max-h-max absolute right-0 bottom-[-190%] rounded-md border border-gray-400 shadow-md flex flex-col gap-2">
                  <input type="date" value={dating} onChange={(e) => { setDating(e.target.value); console.log(e.target.value) }} />
                  <input type="text" value={type} onChange={(e) => { setType(e.target.value); console.log(e.target.value) }} placeholder=" type " />
                  <button className=" hover:bg-blue-500 p-1 rounded-md" onClick={() => {
                    Filtring();
                  }}>Apply</button>
                </div>
              } */}
            </div>
            {/* add cards  */}
            <Link to='/new/event'>
              <button className=" h-12 mt-3 p-3 bg-[#183BB7] rounded-md text-white text-base font-semibold">
                <p className="hidden sm:flex">+ New Event</p>
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
                  <th className="pb-5 pt-5 font-medium ">Events </th>
                  <th className="pb-5 pt-5 font-medium">Date </th>
                  <th className="pb-5 pt-5 font-medium">Time </th>
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
                        <td className="pt-5 pb-5 text-base">{item.event_title} </td>
                        <td className="pt-5 pb-5 text-base">{item.date}</td>
                        <td className="pt-5 pb-5 text-base">
                          {item.time}
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
    </div >
  );
}
