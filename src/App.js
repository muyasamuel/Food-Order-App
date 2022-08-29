
import Header from "./components/Header";
import OurMealsDetails from "./components/About us/OurMealsDetails";
import MealList from "./components/Meals/MealList";
import Cart from './components/cart/Cart'
import Categories from './components/Categories'
import { useContext, useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { AppContext } from './store/App-context';




function App() {
  const { isSidebarOpen } = useContext(AppContext)
  const [cartSeen , setCartSeen ] = useState(false);

  useEffect(() => {}, [])

  const showCartHandler = () => {
    setCartSeen(true)
  }

  const hideCartHandler = () => {
    setCartSeen(false)
  }
 




  return (
    <div >
      { cartSeen && <Cart onHideCart={hideCartHandler} />}
     
       <Header onShowCart={showCartHandler}/>
       {isSidebarOpen && <SideBar /> } 
       
       <OurMealsDetails />
       <Categories />
       <MealList />
    </div>
     
    
   
  );
}

export default App;
