<template>
      
    <div class="app-car-item">
        <app-header></app-header>
   
        <el-card class="box-card" shadow="hover">
            
            <div class="films"> 
                 <!-- <input id="checkout" type="checkbox"> -->
                <!-- <img src="../../../../public/imges/building.jpg" alt=""> -->
               <div class="content" v-if="films">
                   
                    <h3>店名：{{films.name}}</h3>
                    <h5>地址：{{films.address}}</h5>
                    <p>单价: ￥{{films.minimumPrice}}</p>
                </div>
               
            </div>
            <!-- <div class="control">
                 <el-input-number @click = "change" ></el-input-number>
               
            </div> -->
         
        </el-card> 
        <div class="count">
         <el-button type="primary">总件数</el-button><input class="cart-btn" type="text" placeholder="0">
          <el-button type="success">结  算</el-button><input class="cart-btn" type="text" placeholder="0">
        </div>
           
    </div>
    
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
export default {
    data() {
        return {
            films:null
        }
    },
  
    // methods:{
    //     change(val,oldval){
    //         this.$store.dispatch({
    //             type:'car/controlGoodNumber',
    //             id:this.films.id,
    //             control_type:oldval<val
    //         })
    //     }
    // },
    components:{
        AppHeader
    },
      async created () {
        let result = await this.$http({
            url: '/api/v4/api/film/'+this.$route.params.id+"/cinema?",
            params: { __t: Date.now() }
        })
     
        this.films = result.cinemas[100]
        //  console.log(this.films)
    },
}
</script>
<style lang="scss">
.count{
    position: fixed;
    left:.3rem;
  
}
#checkout{
    width:.5rem;
    height:.3rem;
    margin-right:.3rem;
    
}
.content{
    text-align: left;
}
.box-card{
    margin-top:1.4rem;
}
.app-car-item {
    width: 700px;
    margin: 0px auto 20px;

    .el-card__body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        .films {
            //  flex-wrap: wrap;
             justify-content: space-around;
             align-items: center;
            img {
                width: 150px;
                height: 150px;
                margin-right: 15px;
            }
           
        }
    }
    
}
.cart-btn{
    width:2.2rem;
    height:.9rem;
    margin:0 .2rem;
    border-radius: .2rem;
    text-align: center;
    color:#ccc;
}
</style>
