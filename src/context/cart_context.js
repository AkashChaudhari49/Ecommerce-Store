import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("thapaCart");
    if (localCartData ===[]){
        return[];
    }else{
        return JSON.parse(localCartData);
    }
};

const initialState = {
    //cart:[],
    cart: getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee: 500,
}

 const CartProvider = ({ children}) =>{

    const[state, dispatch] = useReducer(reducer, initialState)

    const addToCart=(id, color, amount, product)=>{
        dispatch({type:"ADD_TO_CART", payload:{id, color, amount, product}})
    };

    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM", payload: id});
    }

    useEffect(()=>{
        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    },[state.cart])

    return (
     <CartContext.Provider value={{...state, addToCart, removeItem }}>{children}</CartContext.Provider>
    )
 };

 const useCartContext = () => {
    return useContext(CartContext);
 };

 export {CartProvider, useCartContext};