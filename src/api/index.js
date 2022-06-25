import axios from '@/utils/request'

// 获取频道的api
const getAllchannelsAPI = () => {
  return axios({
    url: '/v1_0/channels'
  })
}
export { getAllchannelsAPI }
