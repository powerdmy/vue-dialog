import Vue from 'vue'
import AlertComponent from './src/main'


// 合并对象函数
function merge(target){
    for(var i = 1,j = arguments.length;i<j;i++){
        let source = arguments[i]
        for(let prop in source){
            if(source.hasOwnProperty(prop)){
                let value = source[prop]
                if(value !== undefined){
                    target[prop] = value;
                }
            }
        }
        return target
    }
}

let instance

// 返回组件
let AlertConstructor = Vue.extend(AlertComponent)

// 实例化组件
let initInstance = () => {
    instance = new AlertConstructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
}

let Alert = (option = {}) => {
    // 实例化
    initInstance()
    // 合并对象
    merge(instance.$data,option)
    // 返回promise
    return new Promise((resolve,reject) => {
        instance.show = true
        let success = instance.success
        let cancel = instance.cancel
        instance.success = () => {
            success();
            resolve('ok')
        }
    })
}

export default Alert