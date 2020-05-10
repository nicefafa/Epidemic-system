const adminToKen = "admin_toKen";
const usernameKey = "username";
const townid  ="tid"

// token
export function getToKen() {
    return localStorage.getItem(adminToKen);
}
export function setToKen(toKen) {
    return localStorage.setItem(adminToKen, toKen);
}
export function removeToKen(toKen) {
    return localStorage.removeItem(adminToKen);
}
// tid
export function setTid(tid) {
    return localStorage.setItem(townid, tid);
}
export function getTid() {
    return localStorage.getItem(townid);
}
export function removeTid() {
    return localStorage.removeItem(townid);
}
//username
export function setUserName(value) {
    return localStorage.setItem(usernameKey, value);
}

export function getUserName() {
    return localStorage.getItem(usernameKey);
}

export function removeUserName() {
    return localStorage.removeItem(usernameKey);
}