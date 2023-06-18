import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [showJoin, setShowJoin] = useState(false)

  const toggleVisible = () => {
    if (document.documentElement.scrollTop > 300) {
      setShowJoin(true);
    } else {
      setShowJoin(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

    return ( 
    <div className="">
           <div className={`hidden md:block   w-full top-0  z-50 fixed ${showJoin ? "backdrop-blur-lg" : ""}`}>
            <div className=" mx-20 md:py-2 lg:py-4  text-blue-900 border-b-2 border-blue-800 flex justify-between">
           <Link to='/' className="text-blue-900 text-4xl  font-bold">E-tourism</Link>
           <ul className="w-[15vw] flex text-lg font-medium  justify-between ">
                <li className="lg:text-2xl hover:text-[#FC6401] hover:scale-110"><Link to='/'>Home</Link></li>
                <li className="lg:text-2xl hover:text-[#FC6401] hover:scale-110"><Link to="/search">Search</Link></li>
        

            </ul>
           </div>
           </div>

        <div className={`block md:hidden   w-full top-0  z-50 fixed ${showJoin ? "backdrop-blur-lg" : ""}`}>
        <div className=" mx-5 py-2 flex justify-between text-blue-900 border-b-2 border-blue-800  ">
           <a href="" className="text-blue-900 text-md  font-bold ">Roadie</a>
           <ul className="  flex text-sm font-medium  justify-between ">
                <li className="pr-4 hover:text-[#FC6401] hover:scale-110"><Link to='/'>Home</Link></li>
                <li className="hover:text-[#FC6401] hover:scale-110"><Link to="/search">Search</Link></li>
        

            </ul>
           </div>
        </div>
    </div>);
}
 
export default NavBar;