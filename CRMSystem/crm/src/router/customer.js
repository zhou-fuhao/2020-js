import CustomerList from "../pages/Customer/CustomerList.vue";
import CustomerHandle from "../pages/Customer/CustomerHandle.vue";
import VisitList from "../pages/Customer/VisitList.vue";

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
        // 客户回访
        path: 'visitList',
        name: 'visitList',
        component: VisitList
    }
];

export default customerArr;