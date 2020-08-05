<template>
  <div>
    main.vue
  </div>
</template>

<script>
    export default {
        data(){
          return{}
        },
        created(){
          this.getMain();
        },
        methods:{
            getMain:function () {
                this.$http({
                  url:"/test/getMain",
                  method: "get",
                }).then(result=>{
                    alert("getMain访问返回")
                })
            }
        }
    }
</script>

<style scoped>

</style>
