import Mock from "mockjs"

// 配置请求延时
Mock.setup({
    timeout:1000
})
Mock.mock("/devApi/login",{
    username:"hechuan123",
    password:"123456"
})