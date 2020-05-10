import service from "../utils/axios"
/**
 * 隔离人员接口 
 * 
 */
export function GetSusUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/findUserBytidqy', //findUserBytidqg
        data: data
    })
}
/**
 * 增加隔离人员接口 
 * 
 */
export function AddSusUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/add', //findUserBytidqg
        data: data
    })
}
/**
 * 删除隔离人员接口 
 * 
 */
export function DeletSusUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/delet', //findUserBytidqg
        data: data
    })
}