import { useContext } from "react"
import { NewCardContext } from "../context/NewCard"



export const useNewCardContext = ()=>{
	const context = useContext(NewCardContext)
	if(!context){
		throw Error('useAuthContext must be used insid an authContextProvider')
	}
	return context  
}