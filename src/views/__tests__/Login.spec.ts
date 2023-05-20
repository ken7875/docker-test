import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import Login from '../Login.vue'
import { loginApi } from '../../api/auth'
import { setActivePinia, createPinia } from 'pinia'
import { VueWrapper } from '@vue/test-utils'

const mockLoginData = {
    "_id": "6448d40c3b05917c6e083ef6",
    "name": "testUser",
    "email": "testUser@gmail.com",
    "gender": "male",
    "account": "testUser",
    "password": "$2a$12$NaDm2tiR0vSpeKfbp/8m2eEaBZi/Y8/NRt65142q53nfxrwMv8bFS",
    "identityId": "A123456789",
    "phone": "0912121212",
    "country": "台灣",
    "address": "新北市板橋區",
    "enabled": true,
    "role": "user",
    "unDrawCoupon": 1,
    "createdAt": "2023-04-26T07:34:36.381Z",
    "__v": 0,
    "id": "6448d40c3b05917c6e083ef6"
}

vi.mock('../../api/auth', () => ({
  loginApi: vi.fn(() => Promise.resolve({ data: { user: mockLoginData } }))
}))

describe('login test', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('login api has been called', async() => {
    // console.log(store, 'store')
    const wrapper = mount(Login)

    await wrapper.find('button').trigger('click')
    expect(loginApi).toHaveBeenCalledTimes(1)
  })

  it('login event has been called', async () => {
    
    const wrapper = mount(Login, {
      global: {
        mocks: {
          login: vi.fn(() => {})
        }
      }
    })

    await wrapper.find('button').trigger('click')
    expect((wrapper.vm as any).login).toHaveBeenCalledTimes(1)
  })
})
