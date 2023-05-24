import { FaBars } from "react-icons/fa";
import user from "../../assets/user.png"

const Nav = (prop) => {
    return (  <div className="flex w-full lg:w-full lg:justify-end gap-2 pt-2 items-center justify-between p-1 fixed z-40 backdrop-filter backdrop-blur-md backdrop-brightness-100 pb-3">
    <div className="w-1/12 lg:hidden">
      <button
        onClick={() => {
          prop.setOpen(!prop.open);
        }}
      >
        <FaBars size="25px" />
      </button>
    </div>
    <div className="h-full flex justify-center items-center gap-[5%] ">
      <img src={user} alt="admin" className="w-10 h-10"/>
      <div className=" flex flex-col">
        <p>OUSSAMA DJELLOUL</p>
        <p>admin</p>
      </div>
    </div>
  </div> );
}
 
export default Nav;