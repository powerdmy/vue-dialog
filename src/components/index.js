import alert from './alert/index.js';
import Vue from 'vue';

const install = () => {
    // 注册全局组件
    Vue.component(alert.name,alert)
    // 添加全局API
    Vue.prototype.$alert = alert
}

export default install