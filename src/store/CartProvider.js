import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0 
    
};
 
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const newItems = state.items.concat(action.item);
        const newTotal = state.totalAmount + state.action.price* state.action.amount;

    return {
        items: newItems,
        totalAmount: newTotal
   }
    }
    
}

const CartProvider = (props) => {
    const [cartState , dispatch] = useReducer(cartReducer , defaultCartState)

    const cartContext =   {
            items: [],
            totalAmount: 0 ,
            addItem: () => {},
            removeItem: () => {}
        };
      
    
    

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}

        </CartContext.Provider>
    );
}



export default CartProvider