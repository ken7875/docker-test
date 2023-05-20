import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useLocalStorage } from '@vueuse/core'
// import { userDataLocal } from '@/utils/uselocalStorage'

const cookies = useCookies()

export const useAuth = defineStore('auth', {
  state: () => ({
    token: cookies.get('token'),
    userData: useLocalStorage('userData', null, {
      writeDefaults: false,
      serializer: {
        read(value) {
          return value ? JSON.parse(value) : null
        },
        write(value) {
          return JSON.stringify(value)
        }
      }
    })
  }),
  actions: {
    setUserData (userData: any) {
      this.userData = userData
    }
  }
})
// testUser