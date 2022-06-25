import axios from '@/utils/request'

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
export { getAllchannelsAPI, loginAPI }
