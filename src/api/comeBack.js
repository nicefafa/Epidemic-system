import service from "../utils/axios"

/**
 * 返乡人员接口 
 * 
 */
export function GetComeBackUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'inpeopel/findIopeopelBytidq',
        data: data
    })
}
/**
 * 添加返乡人员接口 
 * 
 */
export function AddComeBackUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'inpeopel/add',
        data: data
    })
}
/**
 * 删除返乡人员接口 
 * 
 */
export function DeletComeBackUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'inpeopel/delet',
        data: data
    })
}
/**
 * 更新返乡人员接口 
 * 
 */
export function UpdateComeBackUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'inpeopel/update',
        data: data
    })
}
/**
 * 搜索一条返乡人员接口 
 * 
 */
export function SelectComeBackUserInfo(data) {
    return service.request({
        method: 'post',
        url: 'inpeopel/getInpeopelById',
        data: data
    })
}