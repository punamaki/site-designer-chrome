import { useState, useReducer } from "react";
import createUseContext from "constate"; // State Context Object Creator
import { IState } from "../types/state";
import reducer from '../reducers';
import getActions from '../actions';


// Define your custom hook that contains your state, dispatcher and actions
function useStore() {
  const initialState:IState = {
    scripts:[],
    designs:[]
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = getActions(dispatch);
  return {state, actions}
}

// Step 2: Declare your context state object to share the state with other components
export const UseStoreContext = createUseContext(useStore);