import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
   const [isSidebarOpen, setisSidebarOpen] = useState(false);

   const openSidebar = () => {
    setisSidebarOpen(true);
   }

   const closeSidebar = () => {
    setisSidebarOpen(false);
   }



    return <AppContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar}}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}