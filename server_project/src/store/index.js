
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


import city from './city'

import { saveCityInStorage} from './plugins'

const store = new Vuex.Store({
    modules:{
        city
    },
    plugins:[ saveCityInStorage ]
})

export default store