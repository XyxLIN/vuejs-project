<template>

  <div id="app">

    
   
     
    <main>
        <router-view></router-view>
    </main>
   
  </div>
</template>
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-waterfall/vue-waterfall.min.js"></script>
<script>



export default {
  name:"app",
  components:{
   
  
  },
  created() {
    this.$router.beforeEach((to , from , next )=>{
      if(to.name !=='mine'){
        this.$Progress.start()
       console.log('beforeEach')
      }
      next()
    })
    this.$router.afterEach((to , from , next) =>{
      if(to.name !=='mine'){
        this.$Progress.finish()
        console.log('afterEach')
      }
    })
},



}


</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content_icon_info{
  margin-top:1.333333rem;
  display:flex;

}

*{
  padding:0;
  margin:0
}

</style>
