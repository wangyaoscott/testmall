import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 30000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log('err in instance.interceptors.request.use', err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log('err in instance.interceptors.response.use', err);
  })
  return instance(config)
}
