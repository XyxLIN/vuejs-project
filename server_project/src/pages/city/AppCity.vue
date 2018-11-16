

    <template>
        <div class="city_content">
            <app-header></app-header>
            <div class="city_content_block">
                <div class="city-title">当前所在城市</div>
                    <div class="content">
                        <div class="city_content_item  active">{{city.city.cityName}}</div>
                    </div>
            </div>
            <div class="city_content_block">
                <div class="city-title">热门城市</div>
                    <div class="content" 
                  
                    >
                        <div class="city_content_item" 
                          v-for="item in hotCitys"
                            :key="item.id"
                            @click.native=" changeCity(city)">{{item.name}}</div>
                    </div>
            </div>
            <app-city-content></app-city-content>
        </div>
    </template>
    
    <script>
    import AppHeader from '@/components/layout/AppHeader'
    
    import AppCityContent from '@/components/common/City/AppCityContent'

    import { mapState} from 'vuex'

    import { CHANGE_CITY } from '@/store/city/mutation-types'

    export default {
        data(){
            return {
                 activeCity: {
                id: 12,
                name: '北京'
            },
            hotCitys: [
                {id: 12, name: '北京'},
                {id: 11, name: '上海'},
                {id: 13, name: '广州'},
                {id: 10, name: '深圳'}
            ]
            }
        },
        components:{
        AppHeader,
        AppCityContent
    },
    computed:mapState(['city']),
    methods:{
        changeCity({id:cityId,name:cityName}){
           
            this.$store.commit({type:'city/'+CHANGE_CITY,city:{
                cityId,cityname
            }
            })
             console.log(city.city.cityName)

        }
    }
    }
    </script>
    
    <style lang="scss">
    .city_content_item{
        width: 25%;
        font-size: .426667rem;
        line-height: 1.226667rem;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        color: #838383;
        border-bottom: #ebebeb 1px solid;
        

        &.active {
                color: #e2941a;
        }
    }
    .content{
        margin-top:-.1rem;
    }
    .city_content_block{
        .city-title{
            padding-left: .4rem;
            font-size: .373333rem;
            line-height: 1.066667rem;
            background-color: #ebebeb;
            margin-top: 1.4rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

        }
    }
    </style>
    