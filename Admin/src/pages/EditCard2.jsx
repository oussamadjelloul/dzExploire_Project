import { useEditCardContext } from "../hooks/useEditCardContext";

const EditCard2 = () => {
    const  {EditCard} = useEditCardContext()
    console.log(EditCard);

    return ( <div>
        {EditCard.place_title}
    </div> );
}
 
export default EditCard2;