<template>
      
    <div class="app-car-item">
        shoping cart
        <el-card class="box-card" shadow="hover">
            <div class="films">
                <!-- <img :src="films.cover.origin" alt=""> -->
                <div class="content">
                    <h3>{{films.address}}</h3>
                    <p>单价: ￥{{films.minimumPrice}}</p>
                </div>
            </div>
            <div class="control">
                <el-input-number :value="films.num" @click = "change" ></el-input-number>
            </div>
        </el-card>
           <div class="control">
                <el-input-number  @click = "change" ></el-input-number>
            </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            films:null
        }
    },
  
    methods:{
        change(val,oldval){
            this.$store.dispatch({
                type:'car/controlGoodNumber',
                id:this.films.id,
                control_type:oldval<val
            })
        }
    },
      async created () {
        let result = await this.$http({
            url: '/api/v4/api/film/'+this.$route.params.id+"/cinema?",
            params: { __t: Date.now() }
        })
        this.films = result.cinemas
         console.log(this.films)
    },
}
</script>
<style lang="scss">
.app-car-item {
    width: 700px;
    margin: 0px auto 20px;

    .el-card__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .films {
            img {
                width: 150px;
                height: 150px;
                margin-right: 15px;
            }
            display: flex;align-items: center;
        }
    }
    
}
</style>
