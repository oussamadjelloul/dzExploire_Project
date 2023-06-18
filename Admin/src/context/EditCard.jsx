import {createContext , useState} from 'react'

export const EditCardContext = createContext()

export const EditCardContextProvider = ({children})=>{
    const [EditCard,setEditCard] =useState({})
    const modifyCard = (data)=>{
        //console.log("sssss");
        setEditCard(data)
    } 
return(
<EditCardContext.Provider value={{EditCard,modifyCard}}>
{children}
</EditCardContext.Provider>)
}