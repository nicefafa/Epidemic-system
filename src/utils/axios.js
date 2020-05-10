import axios from 'axios'
// import {getToKen,getUserName} from "./checkToken"
import {
    Message
} from "element-ui";
//创建拦截器
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/devApi"
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什
    // config.headers["token"] = getToKen()
    // config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log("发送请求错误")
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    // 业务需求
    if (data.code !== 200) {
        Message.error(data.massege);
        return Promise.reject(data);
    } else {
        return response;
        // return Promise.resolve(data);
    }

}, function (error) {
    // 对响应错误做点什么
    console.log("接受错误")
    
    return Promise.reject(error);
});
export default service;