import { useState } from "react";
import login1 from "../assets/Login/Login.png"
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom/dist';


const Login = () => {
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const {login} = useLogin()
    const navigate = useNavigate()
    function verifyEmail(email) {
        // Email pattern regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Test the email against the pattern
        return emailPattern.test(email);
      }
    const handleSubmit =async ()=>{

        if(email==='' || password==='' )
        {
            toast.error('Please Fill All the fields')
        }
        if(!verifyEmail(email))
        {
            toast.error('Please Enter A valid Email')
        }
        else{
                const user = await login(email,password)
                navigate('/')            
        }
    }

    return ( 
    <div id="login" className="h-screen w-full flex justify-center items-center">
        <div className="flex-col justify-center items-center">
            <div className="flex justify-center items-start shadow-md bg-white rounded-lg  ">
                <img src={login1} alt="login"  className="w-[350px]  md:block hidden    rounded-l-lg"/>
                <div className="p-4   w-[350px]   ">
                    <h3 className="text-[32px] font-extrabold">Login</h3>
                    <p className="text-[16px] text-[#262626] opacity-75">Let’s build something greate</p>
                    <div className="mt-6 flex-col ">
                        <label htmlFor="email" className="text-[18px] font-semibold">
                            Email
                            <br/>
                        </label>
                        <input id="email" name="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="text-[16px] p-1 border-2 rounded-md w-full mt-1  focus:border-blue-800 "/>

                        <label htmlFor="password" className="text-[18px] font-semibold ">
                            Password
                            <br/>
                        </label>
                        <input id="password" name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-[16px] p-1 border-2 rounded-md w-full mt-2 focus:border-blue-800"/>
                    </div>
                    <div className="mt-2 flex justify-end">
                        <Link to="/frgpwd" className="text-[14px] hover:cursor-pointer hover:text-blue-700 mb-1" >Forgot Password ?</Link>
                    </div>
                    <button className="py-2 w-full bg-blue-800 rounded-md hover:bg-blue-950 text-white font-semibold" onClick={handleSubmit}>
                        Login
                    </button>
                    <div className=" flex justify-center items-center gap-2 my-3 text-[12px] ">
                        <hr className="flex-1"/>
                        <p className="opacity-75">Or</p>
                        <hr className="flex-1"/>
                    </div>
                    <Link to="/Signup">
                    <button className="py-2 w-full bg-white border-2 rounded-md hover:bg-blue-950 text-[#525252] hover:text-white font-semibold">
                        Register now
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>
    </div> );
}
 
export default Login;