import axios from 'axios'
const service = axios.create({
    // 配置
    baseURL: process.env.VUE_APP_API_BASE, // 域名配置
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    withCredentials: true, // 跨域请求时是否需要使用凭证
    timeout: 30000, // 请求超时时间
})

// {   // `data` 由服务器提供的响应
//     data: {},
//      // `status` 来自服务器响应的 HTTP 状态码
//     status: 200,
//     // `statusText` 来自服务器响应的 HTTP 状态信息
//     statusText: 'OK',
//     // `headers` 服务器响应的头
//     headers: {},
//      // `config` 是为请求提供的配置信息
//     config: {},
//     // 'request'   // `request` is the request that generated this response   // It is the last ClientRequest instance in node.js (in redirects)   // and an XMLHttpRequest instance the browser
//     request: {}
// }

// 错误处理函数
function errorHandle(response) {
    switch (response.status) {
        case 400:
            // 处理错误信息，例如抛出错误信息提示，或者跳转页面等处理方式。
            // return Promise.resolve(error)
            break;
        case 401:
            //
            break;
        case 404:
            //
            break;
        // ...
        default:
            throw new Error("未知错误");
    }
}
// 成功处理函数

function successHandle(response) {
    switch (response.status) {
        case 200:
            //
            return response.data;
        // ....
        default:
            return;
    }
}
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        // 错误抛到业务代码
        error.data = {};
        error.data.msg = "服务器异常";
        return Promise.resolve(error);
    }
);

service.interceptors.response.use(
    (response) => {
        successHandle(response);
    },
    (err) => {
        errorHandle(err);
    }
);

export default service;