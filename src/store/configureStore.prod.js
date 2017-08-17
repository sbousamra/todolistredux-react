import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

function configureStore(initialState) {
  const middleware = applyMiddleware(routerMiddleware(browserHistory), thunk)
  return createStore(rootReducer, initialState, middleware)
}

export default configureStore;