import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import {createStore, combineReducers} from 'redux';
import * as lodash from 'lodash';

class App extends React.Component {

  constructor() {
    super();
    this.state = ({
      todo: ""
    })
    var id = 0
  }

  render() {

    const mappedTodos = lodash.map(this.props.data, (content, todo) => {
      return (
        <div key={todo}>
          <ul>
            <li onClick={() => this.props.toggle(todo)}>{todo}</li>
          </ul>
        </div>
      )
    })

    return(
      <div>
        <input onChange={(e) => this.setState({todo: e.target.value})}/>
        <button onClick={() => this.props.add(this.state.todo)}> 
          Add Todo 
        </button>
        {mappedTodos}
      </div>
    )
  }
}

export default App;