<template>

    <div class="shop-content">
        <home-header></home-header>
        <div class="shop-nav">
            <div class="shop-icon"
                v-for = "item in types"
                :key ="item.id"
                @click ="type = item.type"
                :class = "{choosing:item.type===type}"
            >
                <span>{{item.title}}</span>&nbsp;
                <i class="fa fa-sort-desc"></i>
            </div>


            <!-- <waterfall :line-gap="200" :watch="infos">
                  <waterfall-slot
                        v-for="(item, index) in infos"
                        :width="item.width"
                        :height="item.height"
                        :order="index"
                        :key="item.id"
                        >

               
                 
                 </waterfall-slot>
            </waterfall> -->


            <!-- <div class="shop-icon">
                <span>位置区域</span>&nbsp;
                <i class="fa fa-sort-desc"></i>
            </div> -->
            
         <!-- <div class="shop-icon">
                <span>智能排序</span> &nbsp; 
                <i class="fa fa-sort-desc"></i>
            </div>
            
            <div class="shop-icon">
                <span>筛选</span>&nbsp;
                <i class="fa fa-sort-desc"></i>
            </div> -->


        </div>
        
            <app-content  ref="list" :type="type"

            ></app-content>
       <home-footer>
     </home-footer>
    </div>
   
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import HomeHeader from "@/components/layout/AppHeader"
import  HomeFooter from "@/components/layout/Appfooter"
import AppContent from "@/components/common/StoreList/StoreListBox"


export default {
    props: ['url'],
    data (){
        return {
            types:[
                {id:1,title:'热门推荐',type:"now-playing"},
                {id:2,title:"热门活动",type:"coming-soon"},
                {id:3,title:"筛选",type_shop:""}
            ],
            type:this.url||'now-playing',
            isBackShow:false
        }
    },

    components:{
        Waterfall,
        WaterfallSlot,
        HomeHeader,
        HomeFooter,
        AppContent
    },


    // async created (){
    //     let { url , count =5 } =this.type
    //     console.log(this.type)
    //     let result = await this.$http({
    //         url : '/api/v4/api/film/'+url +'?page=1',
    //         params:{
    //             count
    //         }
    //     })
    //     console.log(result)
    //     this.items = result.films
    //     console.log(this.items);
    // }
        
    
}

</script>

<style>
.shop-content{
    padding-top:1.4rem;
    width:100%;
}
.shop-nav{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: 1.33333rem;
    margin-left:.5rem;
    /* width:100%; */
    /* margin:.2rem; */
}
.shop-icon{
    /* border-left:solid .0625rem #ccc; */
    /* width:100%; */
}
.choosing{
    color:rgb(240, 90, 21);
    border-bottom:solid;
    font-size: .4rem;
}

</style>