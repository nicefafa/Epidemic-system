import {
    Login
} from "../../api/login";

import {
    setToKen,
    removeToKen,
    removeUserName,
    setUserName,
    getUserName,
    setTid,
    removeTid
} from "@/utils/checkToken";

const state = {
    to_ken: '',
    username: getUserName() || ''
}

const getters = {
    to_ken:state =>state.to_ken

}

const mutations = { // 必须的  同步 没有回调处理事情
    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    },
    SET_TID(state, value) {
        state.tid = value
    },


}

const actions = { // 可以回调处理事情 
    login({commit}, requestData){
        return new Promise((resolve, reject) => {
            Login(requestData).then((response) => {
                let data = response.data
                commit('SET_TOKEN', data.result2);
                commit('SET_USERNAME', data.result);
                commit('SET_TID', data.result1);
                setToKen(data.result2);
                setUserName(data.result);
                setTid(data.result1)
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
            removeTid();
            commit('SET_TOKEN', '');
            commit('SET_USERNAME', '');
            commit('SET_TID', '');
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