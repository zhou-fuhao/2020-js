let customerAddModule = (function () {
    let $username = $('.username'),
        $spanusername = $('.spanusername'),
        $man = $('#man'),
        $woman = $('#woman'),
        $useremail = $('.useremail'),
        $spanuseremail = $('.spanuseremail'),
        $userphone = $('.userphone'),
        $spanuserphone = $('.spanuserphone'),
        $userqq = $('.userqq'),
        $spanuserqq = $('.spanuserqq'),
        $userweixin = $('.userweixin'),
        $select = $('select'),
        $textarea = $('textarea'),
        // 当前登录用户的ID和name
        // $loginId = $('.loginid'),
        // $loginName = $('.loginname'),
        $submit = $('.submit');
    // 默认为修改状态
    let isUpdate = true,
        customerId = '';

    // 数据回显
    let queryBaseInfo = () => {
        axios.get('/customer/info', {
            params: {
                customerId
            }
        }).then((res) => {
            let {
                code,
                data: {
                    name,
                    sex,
                    email,
                    phone,
                    QQ,
                    address,
                    type, //重点客户、一般客户、放弃客户
                    userId,
                    userName,
                    weixin
                }
            } = res;
            if (code == 0) {
                if (sex == 1) {
                    $woman.prop('checked', true);
                }
                $username.val(name);
                $useremail.val(email);
                $userphone.val(phone);
                $userqq.val(QQ);
                $userweixin.val(weixin);
                $textarea.val(address);
                $select.val(type);
                // $loginId.val(userId);
                // $loginName.val(userName);
                // sessionStorage.setItem('loginId', userId);
                // sessionStorage.setItem('loginName', userName);
            }
        });
    }

    // 用户名校验
    let checkUserName = () => {
        let value = $username.val().trim();
        if (!value) {
            $spanusername.html('用户名不能为空！');
            return false;
        }
        $spanusername.html('');
        return true;
    }

    // 邮箱校验
    let checkEmail = () => {
        let value = $useremail.val().trim(),
            reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!value) {
            $spanuseremail.html('邮箱不能为空！');
            return false;
        }
        if (value.length > 30) {
            $spanuseremail.html('邮箱长度最大30位！');
            return false;
        }
        if (!reg.test(value)) {
            $spanuseremail.html('邮箱格式不正确！');
            return false;
        }
        $spanuseremail.html('');
        return true;
    }

    // 电话校验
    let checkPhone = () => {
        let value = $userphone.val().trim(),
            reg = /^1[3|4|5|7|8][0-9]{9}$/;
        if (!value) {
            $spanuserphone.html('电话不能为空！');
            return false;
        }
        if (value.length != 11) {
            $spanuserphone.html('电话长度是11位！');
            return false;
        }
        if (!reg.test(value)) {
            $spanuserphone.html('电话格式不正确！');
            return false;
        }
        $spanuserphone.html('');
        return true;
    }

    // QQ校验
    let checkQQ = () => {
        let value = $userqq.val().trim(),
            reg = /^[1-9][0-9]{4,}$/;
        if (!value) {
            $spanuserqq.html('QQ不能为空！');
            return false;
        }
        if (5 > value.length || value.length > 12) {
            $spanuserqq.html('QQ长度是5-12位！');
            return false;
        }
        if (!reg.test(value)) {
            $spanuserqq.html('QQ格式不正确！');
            return false;
        }
        $spanuserqq.html('');
        return true;
    }

    // 给提交按钮绑定点击事件
    let bindSubmit = () => {
        $submit.on('click', function () {
            checkUserName();
            checkEmail();
            checkPhone();
            checkQQ();
            if (!checkUserName() || !checkEmail() || !checkPhone() || !checkQQ()) {
                alert('提交失败，请按规则填写信息~');
                return;
            }
            let url = isUpdate ? '/customer/update' : '/customer/add',
                obj = {
                    name: $username.val().trim(),
                    sex: $man.prop('checked') ? 0 : 1, //数据错误，男应为1 女应为0
                    email: $useremail.val().trim(),
                    phone: $userphone.val().trim(),
                    QQ: $userqq.val().trim(),
                    address: $textarea.val(),
                    type: $select.val(), //重点客户、一般客户、放弃客户
                    // userId: $loginId.val().trim(),
                    // userName: $loginName.val().trim(),
                    // userId: sessionStorage.getItem('loginId'),
                    // userName: sessionStorage.getItem('loginName'),
                    weixin: $userweixin.val().trim()
                };
            if (isUpdate) {
                obj.customerId = customerId;
            }
            axios.post(url, obj).then((res) => {
                let {
                    code
                } = res;
                if (code == 0) {
                    alert('已成功提交~，即将跳转到列表', {
                        handled() {
                            location.href = 'customerlist.html';
                        }
                    });
                } else {
                    return Promise.reject();
                }
            }).catch(() => {
                alert('提交失败，请重试！')
            });
        });
    }

    return {
        init() {
            customerId = location.href.queryURLParams().customerId || '';
            if (!customerId) {
                isUpdate = false;
            }
            if (isUpdate) {
                queryBaseInfo();
            }
            $username.on('blur', checkUserName);
            $useremail.on('blur', checkEmail);
            $userphone.on('blur', checkPhone);
            $userqq.on('blur', checkQQ);
            bindSubmit();
        }
    }
}());
customerAddModule.init();