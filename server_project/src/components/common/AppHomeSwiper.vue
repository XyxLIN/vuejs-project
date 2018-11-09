<template>
    <div class="app-home-swiper">
        <swiper v-if = "imgList.length" :options="swiperOption" ref="mySwiper" >
            <swiper-slide
                v-for ="item in imgList" :key="item.id"
            >  
            
            <img width="100%" :src="item.img">
            </swiper-slide>
            <div class="swiper-pagination" slot = "pagination"></div>
        </swiper>

         <div class="footer_content">
                <div class="icon">
                    <i class="iconfont icon-ziyuan"></i>
                    <span>采购单 </span>
                </div>
                  <router-link tag="div" :to = "{name:'shop'}" class="icon">
                    <i class="iconfont icon-ziyuan1"></i>
                    <span>供应商</span>
                  </router-link>
                  <div class="icon">
                    <i class="iconfont icon-ziyuan2"></i>
                    <span>通知</span>
                </div>
                  <div class="icon">
                    <i class="iconfont icon-ziyuan3"></i>
                    <span>每日任务</span>
                </div>
                 
            </div>    
    </div>
</template>

<script>
    export default {
            data() {
        return {
            swiperOption: {
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true, 
            autoplay: true   
            },
            imgList:[
                {
                id:1,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541517687106&di=21e0457190390781db1b362baf48cedb&imgtype=0&src=http%3A%2F%2Fzikao.2018.cn%2Fattachment%2Falbum%2F201502%2F1423833381lpnqb.jpg"
            },
            {
                id:2,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541517687106&di=3b2385ed2e172df1bc36881654139b46&imgtype=0&src=http%3A%2F%2Fimg.univs.cn%2F20121010%2F6%2F20121010153818625842986804.jpg"
            }
            
            ]
        }
    },
       computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    }
</script>

<style>
.app-home-swiper{
    height:3rem;
    width:100%;
    padding:0;
    margin-top:.9rem;;

}
.swiper-slide{
    overflow: hidden;
}

</style>