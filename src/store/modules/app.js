import {
    Login
} from "../../api/login";

import {
    setToKen,
    removeToKen,
    removeUserName,
    setUserName,
    getUserName
} from "@/utils/checkToken";

const state = {
    to_ken: '',
    username: getUserName() || ''
}

const getters = {

}

const mutations = { // 必须的  同步 没有回调处理事情
    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    },

}

const actions = { // 可以回调处理事情 
    login({commit}, requestData){
        console.log("login/actions")
        console.log(requestData)
        return new Promise((resolve, reject) => {
            Login(requestData).then((response) => {
                console.log("来到app/login/Login")
                console.log(requestData)
                let data = response
                commit('SET_TOKEN', data.result1);
                commit('SET_USERNAME', data.username);
                setToKen(data.result1);
                setUserName(data.username);
                console.log("11111")
                resolve(response)
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
    },
    
    exit({
        commit
    }) {
        return new Promise((resolve, reject) => {
            removeToKen();
            removeUserName();
            commit('SET_TOKEN', '');
            commit('SET_USERNAME', '');
            resolve();
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