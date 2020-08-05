import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        requireAuth:false//requireAuth(走拦截代表是否必须验证)
      }
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      meta:{
        requireAuth:true//requireAuth(走拦截代表是否必须验证)
      }
    }
  ]
})
//发路由之前
router.beforeEach((to,form,next)=>{
  if (to.matched.some(r=>r.meta.requireAuth)) {
    var token=sessionStorage.getItem("token")
    if (token){
      next();
    }else {
      next({
        path:"/"
      })
    }
  }else{
    next();
  }
})
//在路由发起之前执行验证是否有token值
export default router
