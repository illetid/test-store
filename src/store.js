import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
// const stringEnhancer = createStore => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = action => {
//     if (typeof action === "string") {
//       return originalDispatch({
//         type: action
//       });
//     }
//     return originalDispatch(action);
//   };
//   return store;
// };
const strMid = store => dispatch => action => {
  if (typeof action === "string") {
    return dispatch({
      type: action
    });
  }
  return dispatch(action);
};
const logMid = store => dispatch => action => {
  console.log("LOG", action.type);
  return dispatch(action);
};
// const logEnhancer = createStore => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = action => {
//     console.log("LOG", action.type);

//     return originalDispatch(action);
//   };
//   return store;
// };
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, strMid, logMid)
);
const myAction = dispatch => {
  setTimeout(() => dispatch({ type: "DELAYED_ACTION" }), 2000);
};
console.log("AAAAAAAAAAAAAAAAAAAa");

store.dispatch("HELL1O");
store.dispatch(myAction);
export default store;
