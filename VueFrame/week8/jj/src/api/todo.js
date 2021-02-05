// 这里存储的是当前todo页面组件的请求的方法
// 项目里的请求和vuex中的分模块一样，每一个组件都有自己的小模块，用来存储自己的请求
import axios from "./axios";

// 请求task列表的接口
export function queryTodoList(params = {}) {
    return axios.get('/getTaskList', {
        params: {
            limit: 100,
            page: 1,
            state: 0,
            ...params
        }
    })
};

// 新建任务接口
export function addTask(data = {}) {
    return axios.post('/addTask', {
        // task: '',
        // time: '',
        ...data
    });
}

// 删除数据的接口
export function removeTask(data = {}){
    return axios.get('/removeTask',{
        params:{
            ...data
        }
    });
}

// 完成任务
export function completeTask(data = {}){
    return axios.get('/completeTask',{
        params:{
            ...data
        }
    });
}


// 使用时
// 导入
// import { queryTodoList } from "./todo";
// 方法使用
// queryTodoList().then();

// api里的方法会再action中或者组件中去调用