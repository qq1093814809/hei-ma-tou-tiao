import theAxios from 'axios'

const axios = theAxios.create({
  baseURL: 'http://geek.itheima.net',
  timeout: 20000
})
export default ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
  return axios({
    url,
    method,
    params,
    data,
    headers
  })
}
