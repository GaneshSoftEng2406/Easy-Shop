import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'
const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData=localStorage.getItem("ganeshCart");
    if(localCartData===[]){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}
const intialState = {
    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000,


};

const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState);

    const addToCart=(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
    };
    // increament and decreament the product - +
    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREAMENT", payload:id})
    }

    const setIncrement = (id) =>{
        dispatch({type:"SET_INCREMENT", payload:id})
    }



    // to remove the individual item from the cart
    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }
    // to clear the cart
    const clearCart = () =>{
        dispatch({type:"CLEAR_CART"})
    }
    // to add the data in local storage 

    useEffect(()=>{
        localStorage.setItem("ganeshCart", JSON.stringify(state.cart));
    },[state.cart]);



    return(
    <CartContext.Provider
     value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
        }}>
        {children}
        </CartContext.Provider>
    );
};
const useCartContext = () =>{
    return useContext(CartContext)

}
export {CartProvider,useCartContext};