<template>
  <div>
    <template v-if="token">
        <p>{{ userData?.name }}</p>
        <p>{{ userData?.gender }}</p>
        <button>登出</button>
    </template>
    <template v-else>
      <p>登入</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/stores/myStore'
import { storeToRefs } from 'pinia';
import { useLocalStorage } from '@vueuse/core'

const authStore = useAuth()
const { token, userData } = storeToRefs(authStore)
</script>