import {
    ON_SING_UP,
    ON_SUCCESS_SING_UP,
    ON_ERROR,
}from '../types/singup';

const initialState = {
    user:null,
    loading:true,
    error:null
}

export default function singUpReducer (state = initialState, action) {
    switch(action.type){
        case ON_SING_UP:
            return {
                ...state,
                loading:true,
                error:null
            }
        case ON_SUCCESS_SING_UP:
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