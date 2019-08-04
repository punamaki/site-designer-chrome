import { IState } from "../types/state";

const reducer = (state:IState, action:any):IState => {
  function scripts(state:any[], action:any) {
    switch (action.type) {
      case "ADD_SCRIPTS":
        return action.payload;
      case "CLEAR_SCRIPTS":
        return [];
      default:
        return state;
    }
  }
  function designs(state:any[], action:any) {
    switch (action.type) {
      case "ADD_DESIGNS":
        return action.payload;
      case "CLEAR_DESIGNS":
        return [];
      default:
        return state;
    }
  }
  console.log('%c ACTION: '+action.type, 'color: green');
  console.log(state);
  const returnVal= {scripts:scripts(state.scripts, action), designs:designs(state.designs, action)};
  console.log(returnVal);


  return returnVal;
  };
  export default reducer;