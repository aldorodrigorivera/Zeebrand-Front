
import {
    ON_LOGIN,
    ON_SUCCESS_LOGIN,
    ON_ERROR,
    ON_RETRIEVE_SESSION
} from '../types/user';
import { initializeAxios } from '../herlpers/axios';
import { saveSession } from '../herlpers/session';
import axios from 'axios';

export function login(form,nav){
    return async (dispatch) => {
        dispatch(onLogin());
        try {
            initializeAxios();
            const { user, password } = form;
            const response = await axios
            .post(process.env.REACT_APP_API_BASE_URL + "/auth/login",{
                email: user,
                password,
                audience: process.env.REACT_APP_AUDIENCE
            });
            dispatch(onSuccess(response.data));
            saveSession(response.data);
        } catch (error) {
            dispatch(onError(error));
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