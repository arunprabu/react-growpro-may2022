/*
  Reducer
  --
    * is a fn that receives state and action as args 
    * it must return state 
    * action is an obj 
      * it will have two properties 
      * one is type of action (mandatory) and another one is payload (optional)

*/

const todoReducer = (state = [], action) => {
  debugger;

  switch(action.type){
    case 'ADD_TODO':
      return [ ...state, { id: new Date(), title: action.payload }];
    
    default: 
      return state;
  }

}

export default todoReducer;