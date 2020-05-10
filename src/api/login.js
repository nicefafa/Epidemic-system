import service from "../utils/axios"

/**
 * 登录接口
 * 
 */
export function Login(data) {
    console.log("login.js")
    console.log(data)
    // let res = []
    // res.push(data)
    // console.log(res)
    return service.request({
        method: 'post',
        url: '/boss/checkLogin/',
        data: data
    })
}