import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productReducers } from './Reducer.js'

const reducer = combineReducers({
    products :productReducers
})

let initialState = {
    products: {
      AllProducts: localStorage.getItem("AllProducts")
        ? JSON.parse(localStorage.getItem("AllProducts"))
        : [],
     
    },
  };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;