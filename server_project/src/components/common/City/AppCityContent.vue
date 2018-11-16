<template>
     <div class="app-citys-content">
        <mt-index-list>
            <mt-index-section 
                v-for = "(value, key) in cities"
                :key  = "key"
                :index="key"
            >
                <mt-cell
                    v-for = "city in value"
                    :key  = "city.id"
                    :title= "city.name" 
                     @click.native = "changeCity(city)"
                ></mt-cell>
               
            </mt-index-section>
        </mt-index-list>
     </div>
</template>
<script>
import { IndexList , IndexSection, Cell} from 'mint-ui'
import { mapState } from 'vuex';
import { CHANGE_CITY} from '@/store/city/mutation-types'
export default {
    conpoents:{
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    // data(){
    //     return {
    //         city:[]
    //     }
    // },
    // async beforeCreate () {
    //     let result = await this.$http({
    //         url:'api/v4/api/city'
    //     })
      
    //     this.city= result.cities;
       
    // },
    // computed:{
    //     cities(){
    //         return this.$util.cities(this.city)
    //     }
    // }

    computed: { 
        ...mapState(['city']), 
        cities () {         
            return this.$util.cities(this.city.cities)
        }
    },

    methods:{
        changeCity({id:cityId,name:cityName}){                                         
            this.$store.commit({type: 'city/' + CHANGE_CITY, city:{
                cityId,cityName
            }})
        }
    }

}
</script>

<style>

</style>

