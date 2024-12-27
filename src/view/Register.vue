<template>
  <div class="register-container">
    <el-card class="register-card" shadow="hover">
      <h2>用户注册</h2>
      <el-form :model="form" :rules="rules" ref="registerForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            v-model="form.confirmPassword"
            type="password"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegister">注册</el-button>
          <el-button type="text" @click="$router.push('/login')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error('两次输入的密码不一致'));
              } else {
                callback();
              }
            },
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    async handleRegister() {
      // 表单验证
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          try {
            console.log('准备发送数据:', this.form); // 调试日志
            const response = await axios.post(
              'http://127.0.0.1:8000/api/users/register/',
              this.form,
              {
                headers: {
                  'Content-Type': 'application/json', // 确保请求为 JSON 格式
                },
              }
            );
            console.log('服务器返回:', response.data); // 调试日志
            this.$message.success('注册成功，请登录');
            this.$router.push('/login');
          } catch (error) {
            console.error('注册失败:', error); // 调试日志
            this.$message.error('注册失败，请稍后重试');
          }
        }
      });
    },
  },
};
</script>


<style>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
}
.register-card {
  width: 400px;
  padding: 20px;
  text-align: center;
}
</style>
