import { useDispatch } from 'react-redux';
import { setUserSession } from '../actions/login';
import { getSession, deleteSession } from '../herlpers/session';
import { useHistory } from 'react-router-dom';

export default function Auth({children}){
    const nav = useHistory();
    const dispatch = useDispatch();
    const session = getSession('session');
    console.log("A", session);
    if(session !== null){
        console.log("B",session)
        dispatch(setUserSession(session))
        return children;
    }else{
        console.log("Sesion",session)
        deleteSession()
        nav.push('/');
        return null;
    }
}