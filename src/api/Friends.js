import request from '../http/request'
export function AtriclesListAll(query) {
    return request({
        url: '/article/list',
        method: 'get',
        params: query
    })
}
export function GetArticleById(query) {
    return request({
        url: '/article/detail',
        method: 'get',
        params: query
    })
}

export function UpdateAtricle(data) {
    return request({
        url: '/article/update',
        method: 'post',
        data
    })
}
