import axios from '@/utils/request'
import { getToken } from '@/utils/token'
// 获取文章列表的api

const getArticleListAPI = ({ channel_id, timestamp }) => {
  return axios({
    url: '/v1_0/articles',
    params: {
      channel_id,
      timestamp
    }
  })
}
// 获取用户频道的api
const getAllchannelsAPI = () => {
  return axios({
    url: '/v1_0/user/channels',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
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
