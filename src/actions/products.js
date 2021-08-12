
import {
    ON_PRODUCTS,
    ON_SUCCESS_GET_PRODUCTS,
    ON_ERROR,
} from '../types/products';
import { getSession } from '../herlpers/session';
import axios from 'axios';
import { showError } from '../herlpers/alert';

export function getProducts(){
    return async (dispatch) => {
        dispatch(onProducts());
        try {
            const token = getSession('token');
            const response = await axios
            .get(process.env.REACT_APP_API_BASE_URL + "/api/products",{
                headers: { 'Authorization': 'Bearer ' + token },
            });
            dispatch(onSuccess(response.data));
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Hubo un error al cargar los productos...');
        }
    }
}


const onProducts = () => ({
    type: ON_PRODUCTS
})

const onSuccess= (response) => ({
    type: ON_SUCCESS_GET_PRODUCTS,
    payload: response
})

const onError = (error) => ({
    type: ON_ERROR,
    payload: error
})