import React, { useState } from "react";
import UserContext from "./UserContext";


//The "Manager" -> Provider 
export default function UserContextProvider({children}){

    const [user , setUser] = useState({}) // <- manger create the actual global variable

    return(
        <UserContext.Provider value={{user , setUser}}> 
            {/* // "Anyone inside me can access user and the function setUser." */}
            {children}
        </UserContext.Provider>
    )
}