<template>

        <header class="app_footer">
            <div  class="footer_content">
                <router-link  tag="div" active-class="active" class="icon" :to = "item.path"
                    v-for =" item in navs " 
                    :key = "item.id"
                >
                    
                    <i :class ="item.classfa"></i>
                    <span >{{item.title}} </span>
                <!-- </div>
                  <div class="icon">
                    <i class="fa fa-bullhorn"></i>
                    <span>消息</span>
                </div>
                  <div class="icon">
                    <i class="fa fa-user"></i>
                    <span>我的</span>
                </div> -->
                </router-link>
            </div>    


        </header>


</template>

<script>

export default {
   
    data() {
        return {
            navs : [
                {id:1,title:"首页", classfa:"fa fa-home ", path:'/home'},
                {id:2,title:"消息", classfa:"fa fa-bullhorn ",path:'/chat'},
                {id:3,title:"我的", classfa:"fa fa-user ",path:'/mine'}
            ]
        }
    },

    	created() {
			this.title=this.createTitle()
			this.$router.beforeEach((to,from , next) =>{
                this.title=this.createTitle(to);
                // this.$router.$on('change:test',title =>this.title = title)
				// console.log(this.createTitle(to))
				next();
			})
		},
		methods:{
			createTitle (to) {
                // console.log(to)
				let _to = to || this.$route
				switch(_to.name){
                    case 'home' : return '北京';
					case 'shop':return '供应商';
					case 'mine':return '个人中心';
					case 'chat':return '消息';
				}
			}
		}
}
  
</script>

<style lang="scss">
.app_footer{
    position:fixed;
    bottom:0;
    left:0;
    background:#eee;
    width:100%;
   
}
.footer_content{
    display: flex;
    justify-content: space-between;
    align-self:center;
    width:100%;
     margin-top:.3rem
    /* height:1.333rem; */
    /* padding:.2rem */
    
}
.icon{
    width:6rem;
    display: flex;
    flex-direction: column;
}
.active {
   .fa {
       color:#007ACC 
   }
    
    
}
</style>
