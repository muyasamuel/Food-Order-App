
import Header from "./components/Header";
import OurMealsDetails from "./components/About us/OurMealsDetails";
import MealList from "./components/Meals/MealList";
import Cart from './components/cart/Cart'
import { useState } from "react";




function App() {
  const [cartSeen , setCartSeen ] = useState(false);

 




  return (
    <div >
      { cartSeen && <Cart />}
     
       <Header />
       <OurMealsDetails />
       <MealList />
    </div>
     
    
   
  );
}

export default App;
