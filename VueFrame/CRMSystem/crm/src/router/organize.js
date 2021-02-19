import UserList from "../pages/organize/UserList.vue";
import UserHandle from "../pages/organize/UserHandle.vue";
import DepartmentList from "../pages/organize/DepartmentList.vue";
import DepartmentHandle from "../pages/organize/DepartmentHandle.vue";
import JobList from "../pages/organize/JobList.vue";
import JobHandle from "../pages/organize/JobHandle.vue";

const organizeArr = [
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

export default organizeArr;