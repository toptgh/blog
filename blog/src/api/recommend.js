import jsonp from '../js/jsonp'
import { commonParams, options } from './config'
export function getRecommend(qqnum) {
    const url = 'http://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg';
    const data = Object.assign({}, commonParams, {
        uins: qqnum,
    })
    return jsonp(url, data, options)
}