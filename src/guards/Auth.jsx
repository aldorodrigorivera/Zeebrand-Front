import { useSelector, useDispatch } from 'react-redux';
import { setUserSession } from '../actions/login';
import { getSession, deleteSession } from '../herlpers/session';
import { useHistory } from 'react-router-dom';

export default function Auth({children}){
    const nav = useHistory();
    const dispatch = useDispatch();
    const session = getSession('session');
    const { user } = useSelector(state => state.loginReducer);

    if(user === null){
        if(session !== null){
            dispatch(setUserSession(session))
            return children;
        }else{
            deleteSession()
            nav.push('/');
            return null;
        }
    }else{
        return children;
    }
    
}