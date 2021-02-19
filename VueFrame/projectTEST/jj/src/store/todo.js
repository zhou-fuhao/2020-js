import {
    queryTodoList
} from "../api/todo";

export default {
    // 解决不同模块的命名冲突的问题
    namespaced: true,
    state: {
        todoList: []
    },
    mutations: {
        // 改变todoList的方法
        updateTodoList(state, payload) {
            state.todoList = payload;
        }
    },
    actions: {
        // 此处支持异步
        // 发送异步的请求，请求成功以后，去commit一个mutations，把请求回来的数据通过payload传递给state里的todoList
        updateTodoListAction({
            commit
        }, params = {}) {
            queryTodoList(params).then((res) => {
                // 把请求成功的数据存储到state中
                let {
                    code,
                    list
                } = res;
                if (code == 0) {
                    commit('updateTodoList', list);
                } else {
                    commit('updateTodoList', []);
                }
            });
        }
    }
};