const userReg = {
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
    departmentId: [{
        required: true,
        message: "请选择部门",
        trigger: "change"
    }, ],
    jobId: [{
        required: true,
        message: "请选择职务",
        trigger: "change"
    }, ],
}


export default userReg;