import {
    defaultRouteMap,
    anayscRouteMap
} from "../../router/index"
const state = {
    allRoute: defaultRouteMap,
    addRoute: anayscRouteMap
}

const getters = {
    allRoute: state => state.allRoute,
    addRoute: state => state.addRoute
}

const mutations = { // 必须的  同步 没有回调处理事情
    SET_allRoute(state, value) {
        state.allRoute = defaultRouteMap.concat(value)
    }

}
// 处理动态路由
const actions = { // 可以回调处理事情 
    createRoute({commit}) {
        return new Promise((resolve, reject) => {
            commit("SET_allRoute", anayscRouteMap)
            resolve(state.allRoute)
        })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};