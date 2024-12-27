import axios from 'axios';

// 设置默认配置
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.timeout = 5000; // 请求超时时间

export default axios;
