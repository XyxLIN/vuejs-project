<template>

<section class="home">
  <home-header></home-header>
  <home-swiper></home-swiper>
  <div class="hobby">---  热门推荐  ----</div>
  <br>
  <hr>
  <app-content
   v-for = "type in film_types"
   :key="type.id"
   :type="type"
  ></app-content>
  <hr>
  <home-footer></home-footer>
</section>
</template>

<script>
import HomeSwiper from "@/components/common/AppHomeSwiper"
import AppContent from "@/components/common/AppContent"
import HomeHeader from "@/components/layout/AppHeader"
import  HomeFooter from "@/components/layout/Appfooter"

export default {
    name:'home',
    data:function() {
       return {
                film_types: [
                { id: 1, url: 'now-playing', title: '热映',  },
                // { id: 2, url: 'coming-soon', title: '即将上映', count: 3 }
            ]
        }
    },
    components:{
        HomeSwiper,
        AppContent,
        HomeHeader,
        HomeFooter
    }
}
</script>

<style>
.hobby{
    color:#ccc;
    margin-top:6.4rem;
}

</style>