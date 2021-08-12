import {
    ON_PRODUCTS,
    ON_SUCCESS_GET_PRODUCTS,
    ON_ERROR,
}from '../types/products';

const initialState = {
    products:[],
    loading:true,
    error:null
}

export default function singUpReducer (state = initialState, action) {
    switch(action.type){
        case ON_PRODUCTS:
            return {
                ...state,
                loading:true,
                error:null
            }
        case ON_SUCCESS_GET_PRODUCTS:
            return {
                ...state,
                loading:false,
                products:action.payload,
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