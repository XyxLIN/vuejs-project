
import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Apphome from '@/pages/home/home'

import AppMessage from '@/pages/info/AppMessage'

import NotFound from '@/pages/notFound/NotFound'

import AppShop from '@/pages/function/AppShop'

import mine from '@/pages/user/AppMine'

import detail from '@/pages/details/movieDetail'

import login from '@/login'

import Book from "@/pages/details/book";

import cart from '@/pages/cart/cart'

import city from '@/pages/city/AppCity'

const routes = [{
    path :'/',
    redirect:{ name: 'home'}
},
{
    path:'/cart/:id',
    name:'cart',
    component:cart
  
},
{
    path:'/home',
    name:'home',
    component:Apphome
},
{
    path:'/login',
    name:'login',
    component:login
  
},
{
    path:'/city',
    name:'city',
    component:city
  
},

{
    path:'/chat',
    name:'chat',
    component:AppMessage,
    beforeEnter: (to,from ,next) =>{
        let result = localStorage.getItem('phone')
        next(result ? true:{name:'login'})
    }
},
{
    path:'/detail/:id',
    name:'detail',
    component:detail
},
// {
//     path:'/appshop',
//     name:'AppShop',
//     component:AppShop
// },
// {
//     path:'/notfound',
//     name:'notfound',
//     component:NotFound 
// },
{
    path:'/mine',
    name:'mine',
    component:mine,
    beforeEnter: (to,from ,next) =>{
        let result = JSON.parse(localStorage.getItem('phone') )
        next(result ? true:{name:'login'})
    }
},
{
    path:'/shop',
    name:'shop',
    component:AppShop,
    props:true
},
{
    path:'/book/:id',
    name:'book',
    component:Book
}
// {
//     path:'*',
//     redirect:{ name: 'no-found'}
// }

]

const router = new VueRouter({
    mode:'history',
    routes
})


export default router