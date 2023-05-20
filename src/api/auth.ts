import request from '@/utils/request'

export const loginApi = ({ account, password }: { account: string, password: string }) => request().post('/user/login', { account, password })