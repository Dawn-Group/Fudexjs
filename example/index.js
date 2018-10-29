import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from '../src/index'
import { counter, dcounter } from './reducer'

let reducer = combineReducers({
  counter: counter,
  dcounter: dcounter
})

let store = createStore(reducer)

const root = document.createElement("div")
document.body.appendChild(root)

const render = () => ReactDOM.render(
  <div>
    <p>{store.getState() ? store.getState().counter : 0}</p>
    <button onClick={() => {
      store.dispatch({ type: 'INCREAMENT' })
    }}>Increase</button>
  </div>,
  root
)

render()
store.subscribe(render)
