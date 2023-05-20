import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'
import { createTestingPinia } from '@pinia/testing'

describe('Navbar test', () => {
    let createWrapper: any

    beforeEach(() => {
        createWrapper = (initialState: any) => {
            return mount(Navbar, {
                global: {
                    plugins: [createTestingPinia({
                        createSpy: vi.fn(),
                        initialState
                    })]
                }
            })
        }
    })
  it('showing nav items when logout', () => {
    const vm = createWrapper({
        auth: {
            token: null,
            userData: null
        }
    })
    
    expect(vm.text()).toContain('登入')
  })

  it('showing nav items when login', () => {
    const vm = createWrapper({
        auth: {
            token: 'asdasd',
            userData: {
                name: 'asd',
                gender: 'male'
            }
        }
    })
    
    expect(vm.text()).toContain('asd')
    expect(vm.text()).toContain('male')
  })
})