import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: '',
      component: () => import('@/views/Login.vue'),
    }
  ]
})

export default router

// declare type Expand<T> = T extends (...args: infer A) => infer R
//   ? (...args: Expand<A>) => Expand<R>
//   : T extends infer O
//   ? {
//     [K in keyof O]: O[K]
//   } : never

// type Item<T> = T extends (infer U)[] ? U : never;
// // type A<T extends number[]> = { a: T }

// const testa1: Item<number[]> = 123


// export type LastArrayElement<ValueType extends readonly unknown[]> =
// 	ValueType extends [infer ElementType]
// 		? ElementType
// 		: ValueType extends [infer _, ...infer Tail]
// 			? LastArrayElement<Tail>
// 			: never;

// const cc: LastArrayElement<[string, number, boolean]> = true
// // export type LastArrayElement2<ValueType extends readonly unknown[]> =
// // 	ValueType extends [infer ElementType]
// // 		? ElementType
// // 		: ValueType

// // type A<T> = T extends [...infer P] ? P : string
// // const bb: A<[number, boolean]> = [1, true]

// type R1<T> = T extends infer P ? {
//   [K in keyof P]: P[K]
// } : never