import { showInfo } from '../herlpers/alert';

export function validate(form){
    const {name, price, brand, url} = form;
    if(name.trim()=== ''){
        showInfo('Hey!', 'Escribe un nombre del producto')
        return false;
    }
    if(brand.trim() === ''){
        showInfo('Hey!', 'Escribe la marca del producto')
        return false;
    }
    if(!price || +price <= 100){
        showInfo('Hey!', 'Escribe un precio mayor a $100 MXN')
        return false;
    }
    if(url.trim() === ''){
        showInfo('Hey!', 'Escribe la url de la imagen del producto')
        return false;
    }
    return true
}