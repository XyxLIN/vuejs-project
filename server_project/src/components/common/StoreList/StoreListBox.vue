<template>
    <div ref="root" class="app-films-list">
        <div>
            <app-films-item
                v-for = "film in films"
                :key  = "film.id"
                :info = "film"
            ></app-films-item>     
        </div>  
   
    </div>
</template>

<script>
import AppFilmsItem from '@/components/common/StoreList/StoreListItem'
import Bscroll from '@/util/scroll'
// import { Toast} from 'mint-ui'
export default {
    props: ['type'],
    data () {
        return {
            films: [],
            page: 1, // 页数
            hasMore: true // 是否还有更多
            
        }
    },
    watch:{
        type:{
            immediate : true,
            handler(){
                this.films=[]
                this.page=1
                this.getStoreList()
            }
        }

    },
   
    // mounted(){
    //     this.scroll = scroll({
    //          el: this.$refs.root,
    //         onscroll:(y)=>{
    //             if(y>200){
    //                 this.getStoreList.bind(this)
    //             }
    //         }
    //     })
    // },
    methods:{
        async getStoreList(){
              let result = await this.$http({
                url : '/api/v4/api/film/'+this.type,
                params:{
                    page:this.page,
                    count:20
                }
            })
        this.films =result.films;
        //  this.$nextTick(() => {
        //   this.scroll = new Bscroll(this.$refs.root, {})
        // })
        // if(result.page.total - result.page.current<=0){
        //         this.hasMore=false
        // }
        // else{
        //     this.page++;
        // }

        //    this.films=this.films.concat(result.films)
            },
         
    },
    
    
    components: {
        AppFilmsItem
    },
    
}
</script>

<style lang="scss">
.app-films-list {
    flex: 1 1;
    overflow: hidden;
}
</style>
