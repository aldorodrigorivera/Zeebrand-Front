import { combineReducers } from "redux";
import loginReducer from './reducers/login';
import singUpReducer from './reducers/singup';

export default combineReducers({
    loginReducer,
    singUpReducer,
})