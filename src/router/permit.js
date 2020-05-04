import router from "./index";
import store from "../store/index"

import {
    getToKen,
    removeToKen,
    removeUserName
} from "@/utils/checkToken";

const whiteRouter = ['/login']; // indexOf方法，判断数组中是否存在指定的某个对象，如果不存在，则返回-1

//路由守卫
// router.beforeEach((to, from, next) => {
//     if (getToKen()) {
//         if (to.path === "/login") {
//             //需要清空cookie和vuex里面的值
//             removeToKen()
//             removeUserName()
//             store.commit("app/SET_TOKEN","")
//             store.commit("app/SET_USERNAME", "")
//             next()
//         } else {
//             next()
//         }
//     } else {
//         if (whiteRouter.indexOf(to.path) !== -1) {
//             next()
//         } else {
//             next("/login")
//         }
//     }
// })