import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import signup from './signup';
import logout from './logout';

const rootReducer = combineReducers({routing: routerReducer, login, signup, logout})

export default rootReducer