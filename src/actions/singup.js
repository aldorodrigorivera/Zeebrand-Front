
import {
    ON_SING_UP,
    ON_SUCCESS_SING_UP,
    ON_ERROR,
    ON_RETRIEVE_SESSION
} from '../types/singup';
import { saveSession } from '../herlpers/session';
import axios from 'axios';
import { showError } from '../herlpers/alert';

export function singup(form,nav){
    return async (dispatch) => {
        dispatch(onLogin());
        try {
            const { user, password, name, phone } = form;
            const response = await axios
            .post(process.env.REACT_APP_API_BASE_URL + "/auth/singup",{
                email: user,
                password,
                name,
                phone,
            });
            dispatch(onSuccess(response.data));
            saveSession(response.data);
            nav.push('/products')
        } catch (error) {
            dispatch(onError(error));
            showError('Ups', 'Verifica que tu información sea correcta.');
        }
    }
}

export function setUserSession(user) {
    return async (dispatch) => {
        dispatch(retrieveSession(user));
    }
}


const onLogin = () => ({
    type: ON_SING_UP
})

const onSuccess= (response) => ({
    type: ON_SUCCESS_SING_UP,
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