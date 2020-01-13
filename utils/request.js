import axios from 'axios';
import qs from 'qs';
// import store from '@/store';
import {Message} from 'element-ui';

const service = axios.create({
  baseURL: '',
  timeout: 40000,
  transformRequest: [data => qs.stringify(data)],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['Authorization'] = `${store.getters.token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error.message);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    console.log(response);
    if (Number(response.data.code) === 200) {
      return response.data;
    }else {
      Message.error(response.data.message);
      return Promise.reject()
    }
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      Message.error('接口请求超时');
    }

    return Promise.reject(error.message);
  }
);

export default service;
