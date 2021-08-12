import axios from 'axios'
import { getSession } from '../herlpers/session'
export const initializeAxios = () => {
    const token = getSession('token');
    axios.create({
        baseURL: 'https://us-central1-zebrands-rivera.cloudfunctions.net/app',
        headers: { Authorization: 'Bearer ' + token },
    });
}