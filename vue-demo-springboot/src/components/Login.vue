<template>
  <el-container style="height: 600px;">
    <el-header>飞狐教育电商管理后台登录</el-header>
    <el-main>
      <el-form :model="loginForm"  style="width:600px;margin-left:30%;margin-top: 10%;"  ref="loginForm"   label-width="100px">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="loginForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" round @click="submitForm()">提交</el-button>
          <el-button @click="resetForm('loginForm')" round>重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>联系我们：010-00000000</el-footer>
  </el-container>
</template>

<script>
    export default {
        data(){
          return{
            loginForm:{
              userName:"",
              password:"",
            }
          }
        }
        ,created(){

        }
        ,methods:{
        submitForm:function () {
          this.loginForm.password=this.$md5(this.loginForm.password);
          this.$http({
            url:"/test/login",
            method:"post",
            params:this.loginForm
          }).then(result=>{
            if(result.data.success!=200){

            }else {
              sessionStorage.setItem("token",result.data.token);
              alert("Login访问返回")
              this.$router.push("/Main")
            }
          })
        }
      }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #246C9C;
    color: #333;
    font-size: 25px;
    color: azure;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    align: center;
    line-height: 500px;
    background: url("/static/images/1.jpg")  fixed ;
  }

  body > .el-container {
    margin-bottom: 20px;
  }
  .el-form-item__label{
    font-size: 18px;
    color: azure;
  }
</style>
