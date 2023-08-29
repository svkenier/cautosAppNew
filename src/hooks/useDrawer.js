import React,{ useState } from 'react'



const useDrawer = () => {

  

    const [openDrawer, setOpenDrawer] = useState(true);

 
   
 

    const handleDrawer = () =>{
        setOpenDrawer(!openDrawer)
        console.log("OD use",openDrawer)
      
       
    }

    const closeDrawer = () =>{
        setOpenDrawer(false)
       
    }

   
  return {
    openDrawer,
    handleDrawer,
    closeDrawer,
  
}

}

export default useDrawer