import { createContext, useReducer } from  "react";
import cartReducer from "../Reducers/cartReducer";

// creating context
export const CartContext = createContext();

// exposing the Context Provider thru HOC 
const Context = ( props ) => {
  console.log(props.children);
  console.log('Inside Context');
  const [cartState, cartDispatch ] = useReducer(cartReducer, { cartItems: [] }); 

  return(
    // We need to provide the value -- will do after creating reducer 
    <CartContext.Provider value={ {cartState, cartDispatch } }>
      {props.children}
    </CartContext.Provider>
  )
}

export default Context; // exporting HOC

