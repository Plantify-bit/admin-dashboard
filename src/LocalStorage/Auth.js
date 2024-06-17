export function getAuth() {
    const authdata =  JSON.parse(localStorage.getItem('auth'));
    if(authdata){
        return authdata;
    } else {
        return {
            "isAuth": false,
            "token": "",
        };
    }
}

export function setAuth(token) {
    const data = {
        "isAuth": true,
        "token": token,
    };
    localStorage.setItem('auth', JSON.stringify(data));
}

export function removeAuth() {
    localStorage.removeItem('auth');
}
