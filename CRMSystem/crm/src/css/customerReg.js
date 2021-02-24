
    const customerReg = {
        name: [{
                required: true,
                message: "请输入用户名",
                trigger: "blur"
            },
            {
                min: 3,
                max: 15,
                message: "长度在 3 到 15 个字符",
                trigger: "blur",
            },
        ],
        sex: [{
            required: true,
            message: "请选择性别",
            trigger: "change"
        }],
        email: [{
                required: true,
                message: "请输入邮箱",
                trigger: "blur"
            },
            {
                type: "email",
                message: "请输入正确的邮箱地址",
                trigger: "blur"
            },
        ],
        // phone: [{
        //         required: true,
        //         message: "请输入电话",
        //         trigger: "blur"
        //     },
        //     {
        //         type: "number",
        //         min: 10,
        //         max: 50,
        //         message: "电话必须为数字",
        //         trigger: "blur",
        //     },
        // ],
        // QQ: [{
        //         required: true,
        //         message: "请输入QQ",
        //         trigger: "blur"
        //     },
        //     {
        //         type: "number",
        //         min: 10,
        //         max: 50,
        //         message: "QQ必须为数字",
        //         trigger: "blur",
        //     },
        // ],
        weixin: [{
                required: true,
                message: "请输入微信",
                trigger: "blur"
            },
            {
                min: 10,
                max: 50,
                message: "长度在 10 到 50 个字符",
                trigger: "blur",
            },
        ],
        address: [{
            required: true,
            message: "请填写地址",
            trigger: "blur"
        }],
        type: [{
            required: true,
            message: "请选择客户类型",
            trigger: "change"
        }, ],
    }


    export default customerReg;