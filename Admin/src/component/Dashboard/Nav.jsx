import React from "react";
import { FaBars } from "react-icons/fa";

import userImage from "../../assets/user.png";
import { getMe } from "../../api/api";
import axios from "axios";
import { useAuthContext } from '../../hooks/useAuthContext'

const Nav = (prop) => {
  const { user} = useAuthContext();
  const [users, setUser] = React.useState("");

  React.useEffect(() => {
    const fet = async () => {
      const response = await fetch(getMe, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'accestoken': user.token,
        }
      })
      const jsonData = await response.json();
      setUser(jsonData.user_name)
    }
    fet();
  }, [])
  return (
    <div className="flex w-full lg:w-full lg:justify-end gap-2 pt-2 items-center justify-between p-1 fixed z-40 backdrop-filter backdrop-blur-md backdrop-brightness-100 pb-3">
      <div className="w-1/12 lg:hidden">
        <button
          onClick={() => {
            prop.setOpen(!prop.open);
          }}
        >
          <FaBars size="25px" />
        </button>
      </div>
      <div className="h-full flex w-[50%] md:w-[30%] lg:w-[20%] flex-end gap-[5%] ">
        <img src={userImage} alt="admin" className="w-10 h-10" />
        <div className=" flex flex-col">
          <p>{users}</p>
          <p>admin</p>
        </div>
      </div>
    </div>);
}

export default Nav;