import UserList from "../pages/System/UserList.vue";
import UserHandle from "../pages/System/UserHandle.vue";
import UserCanvas from "../pages/System/UserCanvas.vue";
import DepartmentList from "../pages/System/DepartmentList.vue";
import DepartmentHandle from "../pages/System/DepartmentHandle.vue";
import JobList from "../pages/System/JobList.vue";
import JobHandle from "../pages/System/JobHandle.vue";

const systemArr = [
    // 默认请求路径跳转到用户列表
    {
        path: '/',
        redirect: 'user/list'
    },
    {
        path: 'user/list',
        name: 'userList',
        component: UserList
    },
    {
        path: 'user/handle',
        name: 'userAdd',
        component: UserHandle
    },
    {
        path: 'user/handle/:userId',
        name: 'userUpdate',
        component: UserHandle
    },
    {
        path: 'user/canvas',
        name: 'userCanvas',
        component: UserCanvas
    },
    {
        path: 'department/list',
        name: 'departmentList',
        component: DepartmentList
    },
    {
        path: 'department/handle',
        name: 'departmentAdd',
        component: DepartmentHandle
    },
    {
        path: 'department/handle/:userId',
        name: 'departmentUpdate',
        component: DepartmentHandle
    },
    {
        path: 'job/list',
        name: 'jobList',
        component: JobList
    },
    {
        path: 'job/handle',
        name: 'jobAdd',
        component: JobHandle
    },
    {
        path: 'job/handle/:userId',
        name: 'jobUpdate',
        component: JobHandle
    }
];

export default systemArr;