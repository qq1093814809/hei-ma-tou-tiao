import axios from '@/utils/request'
// 获取文章列表的api
// eslint-disable-next-line camelcase
const getArticleListAPI = (channel_id, timestamp) => {
  return axios({
    url: '/v1_0/articles',
    params: {
      channel_id,
      timestamp
    }
  })
}
// 获取频道的api
const getAllchannelsAPI = () => {
  return axios({
    url: '/v1_0/channels'
  })
}
// 登录界面Api
const loginAPI = ({ mobile, code }) => {
  return axios({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}
export { getAllchannelsAPI, loginAPI, getArticleListAPI }
