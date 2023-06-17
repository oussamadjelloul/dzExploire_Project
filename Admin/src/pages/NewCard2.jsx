import { useEffect } from "react";
import { useNewCardContext } from "../hooks/useNewCardContext";

const NewCard2 = () => {
    const  {NewCard} = useNewCardContext()

useEffect(()=>{
    console.log(NewCard);

},[])
    

    return (  <>
    {NewCard.place_title}
    </>);
}
 
export default NewCard2;<></>