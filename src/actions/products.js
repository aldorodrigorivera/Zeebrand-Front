
import {
    ON_ERROR,
    ON_PRODUCTS,
    ON_SUCCESS_GET_PRODUCT,
    ON_SUCCESS_GET_PRODUCTS,
    ON_SUCCESS_DELETE_PRODUCT,
    ON_SUCCESS_UPDATE_PRODUCT,
    ON_SUCCESS_INSERT_PRODUCT
} from '../types/products';
import { getSession } from '../herlpers/session';
import axios from 'axios';
import { showError } from '../herlpers/alert';
import { sessionError } from '../herlpers/session';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export function getProducts(nav){
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
            sessionError(nav,error);
        }
    }
}

export function getProduct(id,nav){
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
            sessionError(nav,error);
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
            sessionError(nav,error);
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
            sessionError(nav,error);
        }
    }
}

export const createNewProduct = (form, nav) => {
    return async (dispatch) => {
        dispatch(onProducts())
        try {
            const token = getSession('token');
            var config = {
                method: 'post',
                url: baseURL + "/api/products",
                headers: { 
                  'Authorization': 'Bearer '+token,
                },
                data: {
                    name: form.name,
                    price: +form.price,
                    brand: form.brand,
                    url: form.url,
                    tag: [],
                }
            };
            const response = await axios(config);
            dispatch(onSuccessInsertProduct(response.data))
            nav.push('/products')
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Por el momento no pudimos crear el producto intentalo mas tarde...');
            sessionError(nav,error);
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

const onSuccessDeleteProduct = () => ({
    type: ON_SUCCESS_DELETE_PRODUCT,
})

const onSuccessUpdateProduct = () => ({
    type: ON_SUCCESS_UPDATE_PRODUCT,
})

const onSuccessInsertProduct = () => ({
    type: ON_SUCCESS_INSERT_PRODUCT,
})