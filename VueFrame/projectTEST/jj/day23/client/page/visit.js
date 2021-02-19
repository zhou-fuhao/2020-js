let visitModule = (function () {
	let $tbody = $('tbody'),
		$visitText = $('.visitText'),
		$visitTime = $('.visitTime'),
		$submit = $('.submit');

	let customerId = '',
		// 格式化日期 2021/01/01
		time = (new Date).toLocaleString().split(' ')[0].formatTime('{0}-{1}-{2}');

	$visitTime.val(time);

	// 渲染返回列表
	let bindVisitList = () => {
		return axios.get('/visit/list', {
			params: {
				customerId
			}
		}).then((res) => {
			let {
				code,
				data
			} = res;
			if (code == 0) {
				let str = ``;
				$.each(data, (index, item) => {
					let {
						id,
						visitTime,
						visitText
					} = item;
					str += `<tr data-id='${id}'>
								<td class="w5">${id}</td>
								<td class="w15">${visitTime}</td>
								<td class="w70 wrap">${visitText}</td>
								<td class="w10">
									<a href="javascript:;">删除</a>
								</td>
							</tr>`;
				});
				$tbody.html(str);
			} else {
				$tbody.html('');
				// return Promise.reject();
			}
		});
	};

	// 删除数据
	let bindDelete = () => {
		$tbody.on('click', function (e) {
			let target = e.target,
				tagName = target.tagName,
				tagVal = target.innerText.trim();

			if (tagName == 'A' && tagVal == '删除') {
				let visitId = $(target).parent().parent().attr('data-id');
				alert('您确定要删除吗？', {
					confirm: true,
					handled(msg) {
						if (msg != 'CONFIRM') return;
						axios.get('/visit/delete', {
							params: {
								visitId
							}
						}).then((res) => {
							if (res.code == 0) {
								bindVisitList();
							} else {
								return Promise.reject();
							}
						}).catch(() => {
							alert('删除失败，请重试！');
						});
					}
				});
			}
		});
	};

	// 给提交按钮绑定事件
	let bindSubmit = () => {
		$submit.on('click', function () {
			axios.post('/visit/add', {
				customerId,
				visitTime: $visitTime.val(),
				visitText: $visitText.val().trim()
			}).then((res) => {
				if (res.code == 0) {
					alert('已提交成功！', {
						handled() {
							bindVisitList();
							// $visitTime.val('');
							$visitText.val('');
						}
					});
				}
			});
		});
	}



	return {
		init() {
			customerId = location.href.queryURLParams().customerId || '';

			bindVisitList().catch(() => {
				alert('渲染数据失败！');
			});
			bindDelete();
			bindSubmit();
		}
	}
}());
visitModule.init();