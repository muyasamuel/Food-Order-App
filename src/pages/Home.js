import React from 'react';
import Header from '../components/Header';
import { AppContext } from '../store/App-context';
import { useContext,  useState } from "react";
import Cart from '../components/cart/Cart';
import SideBar from '../components/SideBar';
import OurMealsDetails from '../components/About us/OurMealsDetails';
import MealList from '../components/Meals/MealList';
import Categories from '../components/Categories'





function Home() {
  const { isSidebarOpen } = useContext(AppContext)
  const [cartSeen , setCartSeen ] = useState(false);

  const showCartHandler = () => {
    setCartSeen(true)
  }
  
  const hideCartHandler = () => {
    setCartSeen(false)
  }
  return (
    <div>
       {cartSeen && <Cart onHideCart={hideCartHandler} />}
         <Header onShowCart={showCartHandler}/>
         {isSidebarOpen && <SideBar /> } 

         <OurMealsDetails />
          <Categories />
          <MealList />
    </div>
  )
}

export default Home;