import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {createStore} from 'redux';
import actions from './components/actions';

const store = createStore(actions)

const render = () => ReactDOM.render(
  <App 
  data={store.getState()}
  add={(text) => store.dispatch({type: "ADD", text: text})}
  toggle={(todo) => store.dispatch({type: "TOGGLE", text: todo})}
  />,
  document.getElementById("root")
)

render()
store.subscribe(render)