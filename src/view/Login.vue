<template>
  <div class="login-container">
    <el-card class="login-card" shadow="hover">
      <h2>用户登录</h2>
      <el-form :model="form" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button type="text" @click="$router.push('/register')">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$axios
            .post('http://127.0.0.1:8000/api/users/login/', this.form)
            .then((res) => {
              localStorage.setItem('token', res.data.token);
              this.$router.push('/home');
            })
            .catch((err) => {
              this.$message.error('登录失败，请检查用户名和密码');
            });
        }
      });
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
}
.login-card {
  width: 400px;
  padding: 20px;
  text-align: center;
}
</style>
