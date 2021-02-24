const departmentReg = {
    jobName: [{
            required: true,
            message: "请输入部门名称",
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
        message: "请填写部门描述",
        trigger: "blur"
    }],
}


export default departmentReg;