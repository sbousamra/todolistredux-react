import {combineReducers} from 'redux';
import login from './login';
import signup from './signup';
import logout from './logout';

const rootReducer = combineReducers({login, signup, logout})

export default rootReducer