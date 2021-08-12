
import {
    ON_ERROR,
    ON_PRODUCTS,
    ON_SUCCESS_GET_PRODUCT,
    ON_SUCCESS_GET_PRODUCTS,
    ON_SUCCESS_DELETE_PRODUCT,
    ON_SUCCESS_UPDATE_PRODUCT,
} from '../types/products';
import { getSession } from '../herlpers/session';
import axios from 'axios';
import { showError } from '../herlpers/alert';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export function getProducts(){
    return async (dispatch) => {
        dispatch(onProducts());
        try {
            const token = getSession('token');
            var config = {
                method: 'get',
                url: baseURL + "/api/products",
                headers: { 
                  'Authorization': 'Bearer '+token,
                }
            };
            const response = await axios(config);
            dispatch(onSuccess(response.data));
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Hubo un error al cargar los productos...');
        }
    }
}

export function getProduct(id){
    return async (dispatch) => {
        dispatch(onProducts());
        try {
            const token = getSession('token');
            var config = {
                method: 'get',
                url: baseURL + "/api/products/"+id,
                headers: { 
                  'Authorization': 'Bearer '+token,
                }
            };
            const response = await axios(config)
            dispatch(onSuccessGetProduct(response.data))
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Hubo un error al cargar el producto...');
        }
    }
}

export function changeProductStatus(id,nav){
    return async (dispatch) => {
        dispatch(onProducts())
        try {
            const token = getSession('token');
            var config = {
                method: 'post',
                url: baseURL + "/api/products/"+id+"/delete",
                headers: { 
                  'Authorization': 'Bearer '+token,
                }
            };
            const response = await axios(config);
            dispatch(onSuccessDeleteProduct(response.data))
            nav.push('/products')
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'El producto no se pudo actualizar, intentalo más tarde...');
        }
    }
}

export const updateProductPrice = (product, price, nav) => {
    return async (dispatch) => {
        dispatch(onProducts())
        try {
            const token = getSession('token');
            var config = {
                method: 'post',
                url: baseURL + "/api/products/"+product.objectId+"/update",
                headers: { 
                  'Authorization': 'Bearer '+token,
                },
                data: {
                    name: product.name,
                    price: +price,
                    brand: product.brand,
                    url: product.url,
                    tag: product.tag,
                }
            };
            const response = await axios(config);
            dispatch(onSuccessUpdateProduct(response.data))
            nav.push('/products')
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Por el momento no pudimos actualizar el precio del producto intentalo mas tarde...');
        }
    }
}


const onProducts = () => ({
    type: ON_PRODUCTS
})

const onSuccess= response => ({
    type: ON_SUCCESS_GET_PRODUCTS,
    payload: response
})

const onError = (error) => ({
    type: ON_ERROR,
    payload: error
})

const onSuccessGetProduct = response => ({
    type: ON_SUCCESS_GET_PRODUCT,
    payload: response
});

const onSuccessDeleteProduct = response => ({
    type: ON_SUCCESS_DELETE_PRODUCT,
})

const onSuccessUpdateProduct = response => ({
    type: ON_SUCCESS_UPDATE_PRODUCT,
})