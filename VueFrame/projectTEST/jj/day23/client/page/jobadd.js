let jobAddModule = (function () {
    let $jobName = $('.jobName'),
        $spanJobName = $('.spanJobName'),
        $jobDesc = $('.jobDesc'),
        // $userhandle = $('#userhandle'),
        // $departhandle = $('#departhandle'),
        // $jobhandle = $('#jobhandle'),
        // $departcustomer = $('#departcustomer'),
        // $allcustomer = $('#allcustomer'),
        // $resetpassword = $('#resetpassword'),
        $job = $('input[name="job"]'),
        $submit = $('.submit');
    let jobId = '',
        isUpdate = true,
        userPower = ['userhandle', 'departhandle', 'jobhandle', 'departcustomer', 'allcustomer', 'resetpassword'];

    // 点击编辑时，数据回显
    let queryBaseInfo = () => {
        axios.get('/job/info', {
            params: {
                jobId
            }
        }).then((res) => {
            let {
                code,
                data: {
                    name,
                    desc,
                    power
                }
            } = res;
            if (code == 0) {
                $jobName.val(name);
                $jobDesc.val(desc);
                power = power && power.split('|');

                for (let j = 0; j < power.length; j++) {
                    if (userPower.includes(power[j])) {
                        $('#' + power[j] + '').prop('checked', true);
                    }
                }
            }
        });
    }

    // 校验职务名称
    let checkJobName = () => {
        let value = $jobName.val().trim();
        if (!value) {
            $spanJobName.html('职务名称不能为空！');
            return false;
        }
        $spanJobName.html('');
        return true;
    }


    // 给提交按钮绑定事件
    let bindSubmit = () => {
        $submit.on('click', function () {
            checkJobName();
            if (!checkJobName()) {
                alert('提交失败，请按规则填写信息~');
                return;
            }

            let power = '';
            $('input[name="job"]:checked').each(function () {
                power += $(this).val() + '|';
            });
            power = power && power.slice(0, power.length - 1);

            let url = isUpdate ? '/job/update' : '/job/add',
                obj = {
                    name: $jobName.val().trim(),
                    desc: $jobDesc.val().trim(),
                    power
                };
            if (isUpdate) {
                obj.jobId = jobId;
            }
            axios.post(url, obj).then((res) => {
                if (res.code == 0) {
                    alert('已成功提交~，即将跳转到列表', {
                        handled() {
                            location.href = 'joblist.html';
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
            jobId = location.href.queryURLParams().jobId || '';
            if (!jobId) {
                isUpdate = false;
            }
            if (isUpdate) {
                queryBaseInfo();
            }
            $jobName.on('blur', checkJobName);
            bindSubmit();
        }
    }
}());

jobAddModule.init();