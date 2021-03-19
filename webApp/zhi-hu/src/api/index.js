import axios from "./axios";


// 获取今日新闻信息：http://news-at.zhihu.com/api/4/news/latest
export function queryLatest() {
    return axios.get('/api/4/news/latest');
}

// 过往消息：http://news-at.zhihu.com/api/4/news/before/20191203
export function queryBefore(date) {
    return axios.get(`/api/4/news/before/${date}`);
}

// 详细内容信息：http://news-at.zhihu.com/api/4/news/9717858
export function queryInfo(data) {
    return axios.get(`/api/4/news/${data}`);
}

// 查看评论数：http://news-at.zhihu.com/api/4/story-extra/9717858
export function storyExtra(data) {
    return axios.get(`/api/4/story-extra/${data}`);
}