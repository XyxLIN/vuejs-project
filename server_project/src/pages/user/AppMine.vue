<template>
<div class="mine-content">
     <home-header></home-header>
    <div class="mine_img_box">
        <br>
    
    <br>
            <span class="personal">个人中心</span>
        <div class="mine_header">
        </div>
    </div>

    <div class="username">用户名
        <p>会员
            <el-rate
  v-model="value5"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>


        </p>

        </div>
    
    <div class="mine_types">
        <transition
          name="fade" >   
             <div class="mine_sign animated"><br><br><p class="fa fa-pie-chart">&nbsp;任务完成进度</p></div> 
             </transition>
         <div class="mine_task"><br><br><p class="fa fa-pencil">&nbsp;每日签到</p></div>
          <div class="mine_grade"><br><br>积分</div> 
           <div class="mine_squence"><br><br><p class="fa fa-line-chart">&nbsp;积分排行</p></div>

     </div>
    <home-footer>
    </home-footer>
</div>
</template>
<script>
import animate from 'animate.css'
import HomeHeader from "@/components/layout/AppHeader"
import  HomeFooter from "@/components/layout/Appfooter"

export default {
  
      
    data() {
      return {
        value5: 3.7
      }
    },
  
     components:{
          HomeHeader,
          HomeFooter
     }
   
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

    .mine-content{
        width:100%;
        /* height:37.5rem; */
        margin-top:1.338rem;
    }
    .personal{
        height:.8rem;
         color:#ccc;
        text-align: center;
    }
    .mine_img_box{
        background:#2C7CD6;
        width:100%;
        height:3.875rem;
        position:relative;
        text-align :center;

    }
    .username{
        margin-top:1.5rem;
        color:#ccc;
        text-align: center;
    }
    .mine_header{
        width:3.125rem;
        height:3.125rem;
        border-radius: 50%;
        background: #ccc;
        position: absolute;
        top:2.1rem;
        left:3.4rem;
    }
    .mine_types{
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
        align-items: center;
        margin-top:.5rem;
    }
    .mine_sign  {

        width:6rem;
        height:3.75rem;
        background:#FF9800;
        font-size:.666rem;
        color:#fff;
        text-align: center;
        .fa-pie-chart{
            color:#fff;
        }
    }
     .mine_task{
        width:3.9rem;
        height:3.75rem;
        background:#2196F3;
        font-size:.666rem;
        color:#fff;
         .fa-pencil{
            color:#fff;
            font-size: .6rem;
        }
    }
     .mine_squence{
        width:7.75rem;
        height:3.75rem;
        background:#FE8C45;
         font-size:.666rem;
        color:#fff;
        .fa-line-chart{
            color:#fff;
            font-size: .8rem;
        }
    }
     .mine_grade{
        width:2.2rem;
        height:3.75rem;
        background:#FE8C45;
        font-size:.666rem;
        color:#fff;
    }
</style>
