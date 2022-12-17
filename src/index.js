import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";

import './index.css'

import { Provider } from "react-redux";
import { createStore } from "redux";



const initialStarte = 0;
const reducer = (state = initialStarte, action) => {
  switch(action.type){
    case 'plus' :
      return state + 1
    case 'plusRndm':
      return state + action.num
    case 'minus' :
      return state > 0 ? state - 1 : state
    case 'minusRndm' :
      return  state - action.num > 0 ? state - action.num : state
    case 'reset' :
      return 0
  }
  return state
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);