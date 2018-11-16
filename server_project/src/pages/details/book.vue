<template>
 <div class="book-content">
     <app-header></app-header>
     <el-form @submit.prevent ref="form" :model="form" label-width="80px" >
     
  <el-form-item style="width:8.888rem" class="" label="| 订单地址">
    <el-input   v-if= " films"
      v-model=" films.address"
    >
   </el-input>
  </el-form-item>
  <el-form-item v-if= " films" label="| 订单价格">
    <el-select style="margin-left:-.9rem"  v-model = "films.minimumPrice" placeholder="请选择订单区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>&nbsp;&nbsp;(元)
  </el-form-item>
  <el-form-item label="| 订单时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="| 即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <!-- <el-form-item label="订单性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上订单" name="type"></el-checkbox>
      <el-checkbox label="地推订单" name="type"></el-checkbox>
      <el-checkbox label="线下主题订单" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item> -->
  <!-- <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item> -->
  <!-- <el-form-item label="订单形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item> 
  tag="button" :to = "{name:'cart'}"-->
   <el-form-item label="| 订单数量">
      <el-input-number  size="mini" v-model="num"  :min="1"  ></el-input-number>
  </el-form-item> 
  <el-form-item class="el_submit">
   
    <button @submit.prevent  class="el_button" type="primary"  >立即提交</button>
 
    <el-button @click = "back">取消</el-button>
  </el-form-item>
</el-form>

     <app-footer></app-footer>
     </div>

</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/Appfooter";

export default {
  components: {
    AppHeader,
    AppFooter
  },

  async created() {
    let result = await this.$http({
      url: "/api/v4/api/film/" + this.$route.params.id + "/cinema?",
      params: { __t: Date.now() }
    });
    // console.log(result.cinemas[this.$route.params.id])
    this.films = result.cinemas[100];
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      films: null,
      num: 1
    };
  },
  methods: {
    // onSubmit() {
    //    this.$router.replace({name: 'cart',})
    // },

    // ...mapActions({
    //   addGoods: "car/addGoods"
    // }),
    // addGoodsHandler() {
    //   let { id, name, minimumPrice: price } = this.films;
    //   this.addGoods({
    //     id,
    //     name,
    //     price,
    //     num: this.num
    //   });
     
    //    this.$router.replace({name: 'cart',})
    // },

    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }

      //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
      //如果上面都执行了 页面都跳走了，这个也就不用管了
      //     setTimeout(() => {
      //         this.$router.push({path:'/'})
      //     },500)
      //
    }
  }
};
</script>

<style lang="scss">
.el-form-item__label{
  // border:.0025rem solid #ccc;
  border-radius: .1rem;
  // margin-left:.01rem;
  background-color:#67c23a;
  color:#fff;
}
.book-content{
  margin-left:.3rem;
}
.el-input__inner{
  border-color:#30ce08;
  margin-left:.01rem;
  
}
.el_button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el_submit {
  margin-top: 50px;
  margin-left: -80px;
}
.el-form {
  margin-top: 2.5rem;
  // margin-left:.3rem;
  // width:90%;
}
// .el-input--suffix {
//     .el-input__inner{
//         margin-right:2.7rem;
//         padding-right:0;
//     }
// }
// .el-checkbox+.el-checkbox{
//     margin-left:1.3rem;
// }
</style>