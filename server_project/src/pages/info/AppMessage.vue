<template>
 <section>
     11111
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
</div>
<!--         
        <wxChat :data="wxChatData" 
        :showShade="false" contactNickname="简叔" 
        :getUpperData="getUpperData" 
        :getUnderData="getUnderData"
         :ownerAvatarUrl="ownerAvatarUrl"
         :contactAvatarUrl="contactAvatarUrl" 
         :width="420">
          </wxChat> -->



        <!-- <div class="message-right">
            派单消息
        </div> -->
        <!-- <div class="message-footer">
        </div> -->
    
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
              {id:2,title:'派单消息',type:"send"},
        //         { direction: 2, //为2表示微信主人发出的消息，1表示联系人 
        //         id:3, //根据这个来排序消息 
        //         type: 3, //1为文本，2为图片 
        //         content: '你好!![呲牙]', //当type为1时这里是文本消息，当type2为2时这里要存放图片地址；后续会支持语音的显示 
        //         ctime: new Date().toLocaleString() //显示当前消息的发送时间 
        //   }
          ],
          type:'save',
          islistShow : false,

             
     }
     

    },
        components:{
                HomeHeader,
                HomeFooter,
                // wxChat
     },



}

        //  methods: {
        //      //向上滚动加载数据 
        //      getUpperData(){ var me = this; 
        //      // 这里为模拟异步加载数据 // 实际上你可能要这么写: // return axios.get('xxx').then(function(result){ // return result; //result的格式需要类似下面resolve里面的数组 // }) 
        //      return new Promise(function(resolve){
        //           setTimeout(function(){ 
        //          //模拟加载完毕 
        //          if(me.upperTimes>3){ return resolve([]); } //加载数据


        //           resolve([{ direction: 2, id: me.upperId-1, type: 1, 
        //           content: '向上滚动加载第 ' + me.upperTimes +' 条！', 
        //           ctime: new Date().toLocaleString() }, 
        //           { direction: 1, id: me.upperId-2, type: 1,
        //            content: '向上滚动加载第 ' + me.upperTimes +' 条！', 
        //            ctime: new Date().toLocaleString() }] ) }, 1000);
        //             me.upperId= me.upperId+2; me.upperTimes++; }) },
        //              getUnderData(){ var me = this; //意义同getUpperData() 


        //              return new Promise(function(resolve){
        //                   setTimeout(function(){ //模拟加载完毕 
        //                   if(me.underTimes>3){ return resolve([]); }
        //                    //加载数据 
        //                    resolve( [{ direction: 1, id: me.underId+1, type: 1, 
        //                    content: '向下滚动加载第 ' + me.underTimes +' 条！', 
        //                    ctime: new Date().toLocaleString() }, 
        //                    { direction: 2, id: me.underId+2, type: 1,
        //                     content: '向下滚动加载第 ' + me.underTimes +' 条！', 
        //                     ctime: new Date().toLocaleString() }] ) }, 1000); 
        //                     me.underId = me.underId+2; me.underTimes++; 
        //                     }) 
        //              }
        //  }

 
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