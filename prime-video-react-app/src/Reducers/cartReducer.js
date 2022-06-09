
const cartReducer = (state = {}, action) => {
  console.log('Inside cartReducer');
  switch(action.type){
    case 'ADD_TO_CART':
      // Immutability in JS
      return {  
        ...state,
        cartItems: [ 
              ...state.cartItems, 
              { 
                ...action.payload
              }
            ]
        };
    
    default:
      return state; 
  }
  
}

export default cartReducer;