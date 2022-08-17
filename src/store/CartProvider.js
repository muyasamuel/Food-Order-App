import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0 
    
};
 
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        
        const newTotal = state.totalAmount + action.item.price* action.item.amount;


    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingCartItemIndex];

    let updatedItems;
     if(existingItem){
        const updatedItem = {
            ...existingItem,
            amount: existingItem.amount + action.item.amount
        }
        updatedItems = [...state.items];
        updatedItems[existingItem] = updatedItem
    } else{
        updatedItems = state.items.concat(action.item);
    }

    return {
        items: updatedItems,
        totalAmount: newTotal
   }
    }
    
}

const CartProvider = (props) => {
    const [cartState , dispatch] = useReducer(cartReducer , defaultCartState);

    const addToCart = (item) => {
        dispatch({type: 'ADD' , item: item})

    }

    const cartContext =   {
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addToCart,
            removeItem: (id) => {}
        };
      
    
    

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}

        </CartContext.Provider>
    );
}



export default CartProvider