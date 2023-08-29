import React from 'react'
import { useState } from "react";
import { StopsContext } from './StopsContext';


export const StopsProvider = ({children}) => {
  const [stops, setStops] = useState([]);
  const [active, setactive] = useState("Solicitar servicio");
  


  return (
    <StopsContext.Provider value={{stops,setStops,active,setactive}}>
        {children}
    </StopsContext.Provider>
  )
}
