import { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import { Navigate } from "react-router-dom";


const RequireAuth = ({children}) => {
    const {user} = useAuthContext()
    if(!user) 
    {
       return( <Navigate to="/login" />)
    }
    else{
        return ( <>{children}</> );
    }
    
}
 
export default RequireAuth;