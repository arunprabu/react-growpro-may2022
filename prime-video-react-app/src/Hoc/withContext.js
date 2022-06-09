// import React, { useReducer } from "react";
// import { CartContext } from "../Contexts/CartContext";
// import cartReducer from  '../Reducers/cartReducer';

// // HOC 
// const WithContext = (OriginalComponent) => { 

//   return ((props) => {
//     debugger;
//     const [cartState, cartDispatch ] = useReducer(cartReducer, { cart: [] });

//     return(
//       // We need to provide the value -- will do after creating reducer 
//       <CartContext.Provider value={ {cartState, cartDispatch }}>
//         <OriginalComponent>
//           {props.children}
//         </OriginalComponent>
//       </CartContext.Provider>
//     )
//   });
// }

// export default WithContext; // exporting HOC