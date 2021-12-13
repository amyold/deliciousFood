import Axios from "axios";
const instance = Axios.create({
    baseURL: "http://localhost:9000",
    timeout: 10000
})

// 请求拦截器，例如请求的时候在头部加上请求的token
instance.interceptors.request.use(config => {
    return config;  //  有且必须有一个config对象被返回
}, error => {
    console.log(error);
    return Promise.reject();
});

export default instance