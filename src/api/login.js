import service from "../utils/axios"

/**
 * 登录接口
 * 
 */
export function Login(data) {
    return service.request({
        method: 'post',
        url: '/login/',
        data: data
    })
}


