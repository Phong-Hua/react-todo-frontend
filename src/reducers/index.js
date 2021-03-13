import { combineReducers } from 'redux';
import authedUser from './authedUser';
import todo from './todo';

export default combineReducers({authedUser, todo})