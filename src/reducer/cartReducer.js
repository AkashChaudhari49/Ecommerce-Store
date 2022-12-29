
const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
       console.log(product);


       let cartProduct;

       cartProduct = {
         id: id + color,
         name: product.name,
         color,
         amount,
         image: product.image[0].url,
         price: product.price,
         max: product.stock,
       };
   
       return {
         ...state,
         cart: [...state.cart, cartProduct],
       };
     }

    if(action.type === "REMOVE_ITEM" ){
      console.log(action.payload);
      let id = action.payload;
      let upDateCart= state.cart.filter((currELe) =>{
        return currELe.id !== id;
    })
      return{
        cart:upDateCart,
      }
        
  }
    return state;
};

export default cartReducer;