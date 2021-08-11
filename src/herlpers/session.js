export const processUser = user => {
    return {
        id: user.id,
        email: user.get('email'),
        token: user.get('sessionToken'),
        username: user.get('username'),
        active: user.get('active')
    }
}

export function saveSession(user){
    window.localStorage.setItem('session', JSON.stringify(user));
    window.localStorage.setItem('token', JSON.stringify(user.token));
}

export function getSession(key){
    return JSON.parse(window.localStorage.getItem(key));
}

export function deleteSession(){
    window.localStorage.clear();
}