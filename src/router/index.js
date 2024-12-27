import { createRouter, createWebHistory } from 'vue-router';
import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Home from '../view/Home.vue';
import ProductDetail from '../view/ProductDetail.vue';

const routes = [
    { path: '/', redirect: '/login' }, // 重定向到登录页面
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/register', component: Register }, // 拼写错误修正：`/regisetr` 改为 `/register`
    { path: '/product/:id', component: ProductDetail, props: true },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.path === '/home' && !token) {
      next('/login');
    } else {
      next();
    }
  });
  

export default router;
