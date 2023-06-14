import { useContext } from "react"
import { AuthContext } from "../context/Auth"



export const useAuthContext = ()=>{
	const context = useContext(AuthContext)
	if(!context){
		throw Error('useAuthContext must be used insid an authContextProvider')
	}
	return context  
}