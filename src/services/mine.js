import request from '@/utils/request'

export async function login(params, data) {
  return request('/userApi/login', { params, data, method: 'POST' })
}