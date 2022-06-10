// This is custom hook
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

// writing custom hook 
export const useCartState = () => {
  console.log('Inside useCartState Custom Hook');
  // inside this custom hook we useContext with the above CartContext
  return useContext(CartContext);
}