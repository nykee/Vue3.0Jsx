import request from '../http/request'
export function queryPhrases(query) {
    return request({
        url: '/Phrase/queryPhraseInit',
        method: 'get',
        params: query
    })
}

