import cookie from "js-cookie";

export function getToken(){
    return cookie.get('admin-tokne')
}

export function removeToken(){
    return cookie.remove('admin-tokne') ;
}