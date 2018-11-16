import { CHANGE_CITY} from '../city/mutation-types'
//给store订阅一个函数，会在每一次commit的时候执行
const saveCityInStorage = (store) =>{
    store.subscribe((mutation,state) => {
        //如果这次提交更改city 更改后的city保存在存储中
        if(mutation.type === 'city/'+CHANGE_CITY){
            if(mutation.payload.cities) localStorage.cities = JSON.stringify(mutation.payload.cities);

            localStorage.city = JSON.stringify(mutation.payload.city)
        }
    })


}

export { saveCityInStorage}