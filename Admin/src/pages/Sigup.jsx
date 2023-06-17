import { useState } from "react";
import login from "../assets/Login/Login.png"
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import { useAuthContext } from "../hooks/useAuthContext";

const Signup = () => {
    function verifyEmail(email) {
        // Email pattern regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Test the email against the pattern
        return emailPattern.test(email);
      }
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [Name,setName]=useState('')
    const {user}=useAuthContext()
    const handleSubmit =()=>{
        
        if(email==='' || password==='' || Name==='')
        {
            toast.error('Please Fill All the fields')
        }
        if(!verifyEmail(email))
        {
            toast.error('Please Enter A valid Email')
        }
        else{
            console.log(user.token);
            fetch('http://localhost:5000/newUser', { method : 'POST' , 
            headers : {"Content-Type" : "application/json" ,
            'accestoken' : user.token,
        },  //type of data
            

            body : JSON.stringify({
                user_name : Name , 
                email,
                password
            }) 
            } )
            .then((res)=>{ 
            if(!res.ok)
            {
                throw Error ('the email is already used')
            }
            else{
                toast.success('the user is add successfully ')
            }

            } )
            .catch(err=>{  toast.error(err.message)})
        }
    }

    return ( 
    <div id="login" className="h-screen w-full flex justify-center items-center">
        <div className="flex-col justify-center items-center">
            <div className="flex justify-center items-start shadow-md bg-white rounded-lg  ">
                <img src={login} alt="login"  className="w-[350px]  md:block hidden    rounded-l-lg"/>
                <div className="p-4   w-[350px]   ">
                    <h3 className="text-[32px] font-extrabold">Add User</h3>
                    <p className="text-[16px] text-[#262626] opacity-75">Let’s build something greate</p>
                    <div className="mt-6 flex-col ">
                    <label htmlFor="name" className="text-[18px] font-semibold">
                            Full Name
                            <br/>
                        </label>
                        <input id="name" name="name" type="text"  value={Name} onChange={(e)=>{setName(e.target.value)}} className="text-[16px] p-1 border-2 rounded-md w-full mt-1  focus:border-blue-800 "/>
                        <label htmlFor="email" className="text-[18px] font-semibold">
                            Email
                            <br/>
                        </label>
                        <input id="email" name="email" type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} className="text-[16px] p-1 border-2 rounded-md w-full mt-1  focus:border-blue-800 "/>

                        <label htmlFor="password" className="text-[18px] font-semibold ">
                            Password
                            <br/>
                        </label>
                        <input id="password" name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-[16px] p-1 border-2 rounded-md w-full mt-2 focus:border-blue-800"/>
                    </div>
                    <button onClick={handleSubmit} className="py-2 mt-2 w-full bg-blue-800 rounded-md hover:bg-blue-950 text-white font-semibold">
                        Add User
                    </button>
                    <div className=" flex justify-center items-center gap-2 my-3 text-[12px] ">
                        <hr className="flex-1"/>
                        <p className="opacity-75">Or</p>
                        <hr className="flex-1"/>
                    </div>
                    <Link to="/">
                    <button className="py-2 w-full bg-white border-2 rounded-md hover:bg-blue-950 text-[#525252] hover:text-white font-semibold">
                        Back to dashboard
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>
    </div> );
}
 
export default Signup;