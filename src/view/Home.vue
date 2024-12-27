<template>
  <div>
    <el-header class="header">商品比价网站</el-header>
    <el-main>
      <div class="search-container">
        <el-input
          v-model="search"
          placeholder="搜索商品"
          class="search-bar"
        ></el-input>
        <el-button type="primary" class="search-btn" @click="searchProducts">
          搜索
        </el-button>
      </div>

      <el-row :gutter="20" class="product-grid">
        <el-col v-for="product in products" :key="product.id" :span="6">
          <el-card
            class="product-card"
            shadow="hover"
            @click="viewProduct(product.id)"
          >
            <div class="product-name">{{ product.name }}</div>
            <div class="product-description">{{ product.description }}</div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods: {
    fetchProducts() {
      axios.get('http://127.0.0.1:8000/api/product/random-products/').then((response) => {
        this.products = response.data;
      });
    },
    searchProducts() {
      console.log('搜索功能开发中');
    },
    viewProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>


<style scoped>
/* 设置整个页面的背景颜色和字体 */
body {
  background-color: #f7f5f2;
  font-family: 'Arial', sans-serif;
}

/* Header 样式 */
.header {
  background-color: #ff85a2; /* 粉色背景 */
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 搜索框容器 */
.search-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* 搜索框样式 */
.search-bar {
  width: 400px;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #f0a6c4; /* 粉色边框 */
  transition: all 0.3s ease;
}

/* 搜索框聚焦效果 */
.search-bar:focus {
  border-color: #ff85a2;
  box-shadow: 0 0 5px rgba(255, 133, 162, 0.8);
}

/* 搜索按钮 */
.search-btn {
  margin-left: 10px;
  background-color: #ff85a2;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* 悬浮效果 */
.search-btn:hover {
  background-color: #ff6f96;
}

/* 商品卡片容器 */
.product-grid {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* 商品卡片样式 */
.product-card {
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0a6c4;
}

/* 悬浮效果 */
.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 商品名称和描述 */
.product-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-description {
  font-size: 14px;
  color: #777;
}

/* 商品卡片的字体和阴影 */
.product-card {
  background: #f9f9f9;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

/* 商品卡片悬浮效果 */
.product-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* 响应式布局调整 */
@media (max-width: 768px) {
  .product-grid {
    justify-content: space-evenly;
  }

  .product-card {
    width: 100%;
    margin: 10px 0;
  }
}
</style>

