let departmentAddModule = (function () {
    let $departmentName = $('.departmentName'),
        $spanDepartmentName = $('.spanDepartmentName'),
        $departmentDesc = $('.departmentDesc'),
        // $spanDepartmentDesc = $('.spanDepartmentDesc'),
        $submit = $('.submit');
    let departmentId = '',
        isUpdate = true;

    // 点击编辑时，数据回显
    let queryBaseInfo = () => {
        axios.get('/department/info', {
            params: {
                departmentId
            }
        }).then((res) => {
            let {
                code,
                data: {
                    name,
                    desc
                }
            } = res;
            if (code == 0) {
                $departmentName.val(name);
                $departmentDesc.val(desc);
            }
        });
    }

    // 部门名称校验
    let checkDepartmentName = () => {
        let value = $departmentName.val().trim();
        if (!value) {
            $spanDepartmentName.html('部门名称不能为空！');
            return false;
        }
        $spanDepartmentName.html('');
        return true;
    }

    // 给提交按钮绑定点击事件
    let bindSubmit = () => {
        $submit.on('click', function () {
            checkDepartmentName();
            if (!checkDepartmentName()) {
                alert('提交失败，请按规则填写信息~');
                return;
            }
            let url = isUpdate ? '/department/update' : '/department/add',
                obj = {
                    name: $departmentName.val().trim(),
                    desc: $departmentDesc.val().trim()
                };
            if (isUpdate) {
                obj.departmentId = departmentId;
            }
            axios.post(url, obj).then((res) => {
                if (res.code == 0) {
                    alert('已成功提交~，即将跳转到列表', {
                        handled() {
                            location.href = 'departmentlist.html';
                        }
                    });
                } else {
                    return Promise.reject();
                }
            }).catch(() => {
                alert('提交失败，请重试！');
            });
        });
    }

    return {
        init() {
            departmentId = location.href.queryURLParams().departmentId || '';
            if (!departmentId) {
                isUpdate = false;
            }
            if (isUpdate) {
                queryBaseInfo();
            }
            $departmentName.on('blur', checkDepartmentName);
            bindSubmit();
        }
    }
}());

departmentAddModule.init();