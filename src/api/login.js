import service from "@/api/axios"




/**
 * 注册接口
 * 
 */
export function Register(data) {
    return service.request({
        method: 'post',
        url: '/register/',
        data: data
    })
}