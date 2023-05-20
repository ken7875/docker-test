import axios from 'axios'
import { useAuth } from '@/stores/myStore'
import { storeToRefs } from 'pinia'
import { useCookies } from '@vueuse/integrations/useCookies'

const request = () => {
  const instance = axios.create({ baseURL: 'http://localhost:8000/api/' })

  instance.interceptors.request.use(
    async (config) => {
      const getAuth = () => import('@/stores/myStore');
      const authRes = await getAuth()
      const token = authRes.useAuth().token
  
      if (token) {
        instance.defaults.headers.common['Authorization'] = token

        return config
      } else {
        return config
      }
    },
    error => {
      console.log(error)
    }
  )
  instance.interceptors.response.use(
    response => {
        console.log(response.status, 'response.status')
        return response
    },
    error => {
        console.log(error, 'error')
    }
  )

  return instance
}

export default request