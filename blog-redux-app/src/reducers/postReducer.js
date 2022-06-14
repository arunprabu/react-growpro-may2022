/* Step 3: Setup Reducer for the store
  What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it's parameters and returns the new state.
*/

// step 8: Let's setup the action types in switch case
import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 
const postReducer = (state = [], action) => {
  // Step 8.1 
  //now it is time to understand the concept called 'Actions'
  //What are Actions? 
    //Actions are plain Javascript objects with a type property and an optional payload
    //This type property describes the event that is taking place 
    //in the application. 

  switch(action.type) {
    case ADD_POST:
      //Step 8.2 - clarification - of the following code, 
      //action.type = Event and action.payload = Sumbitted Form Data/response from the backend upon Add Post
      return [...state, action.payload];
    
    case GET_POSTS: 
      return state; // will be implemented soon

    case GET_POST_BY_ID: 
      return state; // not implemented yet

    case EDIT_POST: 
      return state;  // not implemented yet

    case DELETE_POST:
      return state; // not implemented yet
      
    default:
      return state;
  }
}
export default postReducer;