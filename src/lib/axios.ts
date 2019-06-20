import Axios from 'axios';

// 每个请求都需要携带的公参
const commonQuery = {};

const axiosIns = Axios.create();

axiosIns.interceptors.request.use(config => config, error => Promise.reject(error));

const axios = (url, data: any = {}, method = 'get'): Promise<any> => {
    const config: any = {};
    config.method = method;
    config.url = url;
    config.params = commonQuery;
    const { headers } = data;
    delete data.headers;
    if (method === 'get') {
        config.params = { ...config.params, ...data };
    } else {
        if (data.params) {
            config.params = { ...config.params, ...data.params };
            delete data.params;
        }
        config.data = data;
    }

    // 可能这里会有一些 promise
    return Promise.all([]).then(() => {
        // 鉴权方式自定义
        config.headers = {
            ...headers,
        };
        return axiosIns.request(config).then(response => {
            console.log(response.data);
            return response.data;
        }, error => {
            if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length > 0) {
                console.log(error.response.data.errors[0].message);
            } else {
                console.log('网络貌似有点问题，请稍后再试哦');
            }
            return Promise.reject(error);
        });
    });
};

export default axios;

export { axiosIns };
