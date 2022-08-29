import React, { createContext, useState } from "react";

const AppContext = createContext();


const meals = [
    {
        id: 'm1',
        name: 'catlesi',
        description: 'tasty yummy potata-like flesh',
        price: 250 
    },
    {
        id: 'm2',
        name: 'Mahamri',
        description: 'tasty yummy potata-like flesh',
        price:  350 
    },
    {
        id: 'm3',
        name: 'Kaimati',
        description: 'tasty yummy potata-like flesh',
        price:  200 
    },
    {
        id: 'm4',
        name: 'Vitumbua',
        description: 'tasty yummy potata-like flesh',
        price:  150 
    },
    {
        id: 'm4',
        name: 'samosa',
        description: 'tasty yummy potata-like flesh',
        price:  150 
    },
    {
        id: 'm5',
        name: 'smokie',
        description: 'tasty yummy potata-like flesh',
        price:  100 
    },
    {
        id: 'm6',
        name: 'pizza',
        description: 'tasty yummy potata-like flesh',
        price:  600 
    },
    {
        id: 'm7',
        name: 'kebab',
        description: 'tasty yummy potata-like flesh',
        price:  150 
    },
    {
        id: 'm8',
        name: 'spagetti',
        description: 'tasty yummy potata-like flesh',
        price: 250 
    },
    {
        id: 'm9',
        name: 'Omena',
        description: 'tasty yummy potata-like flesh',
        price:  450 
    },
]
const AppProvider = ({children}) => {
   const [isSidebarOpen, setisSidebarOpen] = useState(false);
   const [mealsAvailable, setMealsAvailable] = useState(meals);

   const openSidebar = () => {
    setisSidebarOpen(true);
   }

   const closeSidebar = () => {
    setisSidebarOpen(false);
   }



    return <AppContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar, mealsAvailable, setMealsAvailable}}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}