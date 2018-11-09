<template>
 <section>
     <home-header></home-header>
    <div class="message-content"
   >
        <div class="message-left"
          v-for = "item in message"
     :key = "item.id"
     @click = "type=item.type"
     :class="{choosing : item.type===type}" >
            {{item.title}}
        </div>
        <!-- <div class="message-right">
            派单消息
        </div> -->
        <!-- <div class="message-footer">
        </div> -->
    </div>
    <div v-if = "islistShow" class="message-list">
        <ul>
            <li class="item_li">
                <div class="fa fa-user-circle"> </div>
                <span class="message">未读消息未读消息新消息新消息</span>
            </li>

             <li class="item_li">
                <div class="fa fa-user-circle"> </div>
                <span class="message">未读消息未读消息新消息新消息</span>
            </li>

             <li class="item_li">
                <div class="fa fa-user-circle"> </div>
                <span class="message">未读消息未读消息新消息新消息</span>
            </li>
             <li class="item_li">
                <div class="fa fa-user-circle"> </div>
                <span class="message">未读消息未读消息新消息新消息</span>
            </li>

        </ul>
        </div>
        <home-footer></home-footer>
 </section>
</template>

<script>
import HomeHeader from "@/components/layout/AppHeader"
import  HomeFooter from "@/components/layout/Appfooter"
export default {
    data () {
      return {
          message:[
              {id:1,title:"接单消息" , type:"save"},
              {id:2,title:'派单消息',type:"send"}
          ],
          type:'save',
          islistShow : false
      }
  },
     components:{
          HomeHeader,
          HomeFooter
     }
   
}


</script>

<style lang="scss">
.message-content{
    margin-top:1.6rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding:.3rem;
    .message-left{
        // color:#888;
    }
    .message-right{
        // color:#888;
    }
}
.message-list{
    
    ul li{
        list-style: none;
        width:100%;
        border-bottom:1px solid #ccc;
        padding:.3rem;
    }
    .item_li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:.3rem;
    }
    .message{
        flex-grow: 1;
    }
}
.choosing{
    color:rgb(240, 90, 21);
    border-bottom:solid;
    font-size: .5rem;
    // width:1.25rem;
}
</style>