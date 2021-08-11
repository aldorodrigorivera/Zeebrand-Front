import swal from 'sweetalert';

export function validateLogin(form){
    const {user,password} = form;
    if(user.trim()=== ''){
        swal("Hey!", "Escribe un correo");
        return false;
    }
    if(password.trim() === ''){
        swal("Hey!", "Escribe una contraseña");
        return false;
    }
    return true
}