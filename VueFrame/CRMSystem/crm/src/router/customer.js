import CustomerList from "../pages/customer/CustomerList.vue";
import CustomerHandle from "../pages/customer/CustomerHandle.vue";

const customerArr = [{
        path: '',
        redirect: {
            path: '/customer/list',
            query: {
                type: 'my'
            }
        }
    },
    {
        path: 'list',
        name: 'customerList',
        component: CustomerList
    },
    {
        // 新增页面
        path: 'handle',
        name: 'customerAdd',
        component: CustomerHandle
    },
    {
        // 修改页面
        path: 'handle/:customerId',
        name: 'customerUpdate',
        component: CustomerHandle
    }
];

export default customerArr;