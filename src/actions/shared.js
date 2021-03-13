import { setAuthedUser } from './authedUser';
import { receiveTodos } from './todo';
import {showLoading, hideLoading} from 'react-redux-loading';
import { _login } from '../utils/api/user'

export const handleLogin = (username, password) => {
    return async (dispatch) => {
        dispatch(showLoading());
        console.log('HERE')
        try {
            const temp = await _login(username, password);
            console.log('temp:::', temp)
        } catch (e) {
            console.log('Error:::', e)
        }
        // dispatch(setAuthedUser(null));
        // dispatch(receiveTodos([]));
    }
}

