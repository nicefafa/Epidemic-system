import service from "../utils/axios"

/**
 * 登录接口
 * 
 */
export function Login(data) {
    console.log("login.js")
    console.log(data)
    return service.request({
        method: 'post',
        url: '/boss/loging/',
        data: data
    })
}

   