<template>
    <section class="app-detail" v-if = "info">
        <app-header></app-header>
        <div class="img-box1">
            <img width="100%" :src="info.cover.origin" alt="">
        </div>
        <div class="film-word1" >影片简介</div>
      
        <app-footer></app-footer>
    </section>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/Appfooter'
export default {
       components:{
        AppHeader,
        AppFooter
    },
    props: ['id'],
    async created () {
        let result = await this.$http({
            url: '/api/v4/api/film/'+ this.$route.params.id,
            params: { __t: Date.now() }
        })
        this.info = result.film

        // this.info.name
    },
    computed: {
        actors () {
            return this.info.actors.map(actor => actor.name).join(' | ')
        }
    },
    data () {
        return {
            info: null
        }
    },
    // beforeRouteUpdate () {
    //     console.log('change')
    // }
}
</script>

<style lang="scss" >
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

