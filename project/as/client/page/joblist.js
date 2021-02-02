let jobListModule = (function () {
    let $thead = $('thead'),
        $headTh = $thead.find('th'),
        $tbody = $('tbody');

    // 先按照权限去显示页面的数据
    let userPower = decodeURIComponent(localStorage.getItem('power'));
    // ** 校验权限 **
    let checkPower = () => {
        // 说明当前用户没有操作的权限，把批量删除、全选、操作全部删了
        if (!userPower.includes('userhandle')) {
            $headTh.last().remove(); // 删除表头的最后一个
        }
    }

    // 获取职务列表请求
    let render = () => {
        axios.get('/job/list').then((res) => {
            let {
                code,
                data
            } = res;
            if (code == 0) {
                let str = ``;
                $.each(data, (index, item) => {
                    let {
                        id,
                        name,
                        desc,
                        power
                    } = item;
                    str += `<tr data-id='${id}' data-name='${name}'>
                                <td class="w8">${index+1}</td>
                                <td class="w10">${name}</td>
                                <td class="w20">${desc}</td>
                                <td class="w50">${power}</td>
                                ${userPower.includes('userhandle') ? `<td class="w12">
                                    <a href="jobadd.html?jobId=${id}">编辑</a>
                                    <a href="javascript:;">删除</a>
                                </td>`:''}
                            </tr>`;
                });
                $tbody.html(str);
            } else {
                $tbody.html('');
            }
        });
    }

    // 进行每一个员工的删除操作
    let bindHandle = () => {
        $tbody.on('click', function (e) {
            let target = e.target,
                tagName = target.tagName,
                tagVal = target.innerText.trim();
            let jobId = $(target).parent().parent().attr('data-id'),
                jobName = $(target).parent().parent().attr('data-name');

            if (tagName === 'A' && tagVal === '删除') {
                alert(`您确定要删除 ${jobName} 吗？`, {
                    title: '您当前的操作很重要',
                    confirm: true,
                    handled(msg) {
                        if (msg != 'CONFIRM') return;
                        axios.get('/job/delete', {
                            params: {
                                jobId
                            }
                        }).then((res) => {
                            console.log(res);
                            if (res.code == 0) {
                                alert('删除成功', {
                                    handeled() {
                                        render();
                                    }
                                });
                            } else {
                                alert('删除失败，请重试！');
                            }
                        });
                    }
                });
            }
        });
    }

    return {
        init() {
            checkPower();
            render();
            bindHandle();
        }
    }
}());
jobListModule.init();