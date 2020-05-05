/**
 *过滤特殊的字符
 *
 * 
 */
export function stripScript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
/**
 * 验证邮箱
 */
export function validateEmail(value) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !reg.test(value) ? true : false;
}
/**
 * 验证用户名
 */
export function validateUser(value) {
    let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    return !reg.test(value) ? true : false;
}

/**
 * 验证密码 6至20位的字母+数字 
 */
export function validatePwd(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return !reg.test(value) ? true : false;
}
/**
 * 验证验证码
 */
export function validateVCode(value) {
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
}
/**
 * 验证年龄
 */
export function validateAge(value) {
    let reg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    return !reg.test(value) ? true : false;
}
/**
 * 验证sfz
 */
export function validateSfz(value) {
    let reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
    return !reg.test(value) ? true : false;
}
/**
 * 验证电话号码
 */
export function validatePhone(value) {
    let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return !reg.test(value) ? true : false;
}