import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import DevTools from '../containers/devTools';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

function configureStore(initialState) {
  const middleware = applyMiddleware(routerMiddleware(browserHistory), thunk)
  const enhancer = compose(middleware, DevTools.instrument())
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}

export default configureStore