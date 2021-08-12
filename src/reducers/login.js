import {
    ON_LOGIN,
    ON_SUCCESS_LOGIN,
    ON_ERROR,
}from '../types/login';

const initialState = {
    user:null,
    loading:false,
    error:null
}

export default function loginReducer (state = initialState, action) {
    switch(action.type){
        case ON_LOGIN:
            return {
                ...state,
                loading:true,
                error:null
            }
        case ON_SUCCESS_LOGIN:
            return {
                ...state,
                loading:false,
                user:action.payload,
            }
        case ON_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return {
                ...state
            }
    }
}