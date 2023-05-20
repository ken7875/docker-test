<template>
  <main>
    <!-- <button @click="getAllProductsHandler"></button> -->
    <ul>
      <li v-for="(product, i) in productsData" :key="i">{{ product.name }}</li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import axios from 'axios'
import { isRef, ref, watch } from 'vue';

const productsData = ref([])

const getAllProductsHandler = async () => {
  const getAllProducts = await axios.get('http://localhost:8000/api/products')

  productsData.value = getAllProducts.data.data.data
}

getAllProductsHandler()

class State {
  a = 0
  constructor(a: number) {
    this.a = 2
  }

  log(a: number) {
    console.log(a)
  }
}

class State1 extends State {
  constructor(a: number) {
    super(a);
  }

  action() {
    this.log(this.a)
  }
}

const state1 = new State1(1)
state1.action()
</script>
