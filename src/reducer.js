import { combineReducers } from "redux";
import loginReducer from './reducers/login';
import singUpReducer from './reducers/singup';
import productReducer from './reducers/products';

export default combineReducers({
    loginReducer,
    singUpReducer,
    productReducer,
})