<template>
    <router-link tag="div" :to="{name:'detail',params:{id: info.id},query:{name:info.name}}" class="app-home-content">
        <div class="img-box">
            <img width="100%" :src="info.poster.thumbnail" alt="" >
        </div> 

        <div class="item-info">
            <h3 class="title"> {{info.name}}</h3>
            <p class="description">{{info.intro}}</p>
            <p class="showInfo">{{info.premiereAt | premiere(true)}}</p>
             <!-- <span class="wish">{{info.watchCount}}</span><span>人想看</span>   -->
        </div>
        <div class="grade">
           
          <router-link tag="div" :to="{ name:'book',params:{id:info.id},query:{name:info.name}}"> <button  class="btn">购票</button> </router-link>
           
         <!-- <el-button style="margin-left: 15px;" type="danger" size = "mini">加入购物车</el-button> -->
        </div>
         
    </router-link>

</template>

<script>
    import Book from "@/pages/details/book";
    export default {
        data(){
            return {
                num:1
            }
        },
        props : ['info'],
        component:{
            Book
        },
       
    }

</script>

<style lang="scss">
.app-home-content{
    padding: .533333rem ;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer; 
    display: flex;
    justify-content: space-between;
}

.grade {
    margin-right: .8rem;
    font-size: 16px;
    color: #fc7103;  

}
.img-box{
     width: 1.6rem;
    //  height: 2.20168rem; 
}
.item-info{
     flex: 1 1 ;
     padding-left: .4rem;
     display: flex;
     flex-flow: column;
     justify-content: space-around;
     text-align: left;
    
}
.showInfo {
     color: #fc7103;  
}
.title{
    // max-height:1.5rem;
    // margin-bottom:.4375rem;
    // overflow: hidden;
    width:5rem;
}
.wish{
    // width:5rem;
    color:#FAB20C;
}
.btn{
    width: 1.2rem;
    height: .8875rem;
    line-height: .8875rem;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: .25rem;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
</style>