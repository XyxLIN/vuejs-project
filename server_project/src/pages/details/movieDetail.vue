<template>
    <section class="app-detail" v-if = "info">
        <app-header></app-header>
        <div class="img-box1">
            <img width="100%" :src="info.cover.origin" alt="">
        </div>
        <div class="film-word1" >影片简介</div>
        <div class="detail-btn">

            <div class="detail-list">
             <el-input-number size="mini" v-model="num"  :min="1"  ></el-input-number>
            <router-link tag="div"  :to="{ name:'book',params:{id: info.id},query:{name:info.name}}" class="task-btn">接单</router-link>
            </div>

              <div class="detail-list">
             <el-input-number  size="mini" v-model="num1"  :min="1"  ></el-input-number> 
            <router-link tag="div" :to="{ name:'book',params:{id: info.id},query:{name:info.name}}" class="send-btn">派单</router-link>
              </div>
        </div>
        <app-footer></app-footer>
    </section>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/Appfooter'
import book from '@/pages/details/book'
export default {
       components:{
        AppHeader,
        AppFooter,
        book
    },
    props: ['id'],
    async created () {
        let result = await this.$http({
            url: '/api/v4/api/film/'+ this.$route.params.id,   
            params: { __t: Date.now() }
        })
        this.info = result.film
        console.log(this.info.cover.origin)
        // this.info.name
    },
    computed: {
        actors () {
            return this.info.actors.map(actor => actor.name).join(' | ')
        }
    },
    data () {
        return {
            info: null,
            num:1,
            num1:1
        }
    },
    // beforeRouteUpdate () {
    //     console.log('change')
    // }
}
</script>

<style lang="scss" >
.detail-btn{
    margin-top:5rem;
    display: flex;
    justify-content:space-around;
    align-items: center; 
    .detail-list{
        width:3rem;
        display: flex;
        flex-direction: column;
    }
   
    .task-btn{
        // margin:.3rem;
        width: 3.2rem;
        height: .8875rem;
        line-height: .8875rem;
        text-align: center;
        box-sizing: border-box;
        background-color: #f03d37;
        color: #fff;
        border-radius: .25rem;
        white-space: nowrap;
        font-size: 14px;
        cursor: pointer;
        margin-top:.5rem;
    }
    .send-btn{
        // margin:.3rem;
        width: 3.2rem;
        height: .8875rem;
        line-height: .8875rem;
        text-align: center;
        box-sizing: border-box;
        background-color: #3924f152;
        color: #fff;
        border-radius: .25rem;
        white-space: nowrap;
        font-size: 14px;
        cursor: pointer;
        margin-top:.5rem;
    }
}
    .app-detail {
        padding-top:1.36rem;
        .img-box1 {
            height: 5.625067rem;
        }
        color: #333;

        [class^='film-word'] {
            font-size: 12px;
        }
        .film-word1 {
            margin: .426667rem auto;
            border-left: .426667rem solid RGB(228, 200, 156);
            font-size: .426667rem;
            padding-left: 4px;
        }
        .film-word2 {
                height: .48rem;
                overflow: hidden;
                margin-bottom: .266667rem;
                padding-left: .533333rem;
        }
        .film-word3 {
            text-overflow: ellipsis;
            margin-bottom: 2.133333rem;
            padding-left: .533333rem;
            padding-right: .533333rem;
            line-height: .48rem;
        }

    }
</style>

