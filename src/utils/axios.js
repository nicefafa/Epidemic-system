import axios from 'axios'

//创建拦截器
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/devApi"
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什
    console.log("发送请求之前")
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log("发送请求错误")
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    console.log("接收到的数据")
    // 对响应数据做点什么
    let data = response.data
    // 业务需求
    if (data.resCode !== 0) {
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