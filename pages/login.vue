<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <div class="login_option">
          <nuxt-link to="/forgetPwd">忘记密码？</nuxt-link>
          <nuxt-link to="/register">注册</nuxt-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "login",
    data() {
      return {
        ruleForm: {
          username:'',
          password:'',
        },
        rules:{
          username:[
            {
              required:true,
              message:'请输入用户名',
              trigger:'blur'
            }
          ],
          password:[
            {
              required:true,
              message:'请输入密码',
              trigger:'blur'
            }
          ]
        }
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$router.push({path:'/'})

            axios.post('api/users/login',this.ruleForm)
            .then(res=>{
              if(res.data.code === 200){
                this.$router.push({path:'/'})
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped lang="scss">
.login{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBtn{
    width: 100%;
  }
  .login_option{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
