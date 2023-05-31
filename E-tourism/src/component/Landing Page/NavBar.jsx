const NavBar = () => {
    return ( 
    <>
           <div className=" hidden md:block  absolute w-full top-0 ">
            <div className=" mx-20 md:py-2 lg:py-4  text-blue-900 border-b-2 border-blue-800 flex justify-between">
           <a href="" className="text-blue-900 text-4xl  font-bold">Roadie</a>
           <ul className="w-[15vw] flex text-lg font-medium  justify-between ">
                <li className="lg:text-2xl hover:text-[#FC6401] hover:scale-110"><a href="">Home</a></li>
                <li className="lg:text-2xl hover:text-[#FC6401] hover:scale-110"><a href="../../pages/Search">Search</a></li>
        

            </ul>
           </div>
           </div>

        <div className=" block md:hidden   ">
        <div className=" mx-5 py-4 flex justify-between text-blue-900 border-b-2 border-blue-800  ">
           <a href="" className="text-blue-900 text-2.5xl  font-bold ">Roadie</a>
           <ul className="  flex text-lg font-medium  justify-between ">
                <li className="pr-4 hover:text-[#FC6401] hover:scale-110"><a href="">Home</a></li>
                <li className="hover:text-[#FC6401] hover:scale-110"><a href="../../pages/Search">Search</a></li>
        

            </ul>
           </div>
        </div>
    </>);
}
 
export default NavBar;