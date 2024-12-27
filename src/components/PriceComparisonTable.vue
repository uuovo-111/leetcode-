<template>
    <table class="price-comparison-table">
        <thead>
            <tr>
                <th>商品名称</th>
                <th>来源</th>
                <th>价格</th>
                <th>特色功能</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.source }}</td>
                <td>{{ product.price }}</td>
                <td>
                    <ul>
                        <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getProducts } from '../services/productService.js';

const products = ref([]);

// 在组件挂载时获取商品数据
onMounted(() => {
    getProducts().then((data) => {
        products.value = data;
    });
});
</script>

<style scoped>
.price-comparison-table {
    border-collapse: collapse;
    width: 100%;
}

.price-comparison-table th,
.price-comparison-table td {
    border: 1px solid #ccc;
    padding: 8px;
}
</style>