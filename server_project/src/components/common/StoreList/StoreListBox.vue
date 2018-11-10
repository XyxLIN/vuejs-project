<template>
    <div ref = "root" class="app-films-list">
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
import scroll from '@/util/scroll'
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
            immediate:true,
             handler(){
                this.getStoreList();
        }
        }
      
    },

    methods:{
        async getStoreList(){
              let result = await this.$http({
                url : '/api/v4/api/film/'+this.type,
                params:{
                    page:this.page,
                    count:7
                }
            })
        this.films =result.films;
        if(result.page.total - result.page.current<=0){
                this.hasMore=false
        }
        else{
            this.page++;
        }

           this.films=this.films.concat(result.films)
            }
        
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
