import {
    ON_PRODUCTS,
    ON_ERROR,
    ON_SUCCESS_GET_PRODUCT,
    ON_SUCCESS_GET_PRODUCTS,
    ON_SUCCESS_DELETE_PRODUCT,
    ON_SUCCESS_UPDATE_PRODUCT,
}from '../types/products';

const initialState = {
    products:[],
    loading:true,
    error:null,
    product:null,
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
        case ON_SUCCESS_GET_PRODUCT:
            return {
                ...state,
                loading:false,
                product:action.payload,
            }
        case ON_SUCCESS_DELETE_PRODUCT, ON_SUCCESS_UPDATE_PRODUCT:
            return {
                ...state,
                loading:false,
                product:null,
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