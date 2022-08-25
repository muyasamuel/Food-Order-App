
import Header from "./components/Header";
import OurMealsDetails from "./components/About us/OurMealsDetails";
import MealList from "./components/Meals/MealList";
import Cart from './components/cart/Cart'
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";




function App() {
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
       <SideBar />
       <OurMealsDetails />
       <MealList />
    </div>
     
    
   
  );
}

export default App;
