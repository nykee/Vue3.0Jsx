import request from '../http/request'
export function Login(data) {
    return request({
        url: 'login',
        method: 'post',
        data
    })
}
export function Logout(data) {
    return request({
        url: 'logout',
        method: 'post',
        data
    })
}