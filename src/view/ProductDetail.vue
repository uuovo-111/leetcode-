<template>
  <div class="product-detail">
    <el-card class="product-card" shadow="hover">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>

      <el-table :data="product.prices" style="width: 100%" class="price-table">
        <el-table-column prop="platform" label="电商平台" />
        <el-table-column prop="price" label="价格" />
      </el-table>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/product/${this.id}/`)
      .then((response) => {
        this.product = response.data;
      });
  },
};
</script>

<style scoped>
/* 设置页面整体布局 */
.product-detail {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* 商品卡片样式 */
.product-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* 商品名称样式 */
.product-name {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

/* 商品描述样式 */
.product-description {
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
}

/* 表格样式 */
.price-table {
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 表格标题行背景 */
.el-table th {
  background-color: #f8f8f8;
  font-weight: bold;
}

/* 价格列样式 */
.el-table-column {
  text-align: center;
}

/* 行悬浮效果 */
.el-table tr:hover {
  background-color: #f5f5f5;
}

/* 响应式设计，适应小屏设备 */
@media (max-width: 768px) {
  .product-detail {
    margin: 20px;
  }

  .product-name {
    font-size: 24px;
  }

  .product-description {
    font-size: 14px;
  }
}
</style>
