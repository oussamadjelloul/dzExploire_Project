import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

import {  toast } from 'react-toastify';

export const useLogin =()=>{
	const {dispatch} =  useAuthContext()
    const login = async (email,password)=>{

        try {
            
        const response = await fetch('http://localhost:5000/login', { method : 'POST' , 
        headers : {"Content-Type" : "application/json" },  
        body : JSON.stringify({email:email,password:password}) 
        } ) 
		const json = await response.json()
		if(!response.ok){
            throw Error 		}
		if(response.ok){ 
			localStorage.setItem('user',JSON.stringify(json))
			dispatch({type:'LOGIN' ,payload : json })
        }
        } catch (error) {
            toast.error("Your Email or password are not valide")
        }
		
}


return{login}
}