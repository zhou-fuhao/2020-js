const jobReg = {
    jobName: [{
            required: true,
            message: "请输入职务名称",
            trigger: "blur"
        },
        {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
        },
    ],
    jobDesc: [{
        required: true,
        message: "请填写职务描述",
        trigger: "blur"
    }],
    jobPower: [{
        type: 'array',
        required: true,
        message: '请至少选择一个用户权限',
        trigger: 'change'
    }],
}


export default jobReg;