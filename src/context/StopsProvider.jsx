import React from 'react'
import { useState } from "react";
import { StopsContext } from './StopsContext';


export const StopsProvider = ({children}) => {
  const [stops, setStops] = useState([]);
  const [activeOptionMenu, setActiveOptionMenu] = useState("Solicitar servicio");
  
  
 

  return (
    <StopsContext.Provider value={{stops,setStops,activeOptionMenu,setActiveOptionMenu}}>
        {children}
    </StopsContext.Provider>
  )
}
