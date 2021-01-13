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
                
            }
        });
    }

    return {
        init() {
            checkPower();
            render();
        }
    }
}());
departmentListModule.init();