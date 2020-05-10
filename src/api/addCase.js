import service from "../utils/axios"

/**
 * 确诊人员接口 
 * 
 */
export function GetAddUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/findUserBytidqq',
        data: data
    })
}
/**
 * 新增人员接口 
 * 
 */
export function AddUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/add',
        data: data
    })
}
/**
 * 删除人员接口 
 * 
 */
export function DeleteAddUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/delet',
        data: data
    })
}
/**
 * 查询人员接口 
 * 
 */
export function SelectAddUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/getUserById',
        data: data
    })
}
/**
 * 更新人员接口 
 * 
 */
export function UpdateAddUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/update',
        data: data
    })
}