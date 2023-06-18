import { useContext } from "react"
import { EditCardContext } from "../context/EditCard"



export const useEditCardContext = ()=>{
	const context = useContext(EditCardContext)
	if(!context){
		throw Error('useAuthContext must be used insid an authContextProvider')
	}
	return context  
}