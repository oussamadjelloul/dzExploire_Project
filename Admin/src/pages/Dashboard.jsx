import React from "react";
import SideBar from "../component/Dashboard/SideBar";
// import { AiOutlineSearch } from "react-icons/ai";
import '../assets/css/dashboard.css'

import Charts from "../component/Charts/Charts";
import Timing from "../assets/Icon.svg";
import Message from "../assets/comment 1.svg";
// import Cadre from '../assets/cadre_of_comment.svg'
import Cards from "../assets/post 2.svg";
import Calendery from "../assets/calendar 2.svg";
import Nav from "../component/Dashboard/Nav";
import { TreEvent, nbEv, nbCom, nbPl, comments, TreComment, TreCarding, Events } from '../api/api'
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from "react-router-dom";
// import { nbEv } from "../api/api";

export default function Home() {
  const { user } = useAuthContext()
  const [open, setOpen] = React.useState(false);
  const [nbE, setNbe] = React.useState(0);
  const [nbC, setCom] = React.useState(0);
  const [nbplaces, setNbPlaces] = React.useState(0);
  const navigate = useNavigate();
  const [ThreComm, setThre] = React.useState([]);
  const [TreEventt, setEventing] = React.useState([]);
  const [TreCards, setTreCards] = React.useState([]);
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  const [ChartsViews, setChartsViews] = React.useState([]);
  const [year, setYear] = React.useState(currentYear);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }




  React.useEffect(() => {

    TreComment

    const fetchComm = async () => {
      var response = await fetch(TreComment, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      setThre([...jsonData])
    }

    /// charts Events  random :

    const ChartsEvents = async () => {
      var response = await fetch(`${Events}${year}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      jsonData.forEach(element => {
        element.month = element.month.slice(6, 7)
      })
      setChartsViews([...jsonData])
      console.log(jsonData);
    }


    /// thre cards random : 
    const TreCrardsFun = async () => {
      var response = await fetch(TreCarding, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      setTreCards([...jsonData])
    }

    /// thre event random : 
    const TreEventFun = async () => {
      var response = await fetch(TreEvent, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      setEventing([...jsonData])
    }


    const nbComm = async () => {
      var response = await fetch(nbEv, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      var jsonData = await response.json();
      setNbe(jsonData.count)
      response = await fetch(nbCom, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      jsonData = await response.json();
      setCom(jsonData.count)
      response = await fetch(nbPl, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      jsonData = await response.json();
      setNbPlaces(jsonData.length)
      console.log(user.token);
    }
    // const dart = async () => {
    //   console.log(`${comments}2023`)
    //   var response = await fetch(`${comments}2023`, {
    //     method: 'GET',
    //     headers: {
    //       "Content-Type": "application/json",
    //       'accestoken': user.token,
    //     }
    //   })
    //   var jsonData = await response.json();
    //   console.log(jsonData)
    // }
    // dart();
    nbComm();
    fetchComm();
    TreEventFun();
    TreCrardsFun();
    ChartsEvents();
  }, [year])




  return (
    <div className="w-full">
      <Nav open={open} setOpen={setOpen} />

      <div className="flex max-h-max">
        <SideBar
          open={open}
          setOpen={() => {
            setOpen(!open);
          }}
        />

        <div className="w-full lg:w-4/5 p-3 pt-0 lg:ml-[20%] ">

          <div className="pt-20 font-font relative">
            <div className="lg:w-8/12 w-full p-3  flex justify-between">
              <p className=" text-blu text-2xl font-semibold">Dashboard</p>
              <div
                className="w-[35%] md:w-[30%] flex rounded-lg h-14 justify-center items-center gap-[10%] p-1"
                style={{ boxShadow: "0px 0.5px 5px #e6e1e1" }}
              >
                <div className=" h-12 w-10 rounded-xl bg-blue-100 flex justify-center">
                  <img src={Timing} />
                </div>
                <div className="w-[50%] md:w-[40%] flex flex-col">
                  {/* <p className=" hidden  lg:flex ">Filter Periode</p> */}

                  {/* <div className="md:flex lg:flex-row flex-col text-xs text-gray-400 lg:gap-[2px] h-10"> */}
                  <div className="flex w-full h-full gap-[10%]">
                    <input
                      type="number" id="year-input" name="year" min="1900" max="2100" step="1" defaultValue={currentYear}
                      className="w-[100%]"
                      onClick={(e) => { setYear(e.target.value) }}
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
                      <p className=" text-2xl font-bold text-blu">{nbplaces}</p>
                      <p className="text-[12px] text-blu font-semibold">
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
                      <p className=" text-2xl font-bold text-blu">{nbE}</p>
                      <p className="text-[12px] text-blu font-semibold">
                        Event posted
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
                      <p className=" text-2xl font-bold text-blu">{nbC}</p>
                      <p className=" text-[12px] text-blu font-semibold">
                        Comments posted
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
                  <div className="w-full flex max-h-max flex-wrap ">
                    {
                      ThreComm && ThreComm.map((e) => {
                        return (<div className=" flex w-52 h-44 flex-col m-2" key={e._id}>
                          <div className=" CardComment w-full h-[80%] relative p-10 justify-center items-center">
                            {/* <img src={Cadre} alt="hello world" className=" w-full h-full  " /> */}
                            <p className="w-full h-16 truncate " > {e.comment_content}</p>
                          </div>
                          <div className="text-sm h-[20%] flex justify-center items-center"> {e.name_user} </div>
                        </div>)
                      })
                    }
                  </div>
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

                    {
                      TreEventt && TreEventt.map((e) => {
                        return <div key={e._id} className="flex p-2 justify-between text-base">
                          <p className=" truncate w-[50%]">{e.event_title}</p>
                          {/* <p className=" text-xs text-gray-400">{generateRandomNumber() > 40 ? "40" : generateRandomNumber()} {generateRandomNumber() > 40 ? "+" : ""} views</p> */}
                          <p className=" text-xs text-gray-400 truncate">{e.updatedAt.slice(1, 10)}</p>
                        </div>
                      })
                    }

                    <button className="p-2 bg-[#183BB7] rounded-md text-white text-base" onClick={() => { navigate('events') }}>
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

                    {
                      TreCards && TreCards.map((e) => {
                        return <div key={e._id} className="flex p-2 justify-between text-base">
                          <p className=" truncate w-[50%]">{e.place_title}</p>
                          {/* <p className=" text-xs text-gray-400">{generateRandomNumber() > 40 ? "40" : generateRandomNumber()} {generateRandomNumber() > 40 ? "+" : ""} views</p> */}
                          <p className=" text-xs text-gray-400 truncate">{e.updatedAt.slice(1, 10)}</p>
                        </div>
                      })
                    }

                    <button className="p-2 bg-[#183BB7] rounded-md text-white text-base" onClick={() => { navigate('cards') }}>
                      View All Cards
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
