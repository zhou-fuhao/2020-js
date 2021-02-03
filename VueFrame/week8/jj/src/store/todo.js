export default {
    nameSpaced: true,
    state: {
        todoList: []
    },
    mutations: {
        // 改变todoList的方法
        updateTodoList(state, payload) {
            state.todoList = payload;
        }
    },
    actions:{
        // 此处支持异步
        // 发送异步的请求，请求成功以后，去commit一个mutations，把请求回来的数据通过payload传递给state里的todoList
        updateTodoListAction({commit},params){
            // axios.get('list',{}).then((res)=>{
            //     commit('updateTodoList',res.data)
            // });
        }
    }
};