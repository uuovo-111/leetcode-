<template>
  <div class="product-card">
      <h2>{{ product.name }}</h2>
      <p>来源: {{ product.source }}</p>
      <p>价格: {{ product.price }}</p>
      <p>特色功能:</p>
      <ul>
          <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
      </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 接收父组件传递的商品对象
const props = defineProps({
  product: Object
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
}
</style>