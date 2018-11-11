<template>
    <div class="app_home_info_box">
        <!-- <span class="home_fonts">---  热门推荐  ---</span>
        <p></p>
        <br>
        <hr> -->
        <app-content-item
            v-for = "item in infos"
            :key="item.id"
            :info="item"
        ></app-content-item>
       <p>---更多精彩内容---</p>
    </div>

</template>

<script>
import  AppContentItem from "@/components/common/AppContentItem"
    export default {
        props:['type'],
        data : function(){
            return {
                infos:[],
                page:1,
                hasMore:true
               
            }
        },
        // watch:{
        //     type:{
        //         immediate:true,
        //         handle(){
        //             this.infos = [],
        //             this.hasMore = true,
        //             this.page=1,
        //             this.getFilems()
        //         }
        //     }
        // },
        components:{
            AppContentItem
        },
        // mothods:{
        //     async getFilems(){
        //         if(!this.hasMore) return false;
        //         let 
        //     }

        // },
        async created ()  {
            let { url, count = 5 } =this.type
            let result= await this.$http({
                url:'/api/v4/api/film/'+ url +'?page=1',
                params:{
                    count
                }
            })
          
                this.infos= result.films
              
               
      
        }
    }

</script>

<style>
.app_home_info_box{        
    /* padding-top:6.25rem; */
    margin-bottom:.266667rem;
    overflow: hidden;

}
.home_fonts{
    color:#888;
    font-size:16px;
}

</style>
