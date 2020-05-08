import service from "../utils/axios"

/**
 * 管理员信息接口
 * 
 */
export function GetUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'boss/findAll',
        data: data
    })
}