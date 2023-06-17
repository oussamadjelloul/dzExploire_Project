import {createContext , useState} from 'react'

export const NewCardContext = createContext()

export const NewCardContextProvider = ({children})=>{
    const [NewCard,setNewCard] =useState({})
    const addCard = (data)=>{
        setNewCard(data)
        console.log(NewCard);
    } 
return(
<NewCardContext.Provider value={{NewCard,addCard}}>
{children}
</NewCardContext.Provider>)
}