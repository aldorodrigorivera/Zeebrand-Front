
import {
    ON_LOGIN,
    ON_SUCCESS_LOGIN,
    ON_ERROR,
    ON_RETRIEVE_SESSION
} from '../types/login';
import { saveSession } from '../herlpers/session';
import axios from 'axios';
import { showError } from '../herlpers/alert';

export function login(form,nav){
    return async (dispatch) => {
        dispatch(onLogin());
        try {
            const { user, password } = form;
            const response = await axios
            .post(process.env.REACT_APP_API_BASE_URL + "/auth/login",{
                email: user,
                password,
                audience: process.env.REACT_APP_AUDIENCE
            });
            dispatch(onSuccess(response.data));
            saveSession(response.data);
            nav.push('/')
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Tus credenciales son incorrectas');
        }
    }
}

export function setUserSession(user) {
    return async (dispatch) => {
        dispatch(retrieveSession(user));
    }
}


const onLogin = () => ({
    type: ON_LOGIN
})

const onSuccess= (response) => ({
    type: ON_SUCCESS_LOGIN,
    payload: response
})

const retrieveSession = user => ({
    type: ON_RETRIEVE_SESSION,
    payload:user
})

const onError = (error) => ({
    type: ON_ERROR,
    payload: error
})