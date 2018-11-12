<template>
<section>
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
        <div class="grade"  v-if = "info.isNowPlaying">
            {{info.grade}}
            <br>
            <br>
          <router-link tag="div" :to="{ name:'book',params:{id:info.id},query:{name:info.name}}"> <button  class="btn">购票</button> </router-link>
        </div>
    </router-link>
    <!-- <router-link tag="div" :to = "{name: 'detail', params: {id: info.id}, query: {name: info.name}}" class="app-films-item">
        <div class="img-box"><img :src="info.poster.thumbnail" alt="" width="100%"></div>
        <div class="film-info">
            <p class="title">{{info.name}}</p>
            <p class="description">{{info.intro}}</p>
            <div v-if = "info.isNowPlaying" class="film-counts count" data-reactid=".0.1.$FilmView-.0.1.0.$4439.0.1.4">
                <span class="film-count-color1">{{info.cinemaCount}}</span>
                <span >家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="film-count-color1">{{info.watchCount}}</span>
                <span >人购票  </span>
            </div>
            <p class="time" v-else>{{info.premiereAt | premiere(true)}}</p>
            </div>
        <div class="grade"  v-if = "info.isNowPlaying">{{info.grade}}</div>
    </router-link> -->
  
    </section>
</template>

<script>

export default {
    props: ['info']
 
}
</script>

<style lang="scss">
.app-films-item {
    height: 3.333333rem;
    padding: .533333rem 0.5rem;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer; 
    display: flex;
    justify-content: space-between;

    .img-box {
        width: 2.6rem;
        height: 2.20168rem; 
    }
    .film-info {
        flex: 1 1 ;
        // padding-left: .4rem;
        display: flex;
        flex-flow: column;
        justify-content: space-around;

        .title {
            font-size: 16px;
            color: #000;
        }

        .description, .count, .time {
            font-size: 12px;
            color: #8e8e8e;
        }
        .time {
            color: #ffb375;
        }
    }

    .grade {
        margin-right: .8rem;
        font-size: 16px;
        color: #fc7103;
    }
}
</style>
