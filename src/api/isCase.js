import service from "../utils/axios"
/**
 * 隔离人员接口 
 * 
 */
export function GetISUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/findUserBytidqg', //findUserBytidqg
        data: data
    })
}
/**
 * 删除隔离人员接口 
 * 
 */
export function DeletISUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/delet',
        data: data
    })
}
/**
 * 新增隔离人员接口 
 * 
 */
export function AddISUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'admini/add',
        data: data
    })
}
