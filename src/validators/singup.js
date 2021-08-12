import { showInfo } from '../herlpers/alert';

export function validate(form){
    const validEmail = "/\\S+@\\S+\\.\\S+/";
    
    const {user, password, name, phone} = form;

    if(user.trim()=== '' || validEmail.match(user.trim())){
        showInfo('Hey!', 'Escribe un correo válido')
        return false;
    }
    if(name.trim() === '' || name.length < 2){
        showInfo('Hey!', 'Escribe tu nombre')
        return false;
    }
    if(phone.trim() === '' || name.length < 10 || phone.trim().length > 10){
        showInfo('Hey!', 'Escribe tu celular en 10 caracteres')
        return false;
    }
    if(password.trim() === '' || password.trim().length < 5){
        showInfo('Hey!', 'Escribe una contraseña mayor a 5 caracteres')
        return false;
    }
    return true
}