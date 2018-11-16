

import http from '@/util/axios'

import {
    CHANGE_CITY 
} from './mutation-types'



export default {
    async getCurrentPosition (context) {
       
        let cityId = 12
        let cityName='北京'

        //请求城市信息
        let city= await http({
            url: '/api/v4/api/city'
        })

        //定位当前城市
        let result = await http ({
            url:'/bd/location/ip',
            params:{
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        },true)
        
        console.log(result)
        if(result){
            cityName = result.data.content.address.replace('市','')
            for(let i=0; i<city.cities.length;i++){
                if(city.cities[i].name=== cityName){
                    cityId = city.cities[i].cityId;
                    break;
                }
            }
        }

        context.commit({
            type:CHANGE_CITY,
            city:{ cityId,cityName},
            cities:city.cities

        })
    }
}