import CustomerList from "../pages/Customer/CustomerList.vue";
import CustomerHandle from "../pages/Customer/CustomerHandle.vue";
import CustomerCanvas from "../pages/Customer/CustomerCanvas.vue";


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
    },
    {
        // 修改页面
        path: 'canvas',
        name: 'customerCanvas',
        component: CustomerCanvas
    }
];

export default customerArr;