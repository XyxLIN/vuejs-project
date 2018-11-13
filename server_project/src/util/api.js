

import _ from 'lodash'

const api ={

    addGoods({id,address,price,num=1}){

        return new Promise(resolve=>{
            setTimeout(async()=>{
                let { goods } = await this.getCarGoods()

                let good=_.find(goods,item=>item.id===id)

                if(good) {
                    good.num += num
                }else{
                    good.push({
                        id,address,price,num
                    })
                }

                this.changeCarGoods(goods)

                resolve ({status: 200 , goods})
            },200);
        })
    },

    getCarGoods(){
        return new Promise(resolve =>{
            setTimeout(()=>{
                resolve({
                    status:200,
                    goods:localStorage.goods?JSON.parse(localStorage.goods) : []
                })
            },200)
        })
    },
    changeCarGoods(goods){
        localStorage.goods = JSON.stringify(goods)
        
    },

    controlGoodNumber({id, control_type}){
        return new Promise(resolve=>{
            setTimeout(async()=>{
                let {goods} = await this.getCarGoods()

                let good = _.find(goods,item=>item.id===id)

                good.num += control_type ? 1 :-1

                if( good.num <=0){
                    _.remove(goods, item =>item === id)
                }

                this.changeCarGoods(goods)
                resolve({
                    status:200,
                    goods
                },200)

            })
        })
    }
}

export default api