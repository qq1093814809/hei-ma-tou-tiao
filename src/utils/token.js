const key = 'geek-itheima'
const setToken = (token) => {
  localStorage.setItem(key, token)
}
const getToken = () => {
  localStorage.getItem(key)
}
const removeToken = () => {
  localStorage.removeItem(key)
}
export { removeToken, getToken, setToken }
