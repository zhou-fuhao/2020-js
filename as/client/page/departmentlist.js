let departmentListModule = (function () {

    let $thead = $('thead'),
        $theadTh = $thead.find('th'),
        $tbody = $('tbody'),
        $search = $('.searchInp');

    // 获取当前用户的权限power
    let power = decodeURIComponent(localStorage.getItem('power'));
    // 校验当前用户的权限
    let checkPower = () => {
        if (!power.includes('userhandle')) {
            $theadTh.last().remove(); // 删除表头的最后一列
        }
    }

    // 渲染列表数据
    let render = () => {
        axios.get('/department/list').then((res) => {
            let {
                code,
                data
            } = res;
            if (code == 0) {
                let str = ``;
                $.each(data, (index, item) => {
                    str += `<tr data-id='${item.id}' data-name='${item.name}'>
                                <td class="w10">${index+1}</td>
                                <td class="w20">${item.name}</td>
                                <td class="w40">${item.desc}</td>
                                ${power.includes('userhandle') ? `
                                    <td class="w20">
                                        <a href="departmentadd.html?departmentId=${item.id}">编辑</a>
                                        <a href="javascript:;">删除</a>
                                    </td>` :''}
                            </tr>`;
                });
                $tbody.html(str);
            } else {
                $tbody.html('');
            }
        });
    }

    // 删除部门列表数据
    let bindHandle = () => {
        $tbody.on('click', function (e) {
            let target = e.target,
                tagName = target.tagName,
                tagVal = target.innerText.trim();
            let departmentId = $(target).parent().parent().attr('data-id'),
                departmentName = $(target).parent().parent().attr('data-name');

            if (tagName === 'A' && tagVal === '删除') {
                alert(`您确定要删除 ${departmentName} 吗？`, {
                    title: '您当前的操作很重要',
                    confirm: true,
                    handled(msg) {
                        if (msg != 'CONFIRM') return;
                        axios.get('/department/delete', {
                            params: {
                                departmentId
                            }
                        }).then((res) => {
                            if (res.code == 0) {
                                alert('删除成功', {
                                    handled() {
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
departmentListModule.init();