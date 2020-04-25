import axios from "axios"
import config from "../config/index"

const baseUrl = process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro



class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.queue = {} //请求队列
    }

    //写死的配置
    getConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {} //请求头
        }
        return config;
    }
    //封装拦截和响应
    interceptors(instance, url) {
        instance.interceptors.request.use((config => {
            //配置的处理
            console.log("拦截处理")
            console.log(config)
            return config;
        }))

        instance.interceptors.response.use((res) => {
            //配置的处理
            console.log("响应处理")
            console.log(res)
            return res;
        }, (error) => {
            //请求错误
            console.log(error)

        })

    }
    // 与config相结合 成为完整的配置
    request(options) {
        const instance = axios.create() //创建实例
        //assign 后面的options会覆盖前面的config
        options = Object.assign(this.getConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options);
    }

}
const axiosObj = new HttpRequest(baseUrl);
export default axiosObj