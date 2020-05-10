import service from "../utils/axios"

/**
 * 外出人员接口 
 * 
 */
export function GetOutUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'gopeopel/findGopeopelDaoBytidq',
        data: data
    })
}
/**
 * 增加返乡人员接口 
 * 
 */
export function AddOutUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'gopeopel/add',
        data: data
    })
}
/**
 * 删除返乡人员接口 
 * 
 */
export function DeletOutUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'gopeopel/delet',
        data: data
    })
}
/**
 * 更新返乡人员接口 
 * 
 */
export function UpdateOutUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'gopeopel/update',
        data: data
    })
}
/**
 * 获取一条返乡人员接口 
 * 
 */
export function SelectOutUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'gopeopel/getGopeopelById',
        data: data
    })
}