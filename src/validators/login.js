import { showInfo } from '../herlpers/alert';

export function validate(form){
    const {user,password} = form;
    if(user.trim()=== ''){
        showInfo('Hey!', 'Escribe un correo')
        return false;
    }
    if(password.trim() === ''){
        showInfo('Hey!', 'Escribe una contraseña')
        return false;
    }
    return true
}