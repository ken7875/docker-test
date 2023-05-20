<template>
  <div>
    <input type="text" v-model="loginParams.account">
    <input type="text" v-model="loginParams.password">
    <button @click="login">登入</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { loginApi } from '@/api/auth'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useAuth } from '@/stores/myStore'

const authStore = useAuth()
const { setUserData } = authStore

const loginParams = ref({
  account: 'testUser',
  password: 'testUser'
})

const cookies = useCookies()

const login = async () => {
  try {
    const loginData = await (await loginApi(loginParams.value)).data
    cookies.set('token', loginData?.token)
    setUserData(loginData?.data?.user)
  } catch (error) {
    console.log(error)
  }
}
</script>